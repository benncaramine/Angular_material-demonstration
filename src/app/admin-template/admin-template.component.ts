import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent implements OnInit{

  constructor(public authService : AuthenticationService,
              private snackBar: MatSnackBar) {
  }
  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  showUser() {
    this.snackBar.open('Check your profile section !', '✓',  {
      duration: 10000, // Duration in milliseconds
      horizontalPosition: "center",
      verticalPosition: "bottom"
  })
  }


}
