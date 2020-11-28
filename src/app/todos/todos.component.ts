import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { Employee } from './employee';
import { Product } from './product';
import { TaskDataService } from './taskdata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  task_id:number;
  title;
  status;
  user_email;
  user_name;
  user_password;
  user_mobile_no;
  pro_id;
  pro_name;
  pro_price;
  pro_qty;
  pro_desc;
  pro_mfg;
  pro_img;

  flag: boolean = false;
  eflag: boolean = false;
  pflag: boolean = false;

  //arrName: string[] = ['baba', 'yaga'];
  //arrNum: number[] = [1, 2, 3, 4, 5, 8, 6];
  //new Todo(1, 'Hello', 'done'),
  //new Todo(2, 'email to your manager', 'pending'),
  arrTodos: Todo[] = [];
  arrEmployees: Employee[] = [];
  arrProduct: Product[] = [
    /*     new Product(1, 'Camera', 'new', 23000),
    new Product(2, 'Micromax Dongle', 'unused', 1000),
    new Product(3, 'Dell Laptop', '1 year old', 18000), */
  ];
  constructor(private _data: TaskDataService,private _router:Router) {}

  ngOnInit(): void {
    this._data.getAllTasks().subscribe((data: Todo[]) => {
      this.arrTodos = data;
    });
    this._data.getAllUsers().subscribe((data: Employee[]) => {
      this.arrEmployees = data;
    });
    this._data.getAllProduct().subscribe((data: Product[]) => {
      this.arrProduct = data;
    });
  }
  onEditTask(item: Todo) {
    this._router.navigate(['/todos/edit', item.task_id]);
  }
  onDeleteTask(item: Todo) {

    this._data.deleteTask(item.task_id).subscribe((x: any)=>{
      this.arrTodos.splice(this.arrTodos.indexOf(item),1);
    });
  }
    //this._data.addTask().
    //  this._data.deleteTask(item.id).subscribe((x: any) => {
    //     if (x.affectedRows == 1) {
    //       this.arrTodos.splice(this.arrTodos.indexOf(item), 1);
    //     }
    //   });

  // onUpdateTask(item: Todo) {
  //   if (item.status == 'done') {
  //     item.status = 'pending';
  //     this._data.updateTask(item.id, item).subscribe();
  //   } else {
  //     item.status = 'done';
  //     this._data.updateTask(item.id, item).subscribe();
  //   }
  //}
  //tof=new Todo();
  onAddTask() {
    this._data
    .addTask(new Todo(this.task_id, this.title, this.status))
    .subscribe((x) => {
      console.log(x);
      this.arrTodos.push(new Todo(this.task_id, this.title, this.status));
      this.flag = false;
    });
  }
  onCancelTask() {
    this.flag = false;
  }
  onAddNewTask() {
    if (!this.flag) {
      this.flag = true;
      this.pflag = this.eflag = false;
    } else {
      this.flag = false;
    }
  }
  onAddNewEmployee() {
    if (!this.eflag) {
      this.eflag = true;
      this.flag = this.pflag = false;
    } else {
      this.eflag = false;
    }
  }
  onEditEmployee(item:Employee) {
    this._router.navigate(['/editemployee',item.user_name])
  }

  onDeleteEmpoyee(item: Employee) {
    this._data.deleteuser_tbl(item.user_name).subscribe((x: any) =>{
      if (x.affectedRows ==1){
    this.arrEmployees.splice(this.arrEmployees.indexOf(item), 1);
      }
    });
  }
  onAddEmployee() {
    this.arrEmployees.push(
      new Employee(this.user_email, this.user_name, this.user_password, this.user_mobile_no)
    );
    this._data.adduser_tbl(new Employee(this.user_email, this.user_name, this.user_password, this.user_mobile_no))
      .subscribe();
    //this.eflag = false;
  }
  onCancelEmployee() {
    this.eflag = false;
  }
  onShowProduct() {
    if (this.pflag) {
      this.pflag = false;
    } else {
      this.pflag = true;
      this.flag = this.eflag = false;
    }
  }
  onCancelProduct() {
    this.pflag = false;
  }
  onDeleteProduct(item: Product) {
    this._data.deleteProduct_tbl(item.pro_id).subscribe((x: any) =>{
      if (x.affectedRows ==1){
    this.arrProduct.splice(this.arrProduct.indexOf(item), 1);
   }
 });
}
  onAddProduct() {
    this.arrProduct.push(
    new Product(this.pro_id, this.pro_name, this.pro_price, this.pro_qty,this.pro_desc,this.pro_mfg,this.pro_img));
    this._data
     .addproduct_tbl (new Product(this.pro_id, this.pro_name, this.pro_price,this.pro_desc,this.pro_qty,this.pro_mfg,this.pro_img))
    .subscribe();
  }
  onEditProduct(item:Product) {
    this._router.navigate(['/editproduct',item.pro_id])
  }


}




