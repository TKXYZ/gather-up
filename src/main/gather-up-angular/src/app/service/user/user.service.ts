import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NGXLogger} from 'ngx-logger';

import {User} from "../../class/user/user";

// This service maintains CRUD operations for Users
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string;

  // Custom HTTP options to throw into CRUD operations
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'authkey',
    }),
  };

  constructor(private http: HttpClient, private loggy: NGXLogger) {
    this.baseUrl = "http://localhost:9999/"; // development endpoint
    // this.baseUrl = "http://ec2-18-217-122-210.us-east-2.compute.amazonaws.com:9999/"; // production endpoint
  }

  // CREATE
  public createUser(user: User) {
    try {
      return this.http.post<User>(this.baseUrl + "user", user, this.httpOptions); // localhost:9999/user
    } catch (error) {
      this.loggy.error("UserService createUser() error: " + error)
    }
    return -1;
  }

  // READ

  // UPDATE

  // DELETE
}
