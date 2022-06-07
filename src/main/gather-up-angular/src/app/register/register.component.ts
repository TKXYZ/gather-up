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

  // Values replaced via two-way binding when form submitted
  user: User = new User(0, "", "", "", "", "");

  constructor(private loggy: NGXLogger, private userService: UserService) { }

  ngOnInit(): void { }

  register(): void {
    this.loggy.info("register() invoked");

    // Sanity check
    this.loggy.info(this.user);

    // DB operation
    this.userService.getUserByEmail(this.user.email).subscribe(data => {
      if (data == null) {
        this.userService.createUser(this.user).subscribe();

        this.loggy.info("Registration successful.");

        // Store key for current session
        sessionStorage.setItem("email", this.user.email);
        let sessionKey = sessionStorage.getItem("email");
        this.loggy.info("Stored key: " + sessionKey);

        // Route
        window.location.assign("/events");
      } else {
        this.loggy.error("Registration failed.")
        alert("User already exists by that email. Try logging in instead?");
      }
    });
  }
}
