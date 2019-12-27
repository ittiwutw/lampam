import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-step-check',
  templateUrl: './shopping-step-check.page.html',
  styleUrls: ['./shopping-step-check.page.scss'],
})
export class ShoppingStepCheckPage implements OnInit {

  cart: any;
  address: any;
  paymentSummary: any;

  constructor(
    private storage: Storage,
    private router: Router) {
    this.storage.get('payment_cart').then((val) => {
      // console.log(val);

      if (val != null) {
        console.log(val);
        this.cart = val;
      }

    });

    this.storage.get('payment_address').then((val) => {
      // console.log(val);

      if (val != null) {
        console.log(val);
        this.address = val;
      }

    });

    this.storage.get('payment_summary').then((val) => {
      // console.log(val);

      if (val != null) {
        console.log(val);
        this.paymentSummary = val;
      }

    });
  }

  ngOnInit() {
  }

  onClickPay() {
    this.onClickBankPay();
  }

  onClickBankPay() {
    this.router.navigate(['/shopping-bank-transfer']);
  }

}
