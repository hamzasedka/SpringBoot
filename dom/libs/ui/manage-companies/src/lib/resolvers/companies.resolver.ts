import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AppEntityServices } from '@dom/data/ngrx-data';
import * as Models from '@dom/common/dto';

@Injectable({
  providedIn: 'root'
})
export class CompaniesResolver implements Resolve<Models.Company[]> {
  constructor(private readonly entityServices: AppEntityServices) { }
  resolve(): Observable<Models.Company[]> {
    return this.entityServices.companiesCollectionService.getAll().pipe(take(1));
  }
}
