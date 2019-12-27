import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AlertController, Events } from '@ionic/angular';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.page.html',
  styleUrls: ['./products-detail.page.scss'],
})
export class ProductsDetailPage implements OnInit {

  productDetail: any;

  constructor(
    private activatedroute: ActivatedRoute,
    private storage: Storage,
    private router: Router,
    public alertCtrl: AlertController) {

    this.storage.get('cart').then((val) => {
      if (val) {
        console.log(val);

        if (val[0] == null) {
          this.storage.remove('cart');
        }

      }
    });

  }

  ngOnInit() {
    this.activatedroute.params.subscribe(product => {
      this.productDetail = Object.assign({amt: 0}, product);
      console.log(this.productDetail);
    });
  }

  async onClickBuy() {
    const alert = await this.alertCtrl.create({
      header: 'ใส่จำนวนที่ต้องการซื้อ',
      message: 'จำนวนสินค้า',
      inputs: [
        {
          name: 'amount',
          placeholder: 'ระบุ',
          type: 'number'
        },
      ],
      cssClass: 'alert-subscribe',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            // let validateObj = this.validateEmail(data);
            if (!data.amount) {
              // alert.set .setMessage('กรุณาใส่จำนวน');
              return false;
            } else {

              this.productDetail.amt = data.amount;
              console.log(this.productDetail);
              let currentCart: any;
              this.storage.get('cart').then((val) => {
                if (val) {
                  currentCart = val;
                  currentCart.push(this.productDetail);
                  this.storage.set('cart', currentCart).then(() => {
                    console.log('added');
                    this.router.navigate(['/tabs/cart']);
                  });


                } else {
                  currentCart = [];
                  currentCart.push(this.productDetail);
                  this.storage.set('cart', currentCart).then(() => {
                    // this.events.publish('cart:changed');
                    console.log('added');
                    this.router.navigate(['/tabs/cart']);

                  });
                }

              });
              // this.alertAdded();
            }
          }
        }
      ]
    });
    await alert.present();

  }

  async onClickCart() {
    const alert = await this.alertCtrl.create({
      header: 'ใส่จำนวนที่ต้องการซื้อ',
      message: 'จำนวนสินค้า',
      inputs: [
        {
          name: 'amount',
          placeholder: 'ระบุ',
          type: 'number'
        },
      ],
      cssClass: 'alert-subscribe',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            // let validateObj = this.validateEmail(data);
            if (!data.amount) {
              // alert.set .setMessage('กรุณาใส่จำนวน');
              return false;
            } else {

              this.productDetail.amt = data.amount;
              console.log(this.productDetail);
              let currentCart: any;
              this.storage.get('cart').then((val) => {
                if (val) {
                  currentCart = val;
                  currentCart.push(this.productDetail);
                  this.storage.set('cart', currentCart).then(() => {
                    console.log('added');
                  });


                } else {
                  currentCart = [];
                  currentCart.push(this.productDetail);
                  this.storage.set('cart', currentCart).then(() => {
                    // this.events.publish('cart:changed');
                    console.log('added');

                  });
                }

              });
              this.alertAdded();
            }
          }
        }
      ]
    });
    await alert.present();

  }

  async alertAdded() {
    const alert = await this.alertCtrl.create({
      header: 'เก็บใส่ตระกร้าเรียบร้อย',
      cssClass: 'alert-subscribe',
      buttons: [
        {
          text: 'ตกลง',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await alert.present();
  }

}
