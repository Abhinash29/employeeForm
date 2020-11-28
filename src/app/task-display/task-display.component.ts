import { Component, OnInit } from '@angular/core';
import {Task} from "./task";
import {TaskdataService}from "./taskdata.service";



@Component({
  selector: 'app-task-display',
  templateUrl: './task-display.component.html',
  styleUrls: ['./task-display.component.css']
})
export class TaskDisplayComponent implements OnInit {
  Task_arr : Task[]=[];
  constructor(private _data:TaskdataService) {}

  ngOnInit(): void {
    this. _data.getAlltasks().subscribe(
      (data) => {
        this.Task_arr= data;
      });
    }

    onTaskDelete(item:Task){
      this._data.deletetask(item.task_id).subscribe((x:any)=>{
          this.Task_arr.splice(this.Task_arr.indexOf(item),1);
      });
   }
  }


