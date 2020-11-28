import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import{arrRouting} from "./app.routing";
import { DemoComponent } from './demo/demo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from './header/header.component';
import { ForDemosComponent } from './for-demos/for-demos.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HighlighterDirective } from './highlighter.directive';
import { EmployeeComponent } from './employee/employee.component';
import { SignupComponent } from './signup/signup.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
// import { LoginComponent } from './login/login.component';
import { Employee1Component } from "./employee1/employee1.component";
import { TaskDisplayComponent } from './task-display/task-display.component';
import { AddtaskComponent } from './task-display/addtask/addtask.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { AddproductComponent } from './product-display/addproduct/addproduct.component';
import { EditemployeeComponent } from './todos/editemployee/editemployee.component';
import { EditproductComponent } from './todos/editproduct/editproduct.component';



@NgModule({
  declarations: [
    AppComponent,
     DemoComponent,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
    ForDemosComponent,
    PagenotfoundComponent,
    HighlighterDirective,
    EmployeeComponent,
    SignupComponent,
    AddtocartComponent,
 //   LoginComponent,
    Employee1Component,
    TaskDisplayComponent,
    AddtaskComponent,
    ProductDisplayComponent,
    AddproductComponent,
    EditemployeeComponent,
    EditproductComponent,
  ],
  imports: [ BrowserModule, FormsModule,ReactiveFormsModule,HttpClientModule,arrRouting,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
