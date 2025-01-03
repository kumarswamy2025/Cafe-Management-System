import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/userServices/user.service';
import { SnackbarService } from '../services/snackBarService/snackbar.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../shared/global-constant';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: any = FormGroup;
  responseMessage: any;

  constructor(
    private fb: FormBuilder,
    
    private userService: UserService,
    private snackBar: SnackbarService,
    private dialogRef: MatDialogRef<ForgotPasswordComponent>,
    private ngxService: NgxUiLoaderService
  ) { 

   
    
  }

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: [
        null,
        [Validators.required, Validators.pattern(GlobalConstants.emailRegex)],
      ],
    });
  }

  handleSubmit() {

    // console.log("forgotPasswordForm:",this.forgotPasswordForm);
    this.ngxService.start();
    let formData = this.forgotPasswordForm.value;
    let data = {
      email: formData.email,
    };

    this.userService.forgotPassword(data).subscribe(
      (resp: any) => {
        this.ngxService.stop();
        this.responseMessage = resp?.message;
        this.dialogRef.close();
        this.snackBar.openSnackBar(this.responseMessage, '');
      },
      (error) => {
        console.log("thisd si eror",error);
        
        this.ngxService.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackBar.openSnackBar(this.responseMessage, GlobalConstants.error);
      }
    );
  }

}
