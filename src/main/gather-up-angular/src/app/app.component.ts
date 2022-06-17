import { Component } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loggy: NGXLogger) { }

  ngOnInit() { }

  logOut() {
    this.loggy.info("logOut() invoked");

    // Clear session
    sessionStorage.clear();

    // Route
    window.location.assign("/login");
  }
}
