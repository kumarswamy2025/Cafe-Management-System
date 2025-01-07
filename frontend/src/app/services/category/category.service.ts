import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apis } from 'src/app/Api_urls/Api_urls';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // api importing 
  category_API = Apis.category_API

  constructor(private http: HttpClient) { }

  // add category service
  addCategory(data: any) {
    return this.http.post(this.category_API.addCategory.API, data, {
      headers: new HttpHeaders().set('content-type', 'application/json')
    })
  }
  // update category service
  updateCategory(data: any) {
    return this.http.post(this.category_API.updateCategory.API, data, {
      headers: new HttpHeaders().set('content-type', 'application/json')
    })
  }
  // get category service
  getCategory(data: any) {
    return this.http.post(this.category_API.getCategory.API, data, {
      headers: new HttpHeaders().set('content-type', 'application/json')
    })

  }


}
