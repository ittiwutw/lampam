import { Component, OnInit } from '@angular/core';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-live-detail',
  templateUrl: './live-detail.page.html',
  styleUrls: ['./live-detail.page.scss'],
})
export class LiveDetailPage implements OnInit {

  url: any;
  steams: any;
  title: any;
  slideOpts = {
    slidesPerView: 2.5,
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

  constructor(
    private streamingMedia: StreamingMedia,
    private activatedroute: ActivatedRoute,
    public rest: RestService) {

    this.activatedroute.params.subscribe(data => {
      this.url = data.url;
      this.title = data.title;
      console.log(this.url);
      console.log(this.title);
    });

    this.loadSteam();
  }

  ngOnInit() {
  }

  playLive(url) {
    const options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played'); },
      errorCallback: (e) => { console.log('Error streaming'); },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: false
    };

    this.streamingMedia.playVideo(url, options);
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

}
