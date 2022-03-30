import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { User } from '../class/user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private loggy: NGXLogger) { }

  ngOnInit(): void {
  }

  register(): void {
    this.loggy.info("--- register() clicked ---");

    // Constructs User based on input values
    let email = (<HTMLInputElement>document.getElementById("inputEmail")).value;
    let password = (<HTMLInputElement>document.getElementById("inputPassword")).value;
    let firstName = (<HTMLInputElement>document.getElementById("inputFirstName")).value;
    let lastName = (<HTMLInputElement>document.getElementById("inputLastName")).value;
    let contact = (<HTMLInputElement>document.getElementById("inputContact")).value;
  }
}
