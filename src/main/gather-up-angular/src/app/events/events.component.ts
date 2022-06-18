import { Component, OnInit } from '@angular/core';
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

  event: Event = new Event(0, "", "", "", "", 0);
  eventList: Event[] = [];
  user: User = new User(0, "", "", "", "", "");
  sessionKey: string;
  isHidden = false;

  constructor(private userService: UserService, private eventService: EventService) { }

  ngOnInit(): void {
    // Extract session key from sessionStorage
    this.sessionKey = sessionStorage.getItem("email")!; // TS non-null assertion operator

    // Validate if key exists and do something
    if (this.sessionKey == null) {
      window.location.assign("/login");
    } else {
      // GET user and their events

      // TODO: Create an eventService func that grabs event via user's ID
    }
  }

  saveEvent(): void {

  }

  deleteEvent(index: number): void {

  }
}
