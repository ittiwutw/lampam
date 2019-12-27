import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  newsDetail: any;

  constructor(private activatedroute: ActivatedRoute) {
    this.newsDetail = this.activatedroute.params.subscribe(news => {
      this.newsDetail = news;
      console.log(this.newsDetail);
    });
  }

  ngOnInit() {

  }

}
