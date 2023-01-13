import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor(private http : HttpClient) { }

  getPostsByUserId$(userId: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  }
}
