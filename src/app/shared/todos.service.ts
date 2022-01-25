import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  all() {
    let dbObject = this.http.get(`${BASE_URL}tasks`);
    return dbObject;
  }
}
