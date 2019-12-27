import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  news: any;

  constructor(public rest: RestService, private router: Router) {
    this.loadNews();
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
    this.loadNews();
  }


  // onBack() {
  //   this.navCtrl.setRoot(TabsPage)
  // }

  loadNews() {
    const that = this;
    this.rest.getNews().then((result: any) => {
      if (result) {

        result.data.forEach(data => {
          data.image = 'https://lampam.co/' + data.image;
        });

        that.news = result.data;

        console.log(that.news);
        // this.loadMap2();
      } else {
        console.log('wrong');
      }
    });

  }

  onClickNews(news) {
    // this.navCtrl.push(NewsDetailPage, {news});
    this.router.navigate(['/news-detail', news]);
  }

}
