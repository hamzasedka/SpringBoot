import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface Component {
  ngOnDestroy?(): void;
}

export function takeUntilDestroyed(component: Component): <T>(source: Observable<T>) => Observable<T> {
  const ngOnDestroyCalled$ = ComponentDestroyed(component);
  return <T>(source$: Observable<T>) => source$.pipe(takeUntil(ngOnDestroyCalled$));
}

const PATCH_SYMBOL = Symbol();

function ComponentDestroyed(component: Component): Observable<unknown> {
  if (!IsPatched(component)) {
    const ngOnDestroyName = component.ngOnDestroy.name;
    const ngOnDestroy = component[ngOnDestroyName];
    if (!IsFunction(ngOnDestroy)) {
      throw new Error(`When using takeUntilDestroyed(), ${component.constructor.name}::${ngOnDestroyName} is required.`);
    }
    const ngOnDestroyCalled$ = new ReplaySubject(1);
    component[ngOnDestroyName] = () => {
      ngOnDestroyCalled$.next();
      ngOnDestroyCalled$.complete();
      ngOnDestroy.call(component);
      Patch(component, undefined);
    };
    Patch(component, ngOnDestroyCalled$.asObservable());
  }
  return component[PATCH_SYMBOL];
}

function IsFunction(value: any): boolean {
  return typeof value === 'function';
}

function IsPatched(component: Component): boolean {
  return !!component[PATCH_SYMBOL];
}

function Patch(component: Component, observable: Observable<unknown>): void {
  component[PATCH_SYMBOL] = observable;
}
