import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  invalidNamesArr: string[] = ['hello', 'angular'];
  constructor() {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      user_name: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        this.invalidUserNameValidation.bind(this),
      ]),
      user_email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password_group: new FormGroup(
        {
          password: new FormControl(null, [Validators.required]),
          confirm_password: new FormControl(null, [Validators.required]),
        },
        [this.matchPasswords.bind(this)]
      ),
      user_phone: new FormControl(null),
      user_notification: new FormControl('email'),
      user_hobbies: new FormArray([]),
    });

    this.signupForm
      .get('user_notification')
      .valueChanges.subscribe((x) => this.setNotificationValidation(x));
  }
  setNotificationValidation(value: string) {
    const phoneControl = this.signupForm.get('user_phone');
    const emailControl = this.signupForm.get('user_email');
    if (value == 'phone') {
      phoneControl.setValidators(Validators.required);
      emailControl.clearValidators();
      emailControl.setValidators(Validators.email);
    } else {
      emailControl.setValidators([Validators.required, Validators.email]);
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
    emailControl.updateValueAndValidity();
  }
  onSignup() {
    console.log(this.signupForm.value);
  }
  invalidUserNameValidation(
    control: AbstractControl
  ): { [key: string]: boolean } {
    if (this.invalidNamesArr.indexOf(control.value) >= 0) {
      return { invalidName: true };
    }
    return null;
  }
  matchPasswords(control: AbstractControl): { [key: string]: boolean } {
    if (
      control.get('password').value != control.get('confirm_password').value
    ) {
      return { passwordMatchError: true };
    }
    return null;
  }
  getControl() {
    return (<FormArray>this.signupForm.get('user_hobbies')).controls;
  }
  onAddHobbiesClick() {
    if (this.signupForm.get('user_hobbies').value.length < 3) {
      const control = new FormControl(null);
      (this.signupForm.get('user_hobbies') as FormArray).push(control);
    } else {
      alert('you can add max 3 hobbies');
    }
  }
  onRemoveHobbiesClick(i) {
    (this.signupForm.get('user_hobbies') as FormArray).removeAt(i);
  }
}
