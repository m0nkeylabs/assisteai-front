import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { baseLocal } from 'app/constants';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  sendLogin(data: any): Observable<any> {
    if (data.type === 'facebook') {
      return this.http.post<any>('https://api.assisteai.com.br/auth/login/facebook', { token: data.token });
    }
  }

  sendLogout(): Observable<any> {
    return this.http.get<any>('https://api.assisteai.com.br/auth/logout');
  }
}
