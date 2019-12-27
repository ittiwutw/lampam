import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController, Events } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cart: any;
  data: any;
  total: any;
  constructor(
    private storage: Storage,
    private router: Router,
    public alertCtrl: AlertController) { }

  ngOnInit() {
    this.storage.get('cart').then((val) => {
      // console.log(val);

      if (val != null) {
        this.data = val;
        this.sortCart();
        this.calculatePrice();
      } else {
        this.data = [];
        this.storage.remove('cart');
      }

    });


  }

  ionViewDidEnter() {
    this.storage.get('cart').then((val) => {
      // console.log(val);

      if (val != null) {
        this.data = val;
        this.sortCart();
        this.calculatePrice();
      } else {
        this.data = [];
        this.storage.remove('cart');
      }

    });
  }

  sortCart() {

    this.data.sort(this.sortByProperty('id'));
    let currentProductId;
    let index = 0;
    this.cart = [];
    let dupIndex = 1;
    for (const entry of this.data) {

      if (currentProductId === entry.id) {
        this.cart[index - dupIndex].amt = parseInt(this.cart[index - dupIndex].amt) + parseInt(entry.amt);
        dupIndex++;
      } else {
        this.cart.push(entry);
      }

      currentProductId = entry.id;
      index++;
    }
  }

  sortByProperty(property) {
    return function (x, y) {
      return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
    };
  }

  calculatePrice() {
    this.total = 0;
    for (const entry of this.cart) {
      this.total += (entry.price * entry.amt);
      console.log(this.total); // 1, 'string', false

    }

  }

  onClickPayment() {
    console.log(this.cart);
    this.storage.remove('payment_summary');
    this.storage.remove('payment_cart');
    this.storage.set('payment_cart', this.cart).then(() => {
      console.log('added');
      this.router.navigate(['/shopping-step']);
    });

    const paymentSummary = {
      total: this.total
    };

    this.storage.set('payment_summary', paymentSummary).then(() => {
      console.log('added');
      this.router.navigate(['/shopping-step']);
    });
    // this.router.navigate(['/shopping-step', this.cart]);
  }

  async delete(index) {


    const alert = await this.alertCtrl.create({
      header: 'ยืนยันการลบ?',
      message: '',
      cssClass: 'alert-subscribe',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ยืนยัน',
          handler: data => {
            this.cart.splice(index, 1);
            this.storage.set('cart', this.cart);
            this.calculatePrice();
          }
        }
      ]
    });
    await alert.present();
  }

}
