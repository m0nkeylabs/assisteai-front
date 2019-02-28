import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paginable } from '@models/paginable';
import { MoviesList } from '@models/movies-list';
import { FilterHome } from '@models/filter-home';
// import { baseLocal } from 'app/constants';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  getAllMoviesAndSeries(filters: FilterHome): Observable<Paginable<MoviesList>> {
    const search = filters.search ? '&q=' + filters.search : '';
    const filter = '&filter=' + btoa(JSON.stringify({ ratings: filters.ratings, categories: filters.categories }));

    return this.http.get<Paginable<MoviesList>>('https://api.assisteai.com.br/movies?page=' + filters.currentPage + filter + search);
  }
}
