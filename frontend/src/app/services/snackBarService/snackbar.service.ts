import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  
  /**
   * a Snackbar is a UI element used to display brief messages to the user, often as a feedback mechanism. For instance, it can notify users about actions they have performed, such as successful data saving, errors, or warnings. The Snackbar typically appears at the bottom of the screen and automatically disappears after a specified duration.
   */

  constructor(private snackbar:MatSnackBar) { }

    openSnackBar( messages:string, actions:string){
      if(actions==='error'){
         
       var  snackBarConfigurationError:any={
        horizontalPosition:'center',
          verticalPosition:'top',
          duration:2000,
          // this is .scss class  in styles.scss file 
          panelClass:['black-snackbar']
          
        }
        this.snackbar.open(messages,'',snackBarConfigurationError)

      }
      else{

        var  snackBarConfigurationSuccess:any={
          horizontalPosition:'center',
            verticalPosition:'top',
            duration:2000,
            // this is .scss class  in styles.scss file 
            panelClass:['green-snackbar']
            
          }


          this.snackbar.open(messages,'',snackBarConfigurationSuccess)


      }
    }

}
