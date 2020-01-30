import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AppEntityServices } from '@dom/data/ngrx-data';
import * as Models from '@dom/common/dto';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<Models.Product[]> {
  constructor(private readonly entityServices: AppEntityServices) { }
  resolve(): Observable<Models.Product[]> {
    return this.entityServices.productsCollectionService.getAll().pipe(take(1));
  }
}
