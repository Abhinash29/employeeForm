import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { AadharDirective, OfficePhoneDirective, PhoneDirective } from "./directive";


@NgModule(
 {
declarations:[PhoneDirective,OfficePhoneDirective,AadharDirective,],
imports:[CommonModule,],
exports:[PhoneDirective,OfficePhoneDirective,AadharDirective,],

 }

)
export class SharedModule { }
