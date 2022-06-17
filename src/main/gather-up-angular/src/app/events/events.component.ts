import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { User } from '../class/user/user';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  user: User = new User(0, "", "", "", "", "");

  sessionKey: string;

  constructor(private loggy: NGXLogger, private userService: UserService) { }

  ngOnInit(): void {
    // Extract key from current session
    this.sessionKey = sessionStorage.getItem("email")!; // ! is TS non-null assertion operator

    // Validate if key exists and routes accordingly
    if (this.sessionKey == null) {
      window.location.assign("/login");
    }
  }
}
