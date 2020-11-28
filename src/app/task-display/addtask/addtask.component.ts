import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import{TaskdataService} from "../taskdata.service";



@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  task_add:FormGroup;

  constructor(private _data:TaskdataService,private _router:Router) { }

  ngOnInit(): void {
    this.task_add=new FormGroup({
      task_id:new FormControl(),
      title:new FormControl(),
      status:new FormControl(),

    });
  }
  onTaskAdd(){
    this._data.addtask(this.task_add.value).subscribe((x)=>{
      alert('added');
    this._router.navigate(['/task']);

    });
  }

}
