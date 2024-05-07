import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  public loginFormGroup! : FormGroup;
  hide = true;
  constructor(private fb : FormBuilder,
              private authService : AuthenticationService,
              private router : Router,
              private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      username : this.fb.control(''),
      password : this.fb.control('')
    });
  }
  errorMessage: string | undefined;
  login() {
    this.snackBar.open('Access Pending Administrator Approval !', 'Dismiss',  {
      duration: 5000, // Duration in milliseconds
      horizontalPosition: "center",
      verticalPosition: "bottom"
    });
  }

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }
}



