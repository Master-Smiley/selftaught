import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private AuthService) { }

  onSignup() {
    const user = new User(
      this.signupForm.value.username,
      this.signupForm.value.password,
      this.signupForm.value.email
    );
    this.AuthService.signup(user)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl (null, Validators.required),
      re_password:  new FormControl(null, Validators.required)

    });
  }

}
