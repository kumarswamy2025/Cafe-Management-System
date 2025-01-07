import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apis } from '../../Api_urls/Api_urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // api importing 
   user_API=Apis.user_Api
   



  constructor(private http:HttpClient) { }

  // singup services
   signUp(data:any){
    return this.http.post(this.user_API.signUp_API.API,data,{
      headers:new HttpHeaders().set('content-type','application/json')
    })
   }
   
  //  forgot password service
  forgotPassword(data:any){

    return this.http.post(this.user_API.updatePassword_API.API,data,{

      headers:new HttpHeaders().set('content-type','application/json')

    })
  }

  // login service
  login(data:any){
    return this.http.post(this.user_API.login_API.API,data,{

      headers:new HttpHeaders().set('content-type','application/json')
    })
  }
  // check token service

  token(){
    return this.http.get(this.user_API.check_token.API)
  }

  // change password
  changePassword(data:any){

    return this.http.post(this.user_API.updatePassword_API.API,data,{

      headers:new HttpHeaders().set('content-type','application/json')

    })

  }

  allUsers_API(){
    return this.http.get(this.user_API.allUsers_API.API)

  }
  updateStatus_API(data:any){
    return this.http.patch(this.user_API.updateStatus_API.API,data,{

      headers:new HttpHeaders().set('content-type','application/json')

    })

  }



}
