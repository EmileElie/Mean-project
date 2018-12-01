import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembresService {

  private url = "http://localhost:8888/membres";
  
  constructor(private http: HttpClient) { }

  /* GET members from the server */
  getMembres(): Observable<any> {
    let obs: Observable<any>;
    obs =  this.http.get(this.url);
    // console.log(obs);
    return obs;
  }
}
