import { Observable } from "rxjs";

export class StateContext<T> {

  constructor(
    public getState: () => T,
    public dispatch: (...args: any) => Observable<void>,
    public setState: (state: T) => Observable<void>,
    public patchState: (patch: Partial<T>) => Observable<void>,
    public getRootState: () => any,
  ) { }

}
