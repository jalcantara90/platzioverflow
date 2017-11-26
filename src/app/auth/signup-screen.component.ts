import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html'
})

export class SignUpScreenComponent implements OnInit {
  signupForm: FormGroup;
  hide: boolean = true;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      password: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { email, password, firstName, lastName } = this.signupForm.value;
      const user = new User(email, password, firstName, lastName);
      this.authService.signup(user)
          .subscribe(
            this.authService.login,
            err => console.log(err)
          );
    }
  }
  
}
