import { Component, OnInit } from '@angular/core';
import { ProductStockService } from '../productstock/productstock.service';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(private productService: ProductStockService) { }

  ngOnInit(): void {
  }

  updateproduct(data)
{


this.productService.updateProductStock(data.orderid,data.deliverydate,data.manufacturingdate,data.expirydate,data.exitdate).subscribe((data)=>{
  if(data!="Item Not Found")
    alert("Data Updated Succesfully");
    else
    alert("Data not Updated Succesfully. Please Provide Valid Order ID");
  
}



  
  
  );



}
}
