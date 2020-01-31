import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { select, Store as NgRxStore } from '@ngrx/store';
import { EMPTY, from, Observable } from 'rxjs';
import { catchError, switchMap, take, tap, filter } from 'rxjs/operators';

import { AppEntityServices } from '@dom/data/ngrx-data';
import * as Store from '../store';
import * as Models from '@dom/common/dto';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Models.Product> {
  constructor(
    private readonly router: Router,
    private readonly entityServices: AppEntityServices,
    private readonly store: NgRxStore<Store.ProductsAllFeaturesState>,
  ) { }

  resolve(): Observable<Models.Product> | Observable<never> {
    return this.store.pipe(select(Store.getProductIdFromRoute)).pipe(
      filter(uid => !!uid),
      take(1),
      switchMap(uid =>
        !!uid ?
          this.entityServices.productsCollectionService.getByKey(uid)
          : this.fail()),
      tap(product => {
        this.store.dispatch(Store.setEditProduct({ productId: product?.uid }));
      }),
      catchError(() => this.fail())
    );
  }

  private fail(): Observable<never> {
    return from(this.router.navigate(['/', 'error'])).pipe(
      switchMap(() => EMPTY),
      catchError(() => EMPTY)
    );
  }
}
