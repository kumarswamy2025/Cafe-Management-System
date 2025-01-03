import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Apis} from '../../Api_urls/Api_urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // api importing 
   user_API=Apis.user_Api
   dashBoard_Api=Apis.dashBoard_API



  constructor(private http:HttpClient) { }

  // singup services
   signUp(data:any){
    return this.http.post(this.user_API.signUp_API.API,data,{
      headers:new HttpHeaders().set('content-type','application/json')
    })
   }
  //  forgot password
  forgotPassword(data:any){
    
  }



}
