import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '@services/token.service';
// import { baseLocal } from 'app/constants';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  sendLogin(data: any): Observable<any> {
    if (data.type === 'facebook') {
      return this.http.post<any>('https://api.assisteai.com.br/auth/login/facebook', { token: data.token });
    }
  }

  sendLogout(): Observable<any> {
    const token = this.tokenService.getHeader();
    return this.http.get<any>('https://api.assisteai.com.br/auth/logout', { headers: token });
  }

  refreshToken() {
    const token = this.tokenService.getHeader();
    return this.http.get<any>('https://api.assisteai.com.br/auth/refresh', { headers: token });
  }
}
