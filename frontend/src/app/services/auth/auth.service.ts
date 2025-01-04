import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../snackBarService/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router,
    private snackBarService:SnackbarService

  ) { }
 
  public isAuthenticated():boolean{
    // check token is available or not 
    const token=localStorage.getItem('token')

    if(!token){
      // if token is not available then navigate to home page

      
      const response="please login "
      this.snackBarService.openSnackBar(response, GlobalConstants.error)
      this.route.navigate(['/'])
            // console.log("this auth file is exew");

      return false
    }
    else{
      // console.log("this auth file is exew");
      
      return true
    }
    
  }
}
