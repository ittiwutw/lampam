import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'หน้าหลัก',
      url: '/',
      icon: 'home'
    },
    {
      title: 'เกี่ยวกับเรา',
      url: '/aboutus',
      icon: 'list'
    },
    {
      title: 'รายชื่อตัวแทน',
      icon: 'list'
    },
    {
      title: 'กระดานข่าวสารวงการไก่ชน',
      icon: 'list'
    },
    {
      title: 'โปรแกรมแต่ละสนาม',
      url: '/matchs',
      icon: 'list'
    },
    {
      title: 'แนะนำซุ้ม',
      icon: 'list'
    },
    {
      title: 'สินค้า',
      url: 'tabs/products',
      icon: 'list'
    },
    {
      title: 'แนะนำไก่ชน',
      url: '/chicken',
      icon: 'list'
    },
    {
      title: 'คลิปย้อนหลัง',
      url: 'tabs/videos',
      icon: 'video'
    },
    {
      title: 'ตระกร้าสินค้า',
      url: 'tabs/cart',
      icon: 'cart'
    },
    {
      title: 'ติดต่อเรา',
      url: '/contactus',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
