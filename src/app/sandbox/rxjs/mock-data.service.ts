import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor(private http : HttpClient) { }

  users$ = this.http.get("https://jsonplaceholder.typicode.com/users");
  posts$ = this.http.get("https://jsonplaceholder.typicode.com/posts");

  getPostsByUserId$(userId: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  }
}
