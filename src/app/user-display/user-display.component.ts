import { Component, OnInit } from '@angular/core';
import {User} from "./user";
import {UserdataService}from "./userdata.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
  User_arr : User[]=[];
  constructor(private _data:UserdataService,private _acroute:ActivatedRoute) {}
 ngOnInit(): void {
 this.User_arr=this._acroute.snapshot.data["xyz"];
   }
   onUserDelete(item:User){
      this._data.deleteUser(item.user_email).subscribe((x:any)=>{
          this.User_arr.splice(this.User_arr.indexOf(item),1);
      });
   }
  }



