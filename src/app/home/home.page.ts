import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  banners: any;
  steams: any;
  news: any;
  galleries: any;
  chickens: any;
  productCats = [];

  isEnableChicken = false;

  slideBandOpts = {
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    speed: 400,
    autoplay: true
  };

  slideOpts = {
    slidesPerView: 1.8,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    speed: 400,
    autoplay: false
  };

  slideProdOpts = {
    slidesPerView: 1.5,
    spaceBetween: 0,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    speed: 400,
    autoplay: false
  };

  constructor(public rest: RestService, private streamingMedia: StreamingMedia, private router: Router) {
    this.loadBanner();
    this.loadSteam();
    this.loadNews();
    this.loadGallery();
    this.loadChickens();
    this.loadProducts();
  }

  loadBanner() {
    const that = this;
    this.rest.getBanners().then((result: any) => {
      if (result) {

        result.data.forEach(data => {
          data.banner_url = 'https://lampam.co/' + data.banner_url;
        });

        that.banners = result.data;

        console.log(that.banners);
        // this.loadMap2();
      } else {
        console.log('wrong');
      }
    });

  }

  loadSteam() {
    const that = this;
    this.rest.getStreaming().then((result: any) => {
      if (result) {

        that.steams = result.data;

        console.log(that.steams);
        // this.loadMap2();
      } else {
        console.log('wrong');
      }
    });

  }

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

  onClickGallery(gallery) {
    // this.navCtrl.push(NewsDetailPage, {news});
    console.log(gallery);

    const navigationExtras = {
      queryParams: {
        gallery: JSON.stringify(gallery)
      }
    };

    this.router.navigate(['/galleries', gallery]);
  }

  loadGallery() {
    const that = this;
    this.rest.getGallery().then((result: any) => {
      if (result) {

        result.data.forEach(data => {
          data.cover = 'https://lampam.co/' + data.cover;
        });

        that.galleries = result.data;

        console.log(that.galleries);
        // this.loadMap2();
      } else {
        console.log('wrong');
      }
    });

  }

  loadChickens() {
    const that = this;
    this.rest.getChickens().then((result: any) => {
      if (result) {
        if (result.data.lenght > 0) {
          this.isEnableChicken = true;
        }
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

  loadProducts() {
    const that = this;
    this.rest.getProducts().then((result: any) => {
      if (result) {
        let index = 1;
        result.data.forEach(data => {

          data.productimage[0].file_url = 'https://lampam.co/' + data.productimage[0].file_url;

          if (data.category_id === 2) {
            that.productCats.push(data);
          }
          index++;
        });

        // this.loadMap2();
      } else {
        console.log('wrong');
      }
    });

  }

  onClickSteam(url, title) {

    this.router.navigate(['/live-detail', { url, title }]);

    // const options: StreamingVideoOptions = {
    //   successCallback: () => { console.log('Video played'); },
    //   errorCallback: (e) => { console.log('Error streaming'); },
    //   orientation: 'landscape',
    //   shouldAutoClose: true,
    //   controls: false
    // };

    // this.streamingMedia.playVideo(url, options);
  }

  clickProduct() {
    this.router.navigate(['/tabs/products']);
  }

  onClickProduct(product, imgUrl) {
    product.imgUrl = imgUrl;
    product.prodStatus = product.productstatus.status_name_th;
    this.router.navigate(['/products-detail', product]);
  }

}
