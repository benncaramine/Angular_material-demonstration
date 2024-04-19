import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";
import {Route, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  public loginFormGroup! : FormGroup;
  hide = true;
  constructor(private fb : FormBuilder,
              private authService : AuthenticationService,
              private router : Router,
              private snackBar: MatSnackBar) {
  }
  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      username : this.fb.control(''),
      password : this.fb.control('')
    });
  }
  errorMessage: string | undefined;
  login() {
    let username = this.loginFormGroup.value.username;
    let password = this.loginFormGroup.value.password;
    let auth = this.authService.login(username, password);
    if(auth==true){
      console.log(auth);
      this.router.navigateByUrl("/admin/students");
    }
    else { // to use snackBar, u must use a constructor !
      this.snackBar.open('Authentication failed. Please check your credentials.', 'Dismiss',  {
        duration: 5000, // Duration in milliseconds
        horizontalPosition: "center",
        verticalPosition: "bottom"
      });
    }
    console.log("Méthode de connexion appelée.");
  }

  register() {
    this.snackBar.open('Please contact your administrator to register', 'Dismiss',  {
      duration: 5000, // Duration in milliseconds
      horizontalPosition: "center",
      verticalPosition: "bottom"
    });
  }

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }
}


