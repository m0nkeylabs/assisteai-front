import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paginable } from '@models/paginable';
import { MoviesList } from '@models/movies-list';
import { FilterHome } from '@models/filter-home';
import { TokenService } from '@services/token.service';
// import { baseLocal } from 'app/constants';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient,  private tokenService: TokenService) { }

  getAllMoviesAndSeries(filters: FilterHome): Observable<Paginable<MoviesList>> {
    const hasToken = this.tokenService.getToken();
    const search = filters.search ? '&q=' + filters.search : '';
    const filter = '&filter=' + btoa(JSON.stringify({ ratings: filters.ratings, categories: filters.categories }));

    if (hasToken) {
      const header = this.tokenService.getHeader();
      return this.http.get<Paginable<MoviesList>>('https://api.assisteai.com.br/movies?page=' + filters.currentPage + filter + search,
                                                  { headers: header });
    } else {
      return this.http.get<Paginable<MoviesList>>('https://api.assisteai.com.br/movies?page=' + filters.currentPage + filter + search);
    }
  }
}
