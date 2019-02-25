import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paginable } from '@models/paginable';
import { MoviesList } from '@models/movies-list';
import { FilterHome } from '@models/filter-home';
import { TokenService } from '@servicestoken.service';
// import { baseLocal } from 'app/constants';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getProfile(): Observable<any> {
    const typeAuth = this.tokenService.getAuthType();
    const token = this.tokenService.getToken();
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: typeAuth + ' ' + token
    });

    return this.http.get<any>('https://api.assisteai.com.br/me', {headers: header});
  }
}
