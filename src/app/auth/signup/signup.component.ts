import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user.model';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.createForm();
  }

  createForm() {
      this.signupForm = this.formBuilder.group({
      username: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      re_password:  [null, Validators.required]
    });
    }

  onSignup() {
    const user = new User(
      this.signupForm.value.username,
      this.signupForm.value.password,
      this.signupForm.value.email
    );
    this.authService.signup(user)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
  }


  ngOnInit() {
  }

}
