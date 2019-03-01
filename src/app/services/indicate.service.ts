import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '@services/token.service';
import { MoviesList } from '@models/movies-list';
// import { baseLocal } from 'app/constants';

@Injectable()
export class IndicateService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  sendIndicate(form): Observable<MoviesList> {
    const token = this.tokenService.getHeader();

    return this.http.post<MoviesList>('https://api.assisteai.com.br/movies', form, {headers: token});
  }
}
