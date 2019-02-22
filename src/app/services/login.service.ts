import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { baseLocal } from 'app/constants';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  login(tokenFace: string): Observable<any> {
    return this.http.post<any>('https://api.assisteai.com.br/auth/login/facebook', { token: tokenFace });
  }

  logout(params): Observable<any> {
    return this.http.post<any>('https://api.assisteai.com.br/auth/login/facebook', params);
  }
}
