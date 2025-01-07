import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ProductService } from 'src/app/services/product/product.service';
import { SnackbarService } from 'src/app/services/snackBarService/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constant';
import { ProductComponent } from '../dialog/product/product.component';
import { ConformationComponent } from '../dialog/conformation/conformation.component';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'category',
    'description',
    'price',
    'edit',
  ];

  dataSource: any;
  responseMessage: any;

  constructor(
    private productService: ProductService,
    private ngxService: NgxUiLoaderService,
    private dialog: MatDialog,
    private snackBar: SnackbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.tableData();
  }
  // this shows data in table 
  tableData() {
    // calling get products service
    this.productService.getProduct().subscribe(
      (resp: any) => {
        this.ngxService.stop();
        this.dataSource = new MatTableDataSource(resp.successData);
      },
      (error) => {
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  handleAddAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Add',
    };
    dialogConfig.width = '850px';
    const dialogRef = this.dialog.open(ProductComponent, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });

    const sub = dialogRef.componentInstance.onAddCategory.subscribe(
      (resp: any) => {
        this.tableData();
      }
    );
  }

  handleEditAction(value: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: 'Edit',
      data: value,
    };
    dialogConfig.width = '850px';
    const dialogRef = this.dialog.open(ProductComponent, dialogConfig);
    this.router.events.subscribe(() => {
      dialogRef.close();
    });

    const sub = dialogRef.componentInstance.onEditCategory.subscribe(
      (resp: any) => {
        this.tableData();
      }
    );
  }

  handleDeleteAction(value: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      message: 'delete ' + value.name + ' product',
    };

    const dialogRef = this.dialog.open(ConformationComponent, dialogConfig);

    const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe(
      (resp: any) => {
        console.log("this is resp",resp);

        
        if(resp){
          this.ngxService.start();
        this.deleteProduct(value.id);
        dialogRef.close();

        }
        // else{
        //   this.ngxService.start();
        //   dialogRef.close();
        // }
        
        
        
      }
    );
  }

  deleteProduct(id: any) {
    this.productService.deleteProduct(id).subscribe(
      (resp: any) => {
        this.ngxService.stop();
        this.tableData();
        this.responseMessage = resp?.message;
        this.snackBar.openSnackBar(this.responseMessage, 'success');
      },
      (error) => {
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

  onChange(status: any, id: any) {
    console.log("status:",typeof(status));
    console.log("id:",id);

    
    let data = {
      status: status.toString(),
      id,
    }; 
    console.log('data',typeof(data.status));
    

    this.productService.updateStatus(data).subscribe(
      (resp: any) => {
        this.ngxService.stop();
        this.responseMessage = resp?.message;
        this.snackBar.openSnackBar(this.responseMessage, '');
        
      },
      (error) => {
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
