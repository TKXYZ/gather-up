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

  user: User = new User(0, "", "", "", "", "");
  event: Event = new Event(0, "", "", "", "", 0);
  eventList: Event[] = [];
  sessionKey: string;
  isHidden = false;

  constructor(private loggy: NGXLogger, private userService: UserService, private eventService: EventService) { }

  ngOnInit(): void {
    // Extract session key from sessionStorage
    this.sessionKey = sessionStorage.getItem("email")!; // TS non-null assertion operator

    // Validate if key exists and do something
    if (this.sessionKey == null) {
      window.location.assign("/login");
    } else {
      // GET user
      this.userService.getUserByEmail(this.sessionKey).subscribe(data => {
        this.user = data;

        // user check
        this.loggy.info(this.user);

        // GET user's events
        this.eventService.getEvents().subscribe(data => {
          for (let i in data) {
            if (data[i].userId == this.user.id) {
              this.eventList.push(data[i]);
            }
          }

          // eventList[] check
          this.loggy.info(this.eventList);
        });
      });
    }
  }

  saveEvent(): void {
    this.loggy.info("saveEvent() invoked");

    // Set the event's userId
    this.event.userId = this.user.id;

    // Create the event
    this.eventService.createEvent(this.event).subscribe();

    // Reload
    window.location.reload();
  }

  deleteEvent(index: number): void {
    this.loggy.info("deleteEvent() invoked");

    // Extract selected event's Id
    let selectedEventId = this.eventList[index].id;

    // Delete event from DB by it's Id
    this.eventService.deleteEventById(selectedEventId).subscribe();

    // Reload
    window.location.reload();
  }
}
