import{NgModule} from '@angular/core';
import{CommonModule} from '@angular/common';
import{AdduserComponent} from './adduser/adduser.component';
import{UserDisplayComponent} from './user-display.component';
import{ReactiveFormsModule} from '@angular/forms';
import { userRouting } from './user.routing';


@NgModule({
  declarations:[AdduserComponent,UserDisplayComponent],
  imports:[CommonModule,ReactiveFormsModule,userRouting],
})
  export class UserModule{ }
