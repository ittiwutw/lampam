import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: any;
  password: any;
  worngLogin = false;
  constructor(private storage: Storage, private router: Router, public rest: RestService) { }

  ngOnInit() {
    this.storage.get('user').then((val) => {
      if (val) {
        console.log('user data', val);
      }
    });
  }

  login() {

    const param = {
      email: this.email,
      password: this.password
    };

    this.rest.login(param).then((result: any) => {
      if (result) {

        this.router.navigate(['/tabs/profile']);
        console.log(result);
        // this.loadMap2();
      } else {
        this.worngLogin = true;
      }
    });

  }

  onClickRegister() {
    this.router.navigate(['/register']);
  }

}
