import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apis } from 'src/app/Api_urls/Api_urls';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  // api importing 
  bill_API = Apis.bill_API

  constructor(private http: HttpClient) { }

  // generate bill pdf service
  generateBillPDF(data:any) {
     return this.http.post(this.bill_API.generateBillPDF.API,data,{
          headers:new HttpHeaders().set('content-type','application/json')
        })

  }
  // generate getPDF service
  getPdf(data:any):Observable<Blob> {
    return this.http.post(this.bill_API.getPdf.API,data,{
      responseType: 'blob',
    })

  }

  // get all bills service
  getAllBills() {
    return this.http.get(this.bill_API.generateBillPDF.API)

  }
  // delete bill by id service
  deleteBill(id:any) {
    return this.http.delete(this.bill_API.generateBillPDF.API+id)

  }
  // view bill by id service
  viewBill(id:any) {
    return this.http.get(this.bill_API.generateBillPDF.API+id)


  }


}
