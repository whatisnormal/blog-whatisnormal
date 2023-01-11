import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { combineLatest, forkJoin, interval, Subject, switchMap, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit{
  private entityEditedSubject : Subject<number> = new Subject();
  entityEdited$ = this.entityEditedSubject.asObservable();

  notifyEdit(entityId: number){
    this.entityEditedSubject.next(entityId);
  }

  constructor(private http : HttpClient){

  }

  ngOnInit(): void {

    this.callMultipleData();

    this.callContinuousData();

    this.callUserAndCorrespondentPosts();
  }

  private callContinuousData(){
    const users$ = this.http.get("https://jsonplaceholder.typicode.com/users");
    const timerAlwaysEmmiting$ = interval(3000).pipe(take(10));

    combineLatest({
      users: users$,
      timerAlwaysEmmiting: timerAlwaysEmmiting$
    }).subscribe({
      next: (data : any)=>{
        console.log(data);
      }
    })
  }

  private callMultipleData(){
    const users$ = this.http.get("https://jsonplaceholder.typicode.com/users");
    const posts$ = this.http.get("https://jsonplaceholder.typicode.com/posts");

    forkJoin({
      users: users$,
      posts: posts$
    }).subscribe({
      next: (data : any)=>{
        console.log(data);
      }
    })
  }

  private callUserAndCorrespondentPosts(){
    const users$ = this.http.get("https://jsonplaceholder.typicode.com/users");

    users$.pipe(switchMap((users : any)=>{
      return forkJoin(this.converUsersToPostsObservables(users))
    }
    )).subscribe({
      next: (data : any)=>{
        console.log(data);
      }
    })
  }

  private converUsersToPostsObservables(users : any){
    return users.map((user: any)=> this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`))
  }
}
