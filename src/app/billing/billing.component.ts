import { Component, OnInit } from '@angular/core';
import { BillingService } from '../services/billing.service';
import { Billing } from '../classes/billing';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  billingData: Billing[];
  constructor(private billingService: BillingService) { }

  ngOnInit() {
    this.getBillingData();
  }

  getBillingData() {
    this.billingService.getBillingData()
      .subscribe(data => this.billingData = data);
      console.log(this.billingData)
  }
}
