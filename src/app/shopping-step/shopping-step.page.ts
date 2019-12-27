import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-step',
  templateUrl: './shopping-step.page.html',
  styleUrls: ['./shopping-step.page.scss'],
})
export class ShoppingStepPage implements OnInit {

  address = {
    name: '',
    email: '',
    phone: '',
    address: '',
    province: '',
    subdistrict: '',
    district: '',
    postal: ''
  };

  constructor(
    private storage: Storage,
    private router: Router) {
    this.storage.get('payment_cart').then((val) => {
      // console.log(val);

      if (val != null) {
        console.log(val);
      }

    });
  }

  ngOnInit() {

  }

  onPageStepPay() {
    console.log(this.address);

    this.storage.remove('payment_address');
    this.storage.set('payment_address', this.address).then(() => {
      console.log('added address');
      this.router.navigate(['/shopping-step-pay']);
    });
    // this.router.navigate(['/shopping-step-pay']);
  }

}
