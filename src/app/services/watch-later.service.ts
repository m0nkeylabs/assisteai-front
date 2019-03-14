import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paginable } from '@models/paginable';
import { MoviesList } from '@models/movies-list';
import { FilterHome } from '@models/filter-home';
import { TokenService } from '@services/token.service';
// import { baseLocal } from 'app/constants';

@Injectable()
export class WatchLaterService {

  constructor(private http: HttpClient,  private tokenService: TokenService) { }

  getAllWatchLater(): Observable<any> {
    const header = this.tokenService.getHeader();

    return this.http.get<any>('https://api.assisteai.com.br/watch-later', { headers: header });
  }
}
