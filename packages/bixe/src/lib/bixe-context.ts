import { Observable, of, ReplaySubject, Subject, Subscription } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { StateContext } from './state-context';
import { Store } from './store';
import { BixeBus } from './bixe-bus';

// const _isEqual = require('lodash.isequal');

export class BixeContext {
  private _state = {} as any;
  private _state$ = new Subject();
  private _storeStates: { [key: string]: ReplaySubject<any> } = { };
  private _storeContexts: { [key: string]: StateContext<any> } = { };
  private _subscription = new Subscription();
  private _rootStateSubscribedTo = false;

  get state$(): Observable<any> {
    return this._state$;
  }

  private _createStateContext<T>(store: Store<T>) {

    this._storeContexts[store.name] = new StateContext<T>(
      () => ({ ...this._getStoreStateByName(store.name) }),
      (action?: any) => store.dispatch.bind(this)(action),
      (state: T) => this._setStoreState.bind(this)(store.name, state),
      (state: Partial<T>) => this._patchStoreState.bind(this)(store.name, state),
      () => this._bus.stateContext.state$
    );

    return this._storeContexts[store.name];
  }

  private _initializeRootStateSubscription() {
    if (this._rootStateSubscribedTo) { return; }

    this._subscription.add(
      this._state$.subscribe((state: any) => {
        this._state = { ...state };
      })
    );

    this._rootStateSubscribedTo = true;
  }

  private _patchStoreState<T>(storeName: string, state: Partial<T>): Observable<any> {
    return this._setStoreState(storeName, {
      ...this._getStoreStateByName(storeName),
      ...state
    })
  }

  private _setInitialState(store: Store<any>): void {
    store.logger.logDispatchedActionStart({ type: `[${store.name}]` }, this.getState(), 'Initializing store ');
    this._setStoreState(store.name, store.initialState);
    store.logger.logDispatchedActionEnd(this.getState());
    this.createSelectorForStore(store.name, (state) => state);
  }

  private _setStoreState<T>(storeName: string, state: T): Observable<any> {
    this._subscribeToStore(storeName);
    return of(this._storeStates[storeName].next(state));
  }

  private _subscribeToStore(storeName: string) {
    if (!storeName) { return; }
    
    if (!this._storeStates[storeName]) { 
      this._storeStates[storeName] = new ReplaySubject<any>(1);
      this._subscription.add(
        this._storeStates[storeName].subscribe((storeState: any) => {
          const previousState = { ...this.getState() };
          const nextState = { ...previousState, ...{ [storeName]: { ...storeState } } };
          this._state$.next(nextState);
        })
      );
    }
  }

  constructor(private _bus: BixeBus) {
    this._initializeRootStateSubscription();
  }

  createRootSelector<Tt>(predicate: (state: Tt) => any): Observable<Partial<Tt>> {
    return this._state$.pipe(
      map((rootState: any) => predicate(rootState)),
      distinctUntilChanged() //(prev, curr) => _isEqual(prev) === _isEqual(curr)),
    );
  }

  createSelectorForStore<Tt>(storeName: string, predicate: (state: Tt) => any) {
    this._subscribeToStore(storeName);
    return this._storeStates[storeName].pipe(
      map((storeState: any) => predicate(storeState)),
      distinctUntilChanged() //(prev, curr) => _isEqual(prev) === _isEqual(curr))
    );
  }

  getState(): any {
    return { ...this._state };
  }

  getStateContext<T>(storeName: string): StateContext<T> {
    return this._storeContexts[storeName] || new StateContext<T>(
      () => ({ ...this._getStoreStateByName(storeName) }),
      (action?: any) => this._bus.dispatch.bind(this)(action),
      (state: T) => this._setStoreState.bind(this)(storeName, state),
      (state: Partial<T>) => this._patchStoreState.bind(this)(storeName, state),
      () => this._bus.stateContext.state$
    )
  }

  private _getStoreStateByName(storeName: string) {
    return this.getState()[storeName] || { };
  }

  createContextForStore(store: Store<any>): void {
    this._createStateContext(store);
    this._setInitialState(store);
  }

}
