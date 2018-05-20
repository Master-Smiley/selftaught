import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user.model';
import { CustomValidators } from 'ng2-validation';



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

  passwordsMatchValidator(form: FormGroup) {
    const confirmPassword = form.controls.re_password.value;
    const originalPassword = form.controls.password.value;
    if (confirmPassword === originalPassword) {
      return null;
    } else {
      return {
        passMatch: true
      };
    }
  }

  createForm() {
      this.signupForm = this.formBuilder.group({
      username: [null, Validators.required, Validators.pattern('/^[-_ a-zA-Z0-9]+$/')],
      email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      password: [null, Validators.compose([Validators.required])],
      re_password:  [null, Validators.compose([Validators.required])]
    }, {
      validator: (formGroup: FormGroup) => {
        return this.passwordsMatchValidator(formGroup);
      }
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
