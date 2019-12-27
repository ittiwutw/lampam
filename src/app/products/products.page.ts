import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  productType: any;
  productCats = [];

  cats = [];

  constructor(public rest: RestService, private router: Router) {
    // this.getCats();
  }

  ngOnInit() {
    this.getCats();
  }

  getCats() {
    this.rest.getCats().then((result: any) => {
      if (result) {
        this.cats = result.data;
      }
      console.log(this.cats);
    });
  }

  loadProducts(catId) {
    const that = this;
    this.rest.getProducts().then((result: any) => {
      if (result) {

        result.data.forEach(data => {

          data.productimage[0].file_url = 'https://lampam.co/' + data.productimage[0].file_url;

          if (data.category_id === catId) {
            that.productCats.push(data);
          }

        });

        // this.loadMap2();
      } else {
        console.log('wrong');
      }
    });

  }

  productTypeChange() {
    console.log(this.productType);
    this.productCats = [];
    this.loadProducts(parseInt(this.productType));
  }

  onClickProduct(product, imgUrl) {
    product.imgUrl = imgUrl;
    product.prodStatus = product.productstatus.status_name_th;
    this.router.navigate(['/products-detail', product]);
  }

}
