import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {TaskDataService } from "../taskdata.service";
import {Product} from "../product";



@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  product_edit:FormGroup;
  productId;

  constructor(private _actroute:ActivatedRoute,private _data:TaskDataService,private _router:Router) { }

  ngOnInit(): void {
    this.product_edit = new FormGroup({
      pro_id: new FormControl(),
      pro_name: new FormControl(),
      pro_price:  new FormControl(),
      pro_desc: new FormControl(),
      pro_qty:  new FormControl(),
      pro_mfg:  new FormControl(),
      pro_img:  new FormControl(),
});
this.productId=this._actroute.snapshot.params['Id2'];
this. _data.getProductById(this.productId).subscribe(
  (data: Product[]) => {

    this.product_edit.patchValue({
      pro_id:data[0].pro_id,
      pro_name:data[0].pro_name,
      pro_price:data[0].pro_price,
      pro_desc:data[0].pro_desc,
      pro_qty:data[0].pro_qty,
      pro_mfg:data[0].pro_mfg,
      pro_img:data[0].pro_img,

    });

  });
}
  productEdit(){
    this._data.editproduct(this.product_edit.value).subscribe((x) => {
      this._router.navigate(['/todos']);
    });
 }
}







