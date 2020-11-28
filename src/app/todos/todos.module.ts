import { CommonModule } from '@angular/common';
import {NgModule  } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosComponent } from "./todos.component";
import { EdittodoComponent } from "./edittodo/edittodo.component";
import { todosRouting } from './todos.routing';

@NgModule({
  declarations:[TodosComponent,EdittodoComponent],
  imports:[
    CommonModule,ReactiveFormsModule,todosRouting ],

})


export class TodosModule{}
