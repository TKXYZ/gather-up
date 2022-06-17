import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { User } from '../class/user/user';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = new User(0, "", "", "", "", "");

  sessionKey: string;

  constructor(private loggy: NGXLogger, private userServive: UserService) { }

  ngOnInit(): void {
    // Extract key from current session
    this.sessionKey = sessionStorage.getItem("email")!; // ! is TS non-null assertion operator

    // Validate if key exists and routes accordingly
    if (this.sessionKey == null) {
      window.location.assign("/login");
    } else {
      this.userServive.getUserByEmail(this.sessionKey).subscribe(data => this.user = data);
    }
  }

  logOut() {
    this.loggy.info("logOut() invoked");

    // Clear session
    sessionStorage.clear();

    // Route
    window.location.assign("/login");
  }
}
