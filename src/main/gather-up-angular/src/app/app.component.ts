import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sessionKey: string;

  constructor(private loggy: NGXLogger) { }

  ngOnInit(): void {
    this.sessionKey = sessionStorage.getItem("email")!;
  }

  logOut() {
    // Clear session
    sessionStorage.clear();

    // Route
    window.location.assign("/login");
  }
}
