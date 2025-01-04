import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router) { }
 
  public isAuthenticated():boolean{
    // check token is available or not 
    const token=localStorage.getItem('token')

    if(!token){
      // if token is not available then navigate to home page

      this.route.navigate(['/'])
      return false
    }
    else{
      return true
    }
    
  }
}
