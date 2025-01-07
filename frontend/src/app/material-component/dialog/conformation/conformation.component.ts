import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-conformation',
  templateUrl: './conformation.component.html',
  styleUrls: ['./conformation.component.scss']
})
export class ConformationComponent implements OnInit {
  // the use of event emiter is to pass data from child to parent

  onEmitStatusChange = new EventEmitter();
  // this is details come from the other components
  details:any={}

  /**
   *  explaning this part of code : constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any) { }
   * 
   * Explanation:
   *  1.@Inject:
   *    a.This is a decorator provided by Angular's dependency injection system.
   *    b. It allows you to explicitly specify a dependency to be injected into the class.
   *    c.Here, it ensures that the MAT_DIALOG_DATA token is injected into the constructor. 
   * 
   *  2. MAT_DIALOG_DATA:
   *     a. This is a predefined token provided by Angular Material.
   *     b. It is used to pass data into an Angular Material dialog component.
   *     c. When opening a dialog using the MatDialog service, you can provide some data like this:  
   *         code :  
   *                   this.dialog.open(MyDialogComponent, {
                            data: { message: 'Hello World!' }
                            });

   *    d. The data provided in the dialog configuration is injected using this token.
   * 
   *  3. public dialogData: any:
   *    a.This defines a public property named dialogData in the class.
   *    b. The dialogData will hold the value passed via MAT_DIALOG_DATA (e.g., { message: 'Hello World!' } from the example above).
   *    c.The public modifier automatically initializes this property with the value injected and makes it accessible throughout the class.
   *    
   *  4. Constructor Function:
   *    a.The constructor initializes the component and injects the dependency.
   *    b. The injected dialogData will hold the data provided when opening the dialog.
   * 
   * 
   *    
   */

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData:any) {

   }

  ngOnInit(): void {
    if(this.dialogData){
      this.details=this.dialogData
    }
  }

  handleChangeAction(kumar:boolean){
   this.onEmitStatusChange.emit(kumar)
  // console.log("this is conformation componetnt..",data);
  
  }

}
