import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { User } from '../class/user/user';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Values replaced via two-way binding when form submitted
  user: User = new User(0, "", "", "", "", "");

  constructor(private loggy: NGXLogger, private userService: UserService) { }

  ngOnInit(): void { }

  login() {
    this.loggy.info("login() invoked");

    // GET user
    this.userService.getUserByEmail(this.user.email).subscribe(data => {
      // Validate email
      if (data == null) {
        this.loggy.error("Login failed, invalid email.");
        alert("Invalid email!");
      } else {
        // Validate password
        if (this.user.password == data.password) {
          // Store key for current session
          sessionStorage.setItem("email", this.user.email);

          // Route
          window.location.assign("/profile");
        } else {
          this.loggy.error("Login failed, invalid password.");
          alert("Invalid password!");
        }
      }
    });
  }
}
