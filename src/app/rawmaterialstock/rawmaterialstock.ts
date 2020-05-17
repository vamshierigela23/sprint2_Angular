export class RawMaterialStock
{
    orderId:number;
    name:string;
    pricePerUnit:number;
    quantityValue:number;
    quantityUnit:number;
    price:number;
    warehouseId:string;
    deliveryDate:Date;
    manufacturingDate:Date;
    expiryDate:Date;
    qualityCheck:string;
    processDate:Date;
    
    public constructor(orderId:number,name:string,pricePerUnit:number,quantityValue:number,quantityUnit:number,price:number,warehouseId:string,deliveryDate:Date,manufacturingDate:Date,expiryDate:Date,qualityCheck:string,processDate:Date)
{
    this.orderId=orderId;
      this.name=name;
      this.pricePerUnit=pricePerUnit;
      this.quantityValue=quantityValue;
      this.quantityUnit=quantityUnit;
      this.price=price;
      this.warehouseId=warehouseId;
      this.deliveryDate=deliveryDate;
      this.manufacturingDate=manufacturingDate;
      this.expiryDate=expiryDate;
      this.qualityCheck=qualityCheck;
      this.processDate=processDate;
       
}
}