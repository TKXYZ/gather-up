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
    // Extract session key from sessionStorage
    this.sessionKey = sessionStorage.getItem("email")!; // TS non-null assertion operator

    // Validate if key exists and do something
    if (this.sessionKey == null) {
      window.location.assign("/login");
    } else {
      // GET user's details
      this.userServive.getUserByEmail(this.sessionKey).subscribe(data => this.user = data);
    }
  }

  logOut() {
    // Clear session
    sessionStorage.clear();

    // Route
    window.location.assign("/login");
  }
}
