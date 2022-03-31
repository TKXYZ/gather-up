import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { User } from '../class/user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Two-way bind will replace these values when User submits
  user: User = new User(0, "", "", "", "", "");

  constructor(private loggy: NGXLogger) { }

  ngOnInit(): void {
  }

  register(): void {
    this.loggy.info("register() clicked");

    // Sanity check
    console.log(this.user);
  }
}
