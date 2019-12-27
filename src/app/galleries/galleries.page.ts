import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.page.html',
  styleUrls: ['./galleries.page.scss'],
})
export class GalleriesPage implements OnInit {

  galleriesImg: any;

  constructor(private activatedroute: ActivatedRoute) {
    this.galleriesImg = this.activatedroute.params.subscribe(gallery => {
      console.log(gallery)
      this.galleriesImg = gallery;
      console.log(this.galleriesImg);
    });
  }

  ngOnInit() {
  }

}
