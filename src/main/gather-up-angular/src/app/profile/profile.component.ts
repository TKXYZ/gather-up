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

  constructor(private loggy: NGXLogger, private userServive: UserService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.loggy.info("logOut() invoked");

    // Clear session

    // Test if data remains

    // Route
  }
}
