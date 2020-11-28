import { Routes,RouterModule } from '@angular/router';
import {TodosComponent  } from  './todos.component';
import { EdittodoComponent } from './edittodo/edittodo.component';

const arr: Routes = [

{
  path: '',
  children: [
    { path: '', component: TodosComponent },
  { path: 'edit/:Id',component:EdittodoComponent },
  ],
},

];

export const todosRouting = RouterModule.forChild(arr);
