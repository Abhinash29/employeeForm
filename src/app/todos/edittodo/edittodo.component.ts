import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {TaskDataService  } from "../taskdata.service";
import { Todo } from "../todo";
@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css']
})
export class EdittodoComponent implements OnInit {
   todo_edit: FormGroup;
   status_arr: string[]=['done','pending'];
   taskId;
  constructor(private _actroute: ActivatedRoute, private _data: TaskDataService, private _router:Router) { }

  ngOnInit(): void {
    this.todo_edit=new FormGroup({
      task_id:new FormControl(),
      title:new FormControl(),
      status:new FormControl(),
    });
    this.taskId=this._actroute.snapshot.params['Id'];
    this._data.getTaskById(this.taskId).subscribe(
      (data:Todo[]) =>{

        this.todo_edit.patchValue({
          task_id:data[0].task_id,
          title:data[0].title,
          status:data[0].status,
        });

      });
  }
  todoEdit(){
       this._data.editTask(this.todo_edit.value).subscribe((x:any) =>{
         this._router.navigate(['/todos']);
       });
  }
}

