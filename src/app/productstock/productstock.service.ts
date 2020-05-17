import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductStock } from './productstock';
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ProductStockService {
  displayStock(orderid: any, deliverydate: any, manufacturingdate: any, expirydate: any, exitdate: any) {
    throw new Error("Method not implemented.");
  }

  public constructor(private httpClient:HttpClient){ }
  ps:ProductStock;
  public getProduct(orderId:number) :Observable<ProductStock>
 {
return this.httpClient.get<any>('http://localhost:8087/productstock/getOrder/'+orderId);
 }
  
   public updateProductStock(orderid:number,deliverydate:Date,manufacturingdate:Date,expirydate:Date,exitdate:Date,) : any
   {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/plain, */*',
        'Content-Type': 'application/json' // We send JSON
      }),
      responseType: 'text' as 'json'  // We accept plain text as response.
    };
      this.ps= new ProductStock(orderid,'',0,0,0,0,'',deliverydate,manufacturingdate,expirydate,'',exitdate);
    //   this.getOrder(ps:Pr)
      return this.httpClient.put<any>('http://localhost:7080/productstock/exitdate',this.ps,httpOptions);
   }
   

  

} 