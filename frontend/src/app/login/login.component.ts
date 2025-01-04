import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/userServices/user.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../services/snackBarService/snackbar.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../shared/global-constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any = FormGroup;
  responseMessage: any;


  // dependency injection 
  constructor(
    
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private snackBar: SnackbarService,
    private dialogRef: MatDialogRef<LoginComponent>,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    // group form data with help of form builder 
    this.loginForm=this.fb.group({
      email:[
        null,
        [Validators.required,Validators.pattern(GlobalConstants.emailRegex)]
    ],
    password: [null,
       [Validators.required, Validators.minLength(7)]]
    })


  }

  handleSubmit(){
    this.ngxService.start();
    let formData = this.loginForm.value;
    var data = {
      email: formData.email,
      password: formData.password,
    };
    // calling login service 
    this.userService.login(data).subscribe(
      (resp: any) => {
        this.ngxService.stop();
        this.dialogRef.close();
        // console.log("local storeage before setup",localStorage);


        //  console.log("session stoarge before setup",sessionStorage);

        
        // displaying user login message 
        this.responseMessage = resp?.message;
        // setting jwt token in the local storage which is comming from backend 
        localStorage.setItem('token', resp?.tokenData)
        // console.log("local storeage after setup",localStorage);

        // sessionStorage.setItem('test1',resp?.tokenData)

         
         

        // console.log("session stoarge after setup",sessionStorage);
        
        // sedding response to snackbar 
        this.snackBar.openSnackBar(this.responseMessage, '');
        // if user successfully loged in then navigate to dashboard route 
        this.router.navigate(['/cafe/dashboard']);
      },
      (error) => {
        this.ngxService.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        // sending error to snackbar service
        this.snackBar.openSnackBar(this.responseMessage, GlobalConstants.error);
      }
    );
  }

}
