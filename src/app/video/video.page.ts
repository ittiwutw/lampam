import { Pipe, PipeTransform, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RestService } from '../services/rest.service';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';


@Pipe({
  name: 'safe'
})
@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit, PipeTransform {
  @ViewChild('iframe', { static: false }) mapElement: ElementRef;
  videos: any;

  constructor(public rest: RestService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.loadVideo();
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  loadVideo() {
    const that = this;
    this.rest.getVideos().then((result: any) => {
      if (result) {


        result.data.forEach(data => {
          const url = data.link;
          const re = /embed/gi;
          data.link = url.replace('watch?v=', 'embed/');
          data.link = this.transform(data.link);

        });

        that.videos = result.data;

        console.log(that.videos);
        // this.loadMap2();
      } else {
        console.log('wrong');
      }
    });

  }

}
