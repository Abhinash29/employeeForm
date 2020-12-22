import { Routes,RouterModule } from '@angular/router';
import {AdduserComponent } from './adduser/adduser.component';
import {UserDisplayComponent } from './user-display.component';
import {  UserresolverService} from "./userresolver.service";


const arr: Routes = [

{
  path: '',
  children:[
    {path:'', component: UserDisplayComponent,resolve:{data : UserresolverService},
   },
  {path: 'add',component: AdduserComponent },
  ],
},
];

export const userRouting = RouterModule.forChild(arr);
