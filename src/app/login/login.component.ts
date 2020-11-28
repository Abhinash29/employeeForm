import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ROUTES } from '@angular/router';
import { User } from "./user";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //l:HeaderComponent = new HeaderComponent();
  @Input() loginstatus: number = 0;
  constructor() {}
  arrUser: User[] = [
    new User('Abhi', 'abhi@ygmail.com','12345'),
    new User('john', 'jo@mail.com','12345'),
  ];
  temp: number = 0;
  ngOnInit(): void {}
  onLogin(f: NgForm) {
    //f.value.usr_email;

    for (const item of this.arrUser) {
      //alert(item.name);
      if (
        f.value.usr_email === item.email &&
        f.value.password === item.password
      ) {
        //ROUTES.
        //console.log(item.name);
      }
    }
    if (this.temp == 1) {
      this.loginstatus = 1;
    }
  }
  onLogout() {}
}
