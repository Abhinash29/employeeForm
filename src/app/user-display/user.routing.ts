import { Routes,RouterModule } from '@angular/router';
import {AdduserComponent } from './adduser/adduser.component';
import {UserDisplayComponent } from './user-display.component';


const arr: Routes = [

{
  path: '',
  children:[
    {path:'', component: UserDisplayComponent},
  {path: 'add',component: AdduserComponent },
  ],
},
];

export const userRouting = RouterModule.forChild(arr);
