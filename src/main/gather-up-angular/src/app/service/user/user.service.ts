import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { User } from "../../class/user/user";

// This service maintains CRUD operations for User
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string;

  // Custom HTTP options to throw into CRUD operations
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'authkey'
    }),
  };

  constructor(private loggy: NGXLogger, private http: HttpClient) {
    this.baseUrl = "http://localhost:9999"; // development endpoint
    // this.baseUrl = "http://ec2-18-217-122-210.us-east-2.compute.amazonaws.com:9999"; // production endpoint
  }

  // CREATE
  public createUser(user: User) {
    try {
      return this.http.post<User>(this.baseUrl + "/user/createUser", user, this.httpOptions); // http://localhost:9999/user/createUser
    } catch (error) {
      this.loggy.error("UserService createUser() error: " + error);
      throw (error);
    }
  }

  // READ
  public getUsers(): Observable<User[]> {
    try {
      return this.http.get<User[]>(this.baseUrl + "/user/getUsers", this.httpOptions); // http://localhost:9999/user/getUsers
    } catch (error) {
      this.loggy.error("UserService getUsers() error: " + error);
      throw (error);
    }
  }

  public getUserById(id: number): Observable<User> {
    try {
      return this.http.get<User>(this.baseUrl + "/user/getUserById/" + id, this.httpOptions); // http://localhost:9999/user/getUserById/{id}
    } catch (error) {
      this.loggy.error("UserService getUserById() error: " + error);
      throw (error);
    }
  }

  public getUserByEmail(email: string): Observable<User> {
    try {
      return this.http.get<User>(this.baseUrl + "/user/getUserByEmail/" + email, this.httpOptions); // http://localhost:9999/user/getUserByEmail/{email}
    } catch (error) {
      this.loggy.error("UserService getUserByEmail() error: " + error);
      throw (error);
    }
  }

  // UPDATE
  public updateUser(user: User) {
    try {
      return this.http.put<User>(this.baseUrl + "/user/updateUser", user, this.httpOptions); // http://localhost:9999/user/updateUser
    } catch (error) {
      this.loggy.error("UserService updateUser() error: " + error);
      throw (error);
    }
  }

  // DELETE
  public deleteUserById(id: number) {
    try {
      return this.http.delete<User>(this.baseUrl + "/user/deleteUserById/" + id, this.httpOptions); // http://localhost:9999/user/deleteUserById/{id}
    } catch (error) {
      this.loggy.error("UserService deleteUserById() error: " + error);
      throw (error);
    }
  }
}
