import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/userServices/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from '../services/snackBarService/snackbar.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../shared/global-constant';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {




  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private route: Router,
    private snackBarService: SnackbarService,
    private diaLogRef: MatDialogRef<SignupComponent>,
    private uiLoaderService: NgxUiLoaderService




  ) {

    // console.log("constructor is executed....");
    
   }

  // creating form group
  signUpForm: any = FormGroup;
  responseMessage: any;



  ngOnInit(): void {
    // console.log("ngOnInit is started execution....");

    this.signUpForm = this.formBuilder.group({
      name: [
        null,
        [Validators.required,
        Validators.pattern(GlobalConstants.nameRegex)
        ]
      ],
      email: [
        null,
        [Validators.required,
        Validators.pattern(GlobalConstants.emailRegex)
        ]
      ],
      contactNumber: [
        null,
        [Validators.required,
        Validators.pattern(GlobalConstants.contactNumberRegex)
        ]
      ],
      password: [
        null,
        [Validators.required,Validators.minLength(7)]
      ],

    })

    // console.log("ngOnInit is ended execution....");

  }

  handleSubmit(){

    //  console.log("this is handle submit...");
     console.log("signUpForm data",this.signUpForm.value);
     
     
    this.uiLoaderService.start()
    var signUpData=this.signUpForm.value
    var data={
      name:signUpData.name,
      email:signUpData.email,
      contactnumber:signUpData.contactNumber,
      password:signUpData.password,
      

    }

    // calling signup service in user service

    this.userService.signUp(data).subscribe((signUpResponse:any)=>{
      // if data is successfully sended means this one will executed
      console.log("signUpResponse:",signUpResponse);
      
      this.uiLoaderService.stop();
      this.diaLogRef.close();
      this.responseMessage=signUpResponse?.message;
      this.snackBarService.openSnackBar(this.responseMessage,"");
      this.route.navigate(['/'])
      



    },(signUpError)=>{
      // if there is amy error in sending data means this will executed
      this.uiLoaderService.stop();
      if(signUpError.error?.message){

        this.responseMessage=signUpError.error?.message

      }
      else{
        this.responseMessage=GlobalConstants.genericError
      }
      this.snackBarService.openSnackBar(this.responseMessage,GlobalConstants.error)



    })









  }



}
