import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TokenService } from '@services/token.service';

import { ratings } from '@constants/ratings';
import { types } from '@constants/types';

import { LoginComponent } from 'app/login/login.component';
import { IndicateComponent } from 'app/indicate/indicate.component';
import { throttle } from '@shared/decorators/throttle';

import * as fromStore from 'app/home/store';
import * as _ from 'lodash';
import { Pagination } from '@models/pagination';
import { MoviesList } from '@models/movies-list';
import { FilterHome } from '@models/filter-home';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading$: Observable<boolean>;
  pagination$: Observable<Pagination>;
  moviesList$: Observable<Array<MoviesList>>;

  floatLabel = 'always';
  filterOpened = false;

  movies: Array<MoviesList>;

  typeEnum = types;
  typeArray = _.keys(types);
  rantingEnum = ratings;
  ratingArray = _.keys(ratings);

  filters: FilterHome = {
    search: '',
    exibition: 'all',
    ratings: ['UNMISSABLE', 'VERY_GOOD', 'GOOD', 'COOL', 'BAD', 'VERY_BAD', 'STAY_AWAY'],
    types: ['MOVIE', 'SERIE']
  };

  constructor(
    private store: Store<fromStore.HomeListState>,
    private tokenService: TokenService,
    public dialog: MatDialog) {
    this.moviesList$ = this.store.pipe(select(fromStore.getHomeListResponse));
    this.pagination$ = store.pipe(select(fromStore.getHomeListPagination));
    this.loading$ = store.pipe(select(fromStore.getHomeListLoading));
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadHomeList(this.filters));
  }

  setExibition(exibition) {
    this.filters.exibition = exibition;
    this.updateList();
  }

  isRatingActive(rating) {
    return _.includes(this.filters.ratings, rating);
  }

  isTypeActive(type) {
    return _.includes(this.filters.types, type);
  }

  openDialog(urlIndication?): void {
    if (this.tokenService.hasToken()) {
      const dialogRef = this.dialog.open(IndicateComponent, {
        width: '90%',
        maxWidth: '700px',
        data: {url: urlIndication}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.updateList();
        }
      });
    } else {
      const dialogRef = this.dialog.open(LoginComponent, {
        width: '90%',
        maxWidth: '400px',
        data: {url: urlIndication}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.updateList();
        }
      });
    }
  }

  @throttle(800)
  updateList() {
    console.log('buscou');
  }

  updateRatingFilter(tag) {
    if (_.includes(this.filters.ratings, tag)) {
      if (this.filters.ratings.length > 1) {
        this.filters.ratings = _.remove(this.filters.ratings, (n) => {
          return n !== tag;
        });
      }
    } else {
      this.filters.ratings.push(tag);
    }

    this.updateList();
  }

  updateTypeFilter(tag) {
    if (_.includes(this.filters.types, tag)) {
      if (this.filters.types.length > 1) {
        this.filters.types = _.remove(this.filters.types, (n) => {
          return n !== tag;
        });
      }
    } else {
      this.filters.types.push(tag);
    }

    this.updateList();
  }

  getClassPoster(averageRating) {
    let ratingClass: string;
    switch (averageRating) {
      case 'STAY_AWAY':
        ratingClass = 'rating-1';
        break;
      case 'VERY_BAD':
        ratingClass = 'rating-2';
        break;
      case 'BAD':
        ratingClass = 'rating-3';
        break;
      case 'COOL':
        ratingClass = 'rating-4';
        break;
      case 'GOOD':
        ratingClass = 'rating-5';
        break;
      case 'VERY_GOOD':
        ratingClass = 'rating-6';
        break;
      case 'UNMISSABLE':
        ratingClass = 'rating-7';
        break;
      default:
        break;
    }

    return ratingClass;
  }

  getClassType(type) {
    let typeClass: string;
    switch (type) {
      case 'MOVIE':
        typeClass = 'type-movie';
        break;
      case 'SERIE':
        typeClass = 'type-serie';
        break;
      default:
        break;
    }

    return typeClass;
  }

  @HostListener('document:scroll', ['$event'])
  onScroll($event) {
    console.log();
    if ((window.innerHeight + window.scrollY) > document.body.offsetHeight) {
      this.store.dispatch(new fromStore.LoadHomeList(this.filters));
    }
  }

}
