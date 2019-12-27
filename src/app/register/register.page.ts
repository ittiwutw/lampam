import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  firstName: any;
  lastName: any;
  phone: any;
  email: any;
  password: any;

  isValidated = false;

  constructor(public rest: RestService) { }

  ngOnInit() {
  }

  register() {

    if (this.validate()) {
      const data = {
        firstname: this.firstName,
        lastname: this.lastName,
        phone: this.phone,
        email: this.email,
        password: this.password
      };

      this.rest.register(data).then(result => {
        console.log(result);
      });


      console.log(data);
    }
  }

  validate() {
    let result = false;
    if (this.firstName !== '' && this.lastName !== '' && this.phone !== '' && this.email !== '' && this.password !== '') {
      result = true;
      this.isValidated = false;
    }

    return result;
  }

}
