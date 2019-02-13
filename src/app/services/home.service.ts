import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { baseLocal } from 'app/constants';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  getAllMoviesAndSeries(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/get-list-home');
  }
}
