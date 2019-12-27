import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Base64 } from '@ionic-native/base64/ngx';
import { RestService } from '../services/rest.service';
import * as omiseapi from 'omise';

declare var Omise;

@Component({
  selector: 'app-shopping-bank-transfer',
  templateUrl: './shopping-bank-transfer.page.html',
  styleUrls: ['./shopping-bank-transfer.page.scss'],
})
export class ShoppingBankTransferPage implements OnInit {



  banks = [
    {
      name: 'กสิกรไทย',
      number: '726-1-01778-9'
    },
    {
      name: 'กรุงเทพ',
      number: '188-0-74777-7'
    }];

  cart: any;
  address: any;
  paymentSummary: any;

  croppedImagepath = '';
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };

  constructor(
    private storage: Storage,
    private camera: Camera,
    private file: File,
    public actionSheetController: ActionSheetController,
    public rest: RestService
  ) {

    Omise.setPublicKey('pkey_test_5hp86g63pkk535ept10');

    const OmiseOption = {
      name: 'BUMBIN ARAUPORN',
      number: '4242424242424242',
      expiration_month: 2,
      expiration_year: 2022,
      security_code: '111'
    };

    Omise.createToken('card', OmiseOption, function (statusCode, response) {
      if (statusCode === 200) {
        // Success: assign Omise token back to your checkout form.
        console.log(response);
      } else {
        console.log(response.message);
      }
    });

    // const omiseNode = require('omise')({
    //   'secretKey': 'skey_test_5hp86gm5to8mg6at22e',
    //   'omiseVersion': '2019-05-29'
    // });

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

  pickImage() {
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(imageData);
      // alert(imageData);
      // alert(base64Image);

      const data = {
        order_id: '',
        payment_type_id: '',
        payment_value: '',
        payment_date: new Date(),
        payment_time: '',
        payment_file: imageData,
        note: 'From Application',
        amount: this.cart.total,
        user_id: ''
      };
      this.rest.payment(data).subscribe(result => {
        console.log(result);
      });

    }, (err) => {
      // Handle error
    });
  }

}
