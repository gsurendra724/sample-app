import { Injectable } from '@angular/core';
import { Billing } from '../classes/billing';
import { BILLINGDATA } from '../classes/mock-billing-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  getBillingData(): Observable<Billing[]> {
    return of(BILLINGDATA);
  }
}
