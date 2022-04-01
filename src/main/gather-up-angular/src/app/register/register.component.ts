import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

import { User } from '../class/user/user';
import { PasswordEncryptionService } from '../service/password-encryption/password-encryption.service';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Two-way bind will replace these values when User submits
  user: User = new User(0, "", "", "", "", "");

  constructor(private loggy: NGXLogger, private passwordEncryptionService: PasswordEncryptionService, private userService: UserService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.loggy.info("register() invoked");

    // Encrypts user password before sending to DB
    this.user.password = this.passwordEncryptionService.encrypt((<HTMLInputElement>document.getElementById("password")).value);

    // Sanity check
    console.log(this.user);

    // DB operation
    this.userService.createUser(this.user).subscribe(data => {
      this.loggy.info("User from DB: " + data);
      if (data != null) {
        this.loggy.info("Registration successful.");

        // Stores key for current session
        sessionStorage.setItem("email", this.user.email);
        let sessionKey = sessionStorage.getItem("email");
        this.loggy.info("Stored key: " + sessionKey);

        // Route
        window.location.assign("/event");
      } else {
        this.loggy.error("Registration failed.")
        alert("User already exists. Try logging in instead?");
      }
    })
  }
}
