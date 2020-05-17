import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RawMaterialStock } from './rawmaterialstock';
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
@Injectable({
   providedIn:'root'
})
export class RawMaterialStockService
{
   displayStock(orderid: any, deliverydate: any, manufacturingdate: any, expirydate: any, processdate: any) {
     throw new Error("Method not implemented.");
   }
   public constructor(private httpClient:HttpClient){ }
   rms:RawMaterialStock;
   public getProduct(orderid:number)  : Observable<RawMaterialStock>   
   {
      return this.httpClient.get<any>('http://localhost:7005/rawmaterial/getOrder'+orderid);
   }
  
   public updateRawMaterialStock(orderid:number,deliverydate:Date,manufacturingdate:Date,expirydate:Date,processdate:Date) : any
   {
    const httpOptions = {
        headers: new HttpHeaders({
          'Accept': 'text/plain, */*',
          'Content-Type': 'application/json' // We send JSON
        }),
        responseType: 'text' as 'json'  // We accept plain text as response.
      };
      this.rms = new RawMaterialStock(orderid,'',0,0,0,0,'',deliverydate,manufacturingdate,expirydate,'',processdate);
      return this.httpClient.put<any>('http://localhost:6002/rawmaterialstock/exitdate',this.rms,httpOptions);
   }
  
  

} 