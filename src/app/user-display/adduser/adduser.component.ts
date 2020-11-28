import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import{UserdataService} from "../userdata.service";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  user_add:FormGroup;
  constructor(private _data:UserdataService,private _router:Router) { }

  ngOnInit(): void {
    this.user_add=new FormGroup({
      user_name:new FormControl(),
      user_email:new FormControl(),
      user_mobile_no:new FormControl(),
      user_password:new FormControl(),

    });
  }
  onUserAdd(){
     this._data.addUser(this.user_add.value).subscribe((x)=>{
       alert('added');
     this._router.navigate(['/user']);

     });
  }

}
