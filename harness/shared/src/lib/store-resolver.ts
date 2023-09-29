import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Store } from '@bixe/package';

import { Observable, of } from 'rxjs';
import { TodoState, TodoStoreGlobal, TodoStoreIsolated } from './store';

@Injectable({
  providedIn: 'root',
})
export class IsolatedStoreResolver
  implements Resolve<Observable<Store<TodoState>>>
{
  resolve(): Observable<Store<TodoState>> {
    return of(TodoStoreIsolated as Store<TodoState>);
  }
}

@Injectable({
  providedIn: 'root',
})
export class GlobalStoreResolver
  implements Resolve<Observable<Store<TodoState>>>
{
  resolve(): Observable<Store<TodoState>> {
    return of(TodoStoreGlobal as Store<TodoState>);
  }
}

type commingled = {
  global: Store<TodoState>,
  isolated: Store<TodoState>,
}
export const commingledStoreResolver: ResolveFn<commingled> = 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) => {
    return {
      global: TodoStoreGlobal as Store<TodoState>,
      isolated: TodoStoreIsolated as Store<TodoState>,
    } as commingled;
  }