import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import{ProductdataService} from "../productdata.service";


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  product_add:FormGroup;
  constructor(private _data: ProductdataService,private _router:Router) { }

  ngOnInit(): void {

    this.product_add=new FormGroup({
      pro_id:new FormControl(),
      pro_name:new FormControl(),
      pro_price:new FormControl(),
      pro_desc:new FormControl(),
      pro_qty:new FormControl(),
      pro_mfg:new FormControl(),
      pro_img:new FormControl(),

    });
  }

  onProductAdd(){
    this._data.addProduct(this.product_add.value).subscribe((x)=>{
      alert('added');
    this._router.navigate(['/product']);

    });

  }
}


