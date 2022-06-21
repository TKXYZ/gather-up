import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Event } from '../class/event/event';
import { User } from '../class/user/user';
import { EventService } from '../service/event/event.service';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  event1: Event = new Event(0, "title", "description", "location", "dateTime", 0);
  eventList: Event[] = [
    this.event1
  ];
  user: User = new User(0, "", "", "", "", "");
  sessionKey: string;
  isHidden = false;

  constructor(private loggy: NGXLogger, private userService: UserService, private eventService: EventService) { }

  ngOnInit(): void {
    // Extract session key from sessionStorage
    this.sessionKey = sessionStorage.getItem("email")!; // TS non-null assertion operator
    this.loggy.warn("Session Key: " + this.sessionKey);

    // Validate if key exists and do something
    if (this.sessionKey == null) {
      window.location.assign("/login");
    } else {
      // GET user and their events
      this.userService.getUserByEmail(this.sessionKey).subscribe(data => this.user = data);
      this.eventService.getEvents().subscribe(data => this.eventList = data);

      // TODO: Create an eventService func that grabs event via user's ID
    }
  }

  saveEvent(): void {
    this.loggy.log("saveEvent()");
  }

  deleteEvent(index: number): void {

  }
}
