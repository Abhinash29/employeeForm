import { Component, OnInit } from '@angular/core';
import {Product} from "./product";
import {ProductdataService}from "./productdata.service";


@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  Product_arr : Product[]= [];

  constructor(private _data:ProductdataService) { }

  ngOnInit(): void {

    this. _data.show().subscribe(
      (data) => {
        this.Product_arr = data;
      });
    }
    onProductDelete(item:Product){
      this._data.deleteProduct(item.pro_id).subscribe((x:any)=>{
          this.Product_arr.splice(this.Product_arr.indexOf(item),1);
        });

  }

}
