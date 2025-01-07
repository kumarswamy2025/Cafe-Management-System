import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangePasswordComponent } from 'src/app/material-component/dialog/change-password/change-password.component';
import { ConformationComponent } from 'src/app/material-component/dialog/conformation/conformation.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
  role: any;
  constructor(private router: Router,
    private dialog: MatDialog) {

  }

  logout() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      message: 'Logout',
    };
    const dialogRef = this.dialog.open(ConformationComponent, dialogConfig);
    const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe(
      (logoutResponse: any) => {
        // console.log("this is logoutResponse",logoutResponse);

        if(logoutResponse==true){
          // console.log("true is executed..");
          
          dialogRef.close();
          localStorage.clear();
          this.router.navigate(['/']);

        }
        else{
          // console.log("false is executed..");
          dialogRef.close();
        }
        
       
      },(logoutError:any)=>{
        console.log("there is an logout error response...");
        

      }
    );
  }

  changePassword() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    const dialogRef = this.dialog.open(ChangePasswordComponent, dialogConfig);
  }




}
