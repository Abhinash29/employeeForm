import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']


})
export class AddtocartComponent implements OnInit {
  @Input() cart : any []=[];
  constructor() { }

  ngOnInit(): void {
    
  }


}



