import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import {ReactiveFormsModule  } from "@angular/forms";
import { Employee1Component } from "./employee1.component";
import {employee1Routing  } from "./employee1.routing";
import {  SharedModule} from "../shared.module";




@NgModule({

     declarations: [Employee1Component],
     imports: [CommonModule,ReactiveFormsModule, employee1Routing,SharedModule],

})

export class Employee1Module {}
