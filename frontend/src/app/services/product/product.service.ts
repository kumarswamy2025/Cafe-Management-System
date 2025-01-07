import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apis } from 'src/app/Api_urls/Api_urls';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // api importing 
  product_API = Apis.product_API

  constructor(private http: HttpClient) { }

  // add product service
  addProduct(data: any) {
    return this.http.post(this.product_API.addProduct.API, data, {
      headers: new HttpHeaders().set('content-type', 'application/json')
    })

  }
  // get products  service

  getProduct() {
    return this.http.get(this.product_API.getProduct.API);

  }
  // get products by products  category id  service
  getProductsByCategoryId(productsCategoryId: any) {
    return this.http.get(this.product_API.getProductsByCategoryId.API+productsCategoryId);

  }
  // get products by product id 

  getProductsByProductId(productId: any) {
    return this.http.get(this.product_API.getProductsByProductId.API+productId);

  }
  // update product service

  updateProduct(data: any) {
    return this.http.patch(this.product_API.updateProduct.API,data,{
      headers: new HttpHeaders().set('content-type', 'application/json')

    })

  }
  // delete product by id  service
  deleteProduct(productId: any) {
    return this.http.delete(this.product_API.deleteProduct.API+productId)

  }

  // update product status service
  updateStatus(data: any) {
    return this.http.patch(this.product_API.updateStatus.API,data,{
      headers: new HttpHeaders().set('content-type', 'application/json')
    })

  }

}
