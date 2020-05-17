import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  public allchec: boolean=false;
 public userid: number;

  constructor(private httpService: HttpClient) { }


 public displayProduct(orderId:number) :Observable<any>
 {
return this.httpService.get<any>('http://localhost:8087/productstock/getOrder/'+orderId);
 }
 public displayRawMaterial(orderId:number) :Observable<any>
 {
return this.httpService.get<any>('http://localhost:7080/rawmaterial/getOrder/'+orderId);
 }
 

}
