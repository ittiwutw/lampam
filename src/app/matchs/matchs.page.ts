import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-matchs',
  templateUrl: './matchs.page.html',
  styleUrls: ['./matchs.page.scss'],
})
export class MatchsPage implements OnInit {

  programs: any;

  constructor(public rest: RestService) { }

  ngOnInit() {
    this.loadPrograms();
  }

  loadPrograms() {
    const that = this;
    this.rest.getProgrames().then((result: any) => {
      if (result) {

        result.data.forEach(data => {
          data.programimage[0].images = 'https://lampam.co/' + data.programimage[0].images;
        });

        that.programs = result.data;

        console.log(that.programs);
        // this.loadMap2();
      } else {
        console.log('wrong')
      }
    });

  }

}
