import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Rx";
import {User} from "./users.interface";
import {map} from "rxjs/internal/operators";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    return  this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  createUser(body): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users`, body);
  }

  deleteUser(id): Observable<number> {
    return this.http.post<User>(`${environment.apiUrl}/users/delete`, {'id': id})
      .pipe(map(response => id));
  }
}
