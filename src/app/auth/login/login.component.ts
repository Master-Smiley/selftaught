import { AuthService } from '../auth.service';
import { User } from '../user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


// finish onLogin

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.createForm();
   }

   createForm() {
      this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
   }

  onLogin() {
      const user = new User(this.loginForm.value.username, this.loginForm.value.password);
      this.authService.signin(user)
        .subscribe(
          data => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            this.router.navigateByUrl('/');
          },
          error => console.error(error)
        );
      this.loginForm.reset();
    }

  ngOnInit() {
  }

}
