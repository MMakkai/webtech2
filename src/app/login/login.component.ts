import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup(
    {
      username: new FormControl(''),
      password: new FormControl('')
    }
  );

  users: User[] = [];
  user = new User();
  username!: string;
  foundUser = false;

  constructor(
    private router: Router,
    private appService: AppService
  ) { }

  ngOnInit(): void {
  }

  get form() { return this.loginForm.value; }

  onSubmit() { 
     if(this.loginForm.value.username === "admin" && this.loginForm.value.password === "pw"){
      sessionStorage.setItem('user', 'admin');
      let data = sessionStorage.getItem('user');
      console.log(data);
        this.router.navigate(['/list-game']);
      }
      else {
        alert('login failed!');
      }
  }
}
