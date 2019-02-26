import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '@services/token.service';
// import { baseLocal } from 'app/constants';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getProfile(): Observable<any> {
    const token = this.tokenService.getHeader();

    return this.http.get<any>('https://api.assisteai.com.br/auth/me', {headers: token});
  }
}
