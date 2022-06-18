import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Event } from '../class/event/event';
import { EventService } from '../service/event/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  event: Event = new Event(0, "eventTitle", "eventDescription", "eventLocation", "eventDateTime", 0);
  eventList: Event[] = [];
  sessionKey: string;
  isHidden = false;

  constructor(private loggy: NGXLogger, private eventService: EventService) { }

  ngOnInit(): void {
    // Extract session key from sessionStorage
    this.sessionKey = sessionStorage.getItem("email")!; // TS non-null assertion operator

    // Validate if key exists and do something
    if (this.sessionKey == null) {
      window.location.assign("/login");
    } else {
      // GET user's events
      this.eventService.getEvents().subscribe(data => this.eventList = data);
    }
  }

  saveEvent(): void {

  }

  deleteEvent(index: number): void {

  }
}
