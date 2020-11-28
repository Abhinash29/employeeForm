import { Component, OnInit, ViewEncapsulation,EventEmitter, Input, Output } from '@angular/core';
import { Product } from "./product";


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ParentComponent implements OnInit {
  //  selectedCategory: string = 'Special deal';
  flag : boolean = true;
  flag1 : boolean = true;

  name;
  price;
  color;
  warranty;
  brand;
  mrp;
  discount;
  quantity;
  status;
  selectedCategory: string = '';


//Main array where i will store the products
   prooductsarr: Product[] = [
    new Product('bike',24000, 'black','1 year', 'tvs', 3000, 20, 200, 'available'),
    new Product('car',150000, 'gray','1 year', 'tarzan', 1000, 10, 500, 'available'),
    new Product('laptop',53000, 'black','6 Month', 'asus', 2599, 65, 50, 'available'),
    new Product('speaker',2499, 'black','2 year', 'Boat', 5999, 58, 100, 'Out of Stock'),
    new Product('Mask', 420, 'white','10 days', 'N-95', 1500, 72, 8400, 'available'),
    new Product('gloves',174, 'sky blue','1 year', 'nivia', 1286, 69, 25, 'available'),
    new Product('camera',30999, 'black','1 year', 'Nikon', 36250, 14, 50, 'available'),
    ];



    // function myfunction(){
    //   var pic= new Array();
    // }
//It is the array where we are adding data of cart manu
  Productarr1: Product[]=[];

   constructor() {}
   ngOnInit(): void {}
//It is for searching method inbetween parent and child
    onMyEvent(val)
    {
    //console.log(val, 'from parent');
    this.prooductsarr = this.prooductsarr.filter((x) => x.name.startsWith(val));
    }

    onMyEventClick(prooductsarr)
    {
     this.Productarr1.push(new Product(prooductsarr.name, prooductsarr.price, prooductsarr.color, prooductsarr.warrenty,
       prooductsarr.brand, prooductsarr.mrp, prooductsarr.discount, prooductsarr.quantity, prooductsarr.status ));
     //console.log(prooductsarr,'cart function');
    }


//this method is for first button for product menu
  onclick()
  {
    this.flag= !this.flag;
  }
//this method is for second button for cart menu
  onclick1()
  {
    this.flag1= !this.flag1;
  }


// This Method is of product for add product
  onAddclick()
  {
    this.prooductsarr.push(new Product(this.name, this.price, this.color, this.warranty, this.brand
      , this.mrp, this.discount, this.quantity,  this.status ));
  }
// this method is for button of first product cancel
  onCancelClick()
  {
    this.flag=true;
  }

// this method is for button of second cart cancel
  onCancelClick1()
  {
    this.flag1=true;
  }


}


