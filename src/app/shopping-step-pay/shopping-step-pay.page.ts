import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-step-pay',
  templateUrl: './shopping-step-pay.page.html',
  styleUrls: ['./shopping-step-pay.page.scss'],
})
export class ShoppingStepPayPage implements OnInit {
  banks = [
    {
      name: 'กสิกรไทย',
      number: '726-1-01778-9'
    },
    {
      name: 'กรุงเทพ',
      number: '188-0-74777-7'
    }];

  colorButton = 'gray-secondary';
  bankNameSelect = '';
  selectBank = true;
  selectMethod = 'bank';

  paymentSummary: any;

  constructor(
    private storage: Storage,
    private router: Router) {

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

  onClickCheck() {
    console.log(this.selectMethod);
    this.paymentSummary.method = this.selectMethod;
    this.storage.set('payment_summary', this.paymentSummary).then(() => {
      console.log('updated');
      this.router.navigate(['/shopping-step-check']);
    });
    // this.router.navigate(['/shopping-step-check']);
  }


  onSelectBank(name) {
    this.bankNameSelect = name;
    // this.isSelectBack = true;
    this.colorButton = 'cartfooter';
  }

  onClickBank() {
    // if (this.selectBank) {
    //   this.selectBank = false;
    // } else {
    this.selectBank = true;
    // }

  }

  onClickOther() {
    this.selectBank = false;
  }

}
