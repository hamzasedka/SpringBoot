import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AppEntityServices } from '@dom/data/ngrx-data';
import * as Models from '@dom/common/dto';

@Injectable({
  providedIn: 'root'
})
export class AddressesResolver implements Resolve<Models.Address[]> {
  constructor(private readonly entityServices: AppEntityServices) { }
  resolve(): Observable<Models.Address[]> {
    return this.entityServices.addressCollectionService.getAll().pipe(take(1));
  }
}
