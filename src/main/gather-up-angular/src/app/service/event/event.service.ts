import {Injectable} from '@angular/core';
import {NGXLogger} from 'ngx-logger';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Event} from 'src/app/class/event/event';

// This service maintains CRUD operations for Event
@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl: string;

  // Custom HTTP options to throw into CRUD operations
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'authkey',
    }),
  };

  constructor(private loggy: NGXLogger, private http: HttpClient) {
    this.baseUrl = "http://localhost:9999"; // development endpoint
    // this.baseUrl = "http://ec2-18-217-122-210.us-east-2.compute.amazonaws.com:9999"; // production endpoint
  }

  // CREATE
  public createEvent(event: Event) {
    try {
      return this.http.post<Event>(this.baseUrl + "/event/createEvent", event, this.httpOptions); // http://localhost:9999/event/createEvent
    } catch (error) {
      this.loggy.error("EventService createEvent() error: " + error);
      throw (error);
    }
  }

  // READ
  public getEvents(): Observable<Event[]> {
    try {
      return this.http.get<Event[]>(this.baseUrl + "/event/getEvents", this.httpOptions); // http://localhost:9999/event/getEvents
    } catch (error) {
      this.loggy.error("EventService getEvents() error: " + error);
      throw (error);
    }
  }

  public getEventById(id: number): Observable<Event> {
    try {
      return this.http.get<Event>(this.baseUrl + "/event/getEventById/" + id, this.httpOptions); // http://localhost:9999/event/getEventById/{id}
    } catch (error) {
      this.loggy.error("EventService getEventById() error: " + error);
      throw (error);
    }
  }

  // UPDATE
  public updateEvent(event: Event) {
    try {
      return this.http.put<Event>(this.baseUrl + "/event/updateEvent", event, this.httpOptions); // http://localhost:9999/event/updateEvent
    } catch (error) {
      this.loggy.error("EventService updateEvent() error: " + error);
      throw (error);
    }
  }

  // DELETE
  public deleteEventById(id: number) {
    try {
      return this.http.delete<Event>(this.baseUrl + "/event/deleteEventById/" + id, this.httpOptions); // http://localhost:9999/event/deleteEventById/{id}
    } catch (error) {
      this.loggy.error("EventService deleteEventById() error: " + error);
      throw (error);
    }
  }
}
