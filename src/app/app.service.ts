import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from "../../models/user";
import { Game } from "../../models/game";
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  user = new User();
  game: Game | undefined;

  constructor(private http: HttpClient) { }

  baseurl: string = 'http://localhost:8080';

  createUser(data: any): Observable<any> {
    return this.http.post(this.baseurl + '/addUser', data);
  }

  addGame(data: any): Observable<any> {
    return this.http.post(this.baseurl + '/addGame', data);
  }

  getGames() {
    return this.http.get(this.baseurl + '/getAllGames');
  }

  getUsers() {
    return this.http.get(this.baseurl + '/getAllUsers');
  }

  setLoggedInUser(user: User) {
    this.user = user;
  }

  getLoggedUser() {
    return this.user;
  }

  deleteGame(id: string) {
    return this.http.delete(this.baseurl + '/delete/' + id, { headers: this.headers });
  }
}
