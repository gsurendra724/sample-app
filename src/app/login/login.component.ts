import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  username = "virtusa";
  password = "virtusa123";

  message = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.controls['username'].value == this.username) {
      if (this.loginForm.controls['password'].value == this.password) {
        this.message = null
        this.router.navigate(["/billing"]);
      } else {
        this.message = "* Wrong password"
      }
    } else {
      this.message = "* Wrong username"
    }
    console.log(this.loginForm.controls['username'].value)
  }
}
