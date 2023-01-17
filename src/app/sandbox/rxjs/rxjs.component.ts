import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { combineLatest, concat, forkJoin, interval, map, merge, mergeAll, mergeMap, of, scan, Subject, switchMap, take, toArray } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MockDataService } from './mock-data.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule,FormsModule, MatInputModule],
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit{

changedOption(selectedOptionid: number) {
  switch(selectedOptionid){
    case 1:
      this.sequentialStreams();
      break;
    case 2:
      this.callAggregateIntoSingleArray();
      break;
    case 3:
      this.mergeStreams();
      break;
    case 4:
      this.callMultipleData();
      break;
    case 5:
      this.callContinuousData();
      break;
    case 6:
      this.callUserAndCorrespondentPosts();
      break;
  }
}


  data : any;

  users$ = this.http.get("https://jsonplaceholder.typicode.com/users");
  posts$ = this.http.get("https://jsonplaceholder.typicode.com/posts");



  rxJsSelectOptions:  {id: number, desc: string, function? : any}[] = [
    {
      id: 0, desc: "None",
    },
    {
      id: 1, desc: "concat: one stream after another",
    },
    {
      id: 2, desc: "callAggregateIntoSingleArray",
    },
    {
      id: 3, desc: "callAggregateIntoSingleArray",
    },
    {
      id: 4, desc: "callAggregateIntoSingleArray",
    },
    {
      id: 5, desc: "callAggregateIntoSingleArray",
    },
    {
      id: 6, desc: "callAggregateIntoSingleArray",
    },
  ];

  selectedOptionId : number = this.rxJsSelectOptions?.[0]?.id;



  constructor(private http : HttpClient, private mockDataService : MockDataService){

  }

  ngOnInit(): void {
  }

  private callContinuousData(){
    const timerAlwaysEmmiting$ = interval(3000).pipe(take(10));

    combineLatest({
      users: this.users$,
      timerAlwaysEmmiting: timerAlwaysEmmiting$
    })
    .subscribe(this.loggingObserver("call when all streams emited at least once."))
  }

  private callMultipleData(){


    forkJoin({//? calls all streams at the same time. only when all complete, then the subscribe receives information.
      users: this.users$,
      posts: this.posts$
    }).subscribe(this.loggingObserver("call when all streams complete"))
  }

  private callUserAndCorrespondentPosts(){

    this.users$.pipe(
      switchMap((users : any)=>{ //? converts one observable to another. in this case switch map to forkJoin.
      return forkJoin(this.converUsersToPostsObservables(users)) //combines all sub-observables and emits 1x once all are completed . Does the same as 'callAggregateIntoSingleArray' up to 'toArray'
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
    concat(this.users$, this.posts$) // calls multiple streams as input in order, from left to right.
    .subscribe(this.loggingObserver("concat: one stream after another."))
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
        console.log(`%c [${name}]`,  'background: #222; color: #bada55');
        console.dir(data, {depth: null, colors: true})
        this.data = JSON.stringify(data, null, '\t');;
      },
      error: (error : Error)=>{
        //  Se umas das N requisições der erro, est
        console.error(`[${name}]:`, error,  'background: #222; color: #bada55');
      },
      complete: ()=>{
        //  Se umas das N requisições der erro, est

        console.log(`%c [${name}]: observable stream completed`, 'background: #222; color: #bada55');
      }

    }
  }
}
