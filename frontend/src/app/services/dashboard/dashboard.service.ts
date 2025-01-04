import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apis } from 'src/app/Api_urls/Api_urls';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  dashBoard_Api=Apis.dashBoard_API

  constructor(private http:HttpClient) { }

  // getting dashboard service 
  getDetails(){
    return  this.http.get(this.dashBoard_Api.dashboard_details.API)
  }
}
