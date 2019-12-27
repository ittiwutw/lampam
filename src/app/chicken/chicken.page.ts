import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.page.html',
  styleUrls: ['./chicken.page.scss'],
})
export class ChickenPage implements OnInit {

  chickens: any;

  constructor(public rest: RestService, private router: Router) { 
    this.loadChickens();
  }

  ngOnInit() {
  }

  loadChickens() {
    const that = this;
    this.rest.getChickens().then((result: any) => {
      if (result) {

        result.data.forEach(data => {

          data.productcockimage[0].file_url = 'https://lampam.co/' + data.productcockimage[0].file_url;

        });

        that.chickens = result.data;

        // this.loadMap2();
      } else {
        console.log('wrong');
      }
    });

  }

}
