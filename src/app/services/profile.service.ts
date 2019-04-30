import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '@services/token.service';
import { map, catchError } from 'rxjs/operators';
// import { baseLocal } from 'app/constants';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getProfile(): Observable<any> {
    const token = this.tokenService.getHeader();

    return this.http.get<any>('https://api.assisteai.com.br/auth/me', {headers: token});
  }

  updateProfile(profile): Observable<any> {
    const token = this.tokenService.getHeader();
    return this.http.put<any>('https://api.assisteai.com.br/users', {profile}, {headers: token});
  }

  updateWatchLater(movieId: number, isActive: boolean): Observable<any> {
    const token = this.tokenService.getHeader();

    if (isActive) {
      return this.http.delete<any>('https://api.assisteai.com.br/watch-later/' + movieId, {headers: token}).pipe(
        map(response => {
          const newResponse = {
            success: response.success,
            movie: { id: movieId }
          };
          return newResponse;
        }),
        catchError(error => {
          return Observable.throw(error);
        })
      );
    } else {
      return this.http.post<any>('https://api.assisteai.com.br/watch-later', {movie_id: movieId}, {headers: token});
    }
  }

}
