import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    this.baseUrl = "http://localhost:9999/"; // development endpoint
    // this.baseUrl = "http://ec2-18-217-122-210.us-east-2.compute.amazonaws.com:9999/"; // production endpoint
  }

  // CREATE

  // READ

  // UPDATE

  // DELETE
}
