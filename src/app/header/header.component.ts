import { Component, OnInit } from '@angular/core';
import { RegistrationService } from "../registration.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _regData:RegistrationService) { }

  ngOnInit(): void {}
  onLoginClick(){
    this._regData.login("admin","1234")
    console.log(-'from localstorage ',localStorage.getItem('user_name'));
  }
  onLogOutClick(){
    this._regData.logout();
  }
  get isLoggedIn():boolean {
    return this._regData.isLoggedIn;
  }

}
