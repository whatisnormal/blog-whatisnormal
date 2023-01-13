import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { combineLatest, concat, forkJoin, interval, map, merge, mergeAll, mergeMap, of, scan, Subject, switchMap, take, toArray } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MockDataService } from './mock-data.service';

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

  data : any;

  users$ = this.http.get("https://jsonplaceholder.typicode.com/users");
  posts$ = this.http.get("https://jsonplaceholder.typicode.com/posts");

  notifyEdit(entityId: number){
    this.entityEditedSubject.next(entityId);
  }

  constructor(private http : HttpClient, private mockDataService : MockDataService){

  }

  ngOnInit(): void {

    // this.sequentialStreams();
    this.callAggregateIntoSingleArray();
   // this.mergeStreams();

    // this.callMultipleData();

    // this.callContinuousData();

    // this.callUserAndCorrespondentPosts();
  }

  private callContinuousData(){
    const timerAlwaysEmmiting$ = interval(3000).pipe(take(10));

    combineLatest({
      users: this.users$,
      timerAlwaysEmmiting: timerAlwaysEmmiting$
    }).subscribe(this.loggingObserver("call when all streams emited at least once."))
  }

  private callMultipleData(){


    forkJoin({//? calls all streams at the same time. only when all complete, then the subscribe receives information.
      users: this.users$,
      posts: this.posts$
    }).subscribe(this.loggingObserver("call when all streams complete"))
  }

  private callUserAndCorrespondentPosts(){

    this.users$.pipe(switchMap((users : any)=>{ //? converts one observable to another. in this case switch map to forkJoin.
      return forkJoin(this.converUsersToPostsObservables(users))
    }
    )).subscribe(this.loggingObserver("callUserAndCorrespondentPosts"))
  }

  private callAggregateIntoSingleArray(){
    of(1, 2, 3, 4).
    pipe(
      mergeMap((id : number)=>{ //calls all posts in parallel, without any order and merges into a single observable that will emit once by each  merged sub-observable.
      return this.mockDataService.getPostsByUserId$(id);
    }),
    toArray(), //puts each post array into a single array of arrays
    map((masterArray : any[])=>{ // transforms the array of arrays into a flattened single array.
      return masterArray.flat();
    })
    ).subscribe(this.loggingObserver("callAggregateIntoSingleArray"))
  }

  private sequentialStreams(){
    concat(this.users$, this.posts$).subscribe(this.loggingObserver("one stream after another."))
  }

  private mergeStreams(){
    merge(this.users$, this.posts$).subscribe(this.loggingObserver("merge:"))
  }

  private converUsersToPostsObservables(users : any){
    return users.map((user: any)=> this.mockDataService.getPostsByUserId$((user.id)))
  }

  private loggingObserver(name: string){
    return {
      next: (data : any)=>{
        console.log(`[${name}]:`, data);
        this.data = data;
      },
      error: (error : Error)=>{
        //  Se umas das N requisições der erro, est
        console.error(`[${name}]:`, error);
      },
      complete: ()=>{
        //  Se umas das N requisições der erro, est
        console.log(`[${name}]: observable stream completed`);
      }

    }
  }
}
