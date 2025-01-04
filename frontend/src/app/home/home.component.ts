import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogClose, MatDialogConfig } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../services/userServices/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog:MatDialog,
    private userService:UserService,
    private route:Router
    
  ) { }

  ngOnInit(): void {

    if(localStorage.getItem('token')!=null){
      this.userService.token().subscribe((response:any)=>{
        this.route.navigate(['/cafe/dashboard'])

      },(error:any)=>{
        console.log(error);
        

      })

    }
  }

  signupAction(){
    /**
     * MatDialog in Angular is a service provided by Angular Material for creating and managing modal dialogs. These dialogs are often used to display information, get user confirmation, or collect input from users.
     * Features of MatDialog:
     *  1. Supports custom components as dialog content.
     *  2. Configurable size, position, and backdrop behavior.
     *  3. Provides methods to pass data to the dialog and receive the result.
     * 
     */
   
    const dialogConfiguration=new MatDialogConfig();
    dialogConfiguration.width="550px";
    this.dialog.open(SignupComponent,dialogConfiguration)
    
    

    // console.log("clicked here ");
    
  }


  forgotPasswordAction(){

    const dialogConfiguration=new MatDialogConfig();
    dialogConfiguration.width="550px";
    this.dialog.open(ForgotPasswordComponent,dialogConfiguration)

  }

  loginAction(){
    const dialogConfiguration=new MatDialogConfig();
    dialogConfiguration.width="550px";
    this.dialog.open(LoginComponent,dialogConfiguration)

  }

}
