import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {TaskDataService } from "../taskdata.service";
import {Employee} from "../employee";

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  employee_edit:FormGroup;
  employeeId;

  constructor(private _actroute:ActivatedRoute,private _data:TaskDataService,private _router:Router) { }

  ngOnInit(): void {
    this.employee_edit = new FormGroup({

            user_email: new FormControl(),
            user_name: new FormControl(),
            user_password:  new FormControl(),
            user_mobile_no:  new FormControl(),
    });

        this.employeeId=this._actroute.snapshot.params['Id1'];
        this. _data.getEmployeeById(this.employeeId).subscribe(
          (data: Employee[]) => {

            this.employee_edit.patchValue({
              user_email:data[0].user_email,
              user_name:data[0].user_name,
              user_password:data[0].user_password,
              user_mobile_no:data[0].user_mobile_no,
            });

          });
      }

      employeeEdit(){
        this._data.edituser(this.employee_edit.value).subscribe((x) =>{
          this._router.navigate(['/todos']);
        });
   }
 }


