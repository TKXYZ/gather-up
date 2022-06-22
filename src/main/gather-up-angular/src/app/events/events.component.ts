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

  event: Event = new Event(0, "title", "description", "location", "dateTime", 0);
  eventList: Event[] = [];
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
      // GET user
      this.userService.getUserByEmail(this.sessionKey).subscribe(data => {
        this.user = data;

        // Sanity check
        this.loggy.info(this.user);
      });

      // GET user's events
      this.eventService.getEvents().subscribe(data => {
        // Iterate through all events and push only user's events into eventList
        for (let i in data) {
          if (data[i].userId == this.user.id) {
            this.eventList.push(data[i]);
          }
        }

        // Sanity check
        this.loggy.info(this.eventList);
      });
    }
  }

  saveEvent(): void {
    this.loggy.log("saveEvent() invoked");

    // Set the event's userId
    this.event.userId = this.user.id;

    // Create the event
    this.eventService.createEvent(this.event).subscribe();

    // Reload
    window.location.reload();
  }

  deleteEvent(index: number): void {

  }
}
