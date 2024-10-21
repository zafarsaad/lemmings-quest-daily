import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {

  constructor(private http: HttpClient) { }

  simplePing(): Observable<string> {
    return of('Ping from the Simple Ping Service! Hope you are doing well!');
  }

  ping(): Observable<string> {
    return new Observable(observer => {
      observer.next('2nd Ping Observable!');
      observer.complete();
    });
  }

  // API observable
  fetchNewPost(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url);
  }

}
