import { Component, AfterViewInit } from '@angular/core';
import { DashboardService } from '../services/dashboard/dashboard.service';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../services/snackBarService/snackbar.service';
import { GlobalConstants } from '../shared/global-constant';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

	responseMessage:any;
	data:any

	ngAfterViewInit() { }

	constructor(private dashBoardService:DashboardService,
		private ngxService:NgxUiLoaderService,
		private snackBarService:SnackbarService
	) {

		this.ngxService.start();
		this.dashboardData()

	}
	dashboardData(){
		this.dashBoardService.getDetails().subscribe(
			(successResponse:any)=>{
				this.ngxService.stop();
				this.data=successResponse.data
				// this.snackBarService.openSnackBar("data is fetched ","")
				// console.log("this is dashboard data:",successResponse.data);
				

			},(errorResponse:any)=>{
				
					this.ngxService.stop();

					console.log("there is error in dashboard componnt ");
					if(errorResponse.error?.mesage){
						this.responseMessage=errorResponse.error?.mesage
					}
					else{
						this.responseMessage=GlobalConstants.genericError


					}

					this.snackBarService.openSnackBar(this.responseMessage,GlobalConstants.error)
					
				

			})

	}


}
