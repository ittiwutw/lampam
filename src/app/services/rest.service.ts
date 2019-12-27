import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiUrl = 'https://lampam.co/api/';
  constructor(public http: HttpClient) { }

  getBanners() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'banner').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getNews() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'news').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getProgrames() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'program').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getStreaming() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'stream').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getProducts() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'products').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getCats() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'category').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getChickens() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'productcock').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getVideos() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'video').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getGallery() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + 'gallery').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  // register(param): any {
  //   const headers = new HttpHeaders();
  //   headers.append('Content-type', 'json/data; charset=utf-8');

  //   return this.http.post(this.apiUrl + 'register', param, { headers });

  // }

  register(param: any) {
    return new Promise((resolve, reject) => {
      const header = new HttpHeaders();
      header.append('Content-type', 'json/data; charset=utf-8');

      this.http.post(this.apiUrl + 'lampam.co/api/register', param, { headers: header })
        .subscribe(res => {

          // this.setUserLogin(res);
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });

  }

  login(param): any {
    const headers = new HttpHeaders();
    // headers.append('Accept', 'application/json');
    headers.append('Content-type', 'application/json');
    console.log(param);
    // return this.http.post(this.apiUrl + 'register', param, { headers });
    return new Promise(resolve => {
      // this.http.post(this.apiUrl + 'login', param, { headers });
      this.http.post(this.apiUrl + 'login', param, {headers}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  payment(param): any {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'json/data; charset=utf-8');

    return this.http.post(this.apiUrl + 'payment', param, { headers });

  }
}
