import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

import { MatDialog } from '@angular/material';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';


import { ratings } from '@constants/ratings';
import { categories } from '@constants/categories';

import { LoginComponent } from 'app/login/login.component';
import { IndicateComponent } from 'app/indicate/indicate.component';
import { debounce } from 'lodash-decorators';

import * as fromStore from 'app/home/store';
import * as fromProfileStore from 'app/profile/store';
import * as _ from 'lodash';
import * as utilsFunctions from '@shared/utils';
import { Pagination } from '@models/pagination';
import { MoviesList } from '@models/movies-list';
import { FilterHome } from '@models/filter-home';
import { Profile } from '@models//profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  utils = utilsFunctions;
  loading$: Observable<boolean>;
  pagination$: Observable<Pagination>;
  moviesLoaded$: Observable<boolean>;
  moviesList$: Observable<Array<MoviesList>>;
  moviesList: Array<MoviesList>;
  userLogged$: Observable<Profile>;
  isLogged: boolean;

  msg = 'Nenhuma indicação encontrada';

  floatLabel = 'always';
  filterOpened: boolean;
  scollTopActive: boolean;
  isLoaded: boolean;

  categoryEnum = categories;
  categoryArray = _.keys(categories);
  rantingEnum = ratings;
  ratingArray = _.keys(ratings);

  filters: FilterHome = {
    search: '',
    exibition: 'all',
    ratings: ['UNMISSABLE', 'VERY_GOOD', 'GOOD', 'COOL', 'BAD', 'VERY_BAD', 'STAY_AWAY'],
    categories: ['MOVIE', 'SERIE'],
    currentPage: 1,
    lastPage: null
  };

  constructor(
    private store: Store<fromStore.HomeListState>,
    private profileStore: Store<fromProfileStore.ProfileState>,
    public dialog: MatDialog) {
    this.moviesList$ = this.store.pipe(select(fromStore.getHomeListResponse));
    this.moviesLoaded$ = this.store.pipe(select(fromStore.getHomeListLoaded));
    this.pagination$ = this.store.pipe(select(fromStore.getHomeListPagination));
    this.userLogged$ = this.profileStore.pipe(select(fromProfileStore.getProfile));
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadHomeList(this.filters));

    this.moviesList$.subscribe(result => {
      if (result.length > 0) {
        this.isLoaded = false;
        let totalLoaded = 0;
        result.map((r) => {
          const objImg = new Image();
          objImg.onload = () => {
            totalLoaded++;
            if (totalLoaded === result.length) {
              this.moviesList = result;
              this.isLoaded = true;
            }
          };

          objImg.src = r.poster_path;
        });
      } else {
        this.isLoaded = true;
      }
    });

    this.pagination$.subscribe(result => {
      if (result) {
        this.filters.currentPage = result.currentPage;
        this.filters.lastPage = result.lastPage;
      }
    });

    this.userLogged$.subscribe(result => {
      this.isLogged = result ? true : false;
    });
  }

  setExibition(exibition) {
    this.filters.exibition = exibition;
    this.updateList();
  }

  isRatingActive(rating) {
    return _.includes(this.filters.ratings, rating);
  }

  isCategoryActive(category) {
    return _.includes(this.filters.categories, category);
  }

  openDialog(urlIndication?): void {
    if (this.isLogged) {
      const dialogRef = this.dialog.open(IndicateComponent, {
        width: '90%',
        maxWidth: '700px',
        data: {url: urlIndication}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.isLoaded = false;
          this.moviesList = [];
          this.filters.currentPage = 1;
          this.filters.lastPage = null;
          this.store.dispatch(new fromStore.UpdateHomeList(this.filters));
        }
      });
    } else {
      const dialogRef = this.dialog.open(LoginComponent, {
        width: '90%',
        maxWidth: '400px',
        data: {tab: 0}
      });
    }
  }


  @debounce(800)
  updateList() {
    this.isLoaded = false;
    this.moviesList = [];
    this.filters.currentPage = 1;
    this.store.dispatch(new fromStore.UpdateHomeList(this.filters));
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

  updateCategoryFilter(tag) {
    if (_.includes(this.filters.categories, tag)) {
      if (this.filters.categories.length > 1) {
        this.filters.categories = _.remove(this.filters.categories, (n) => {
          return n !== tag;
        });
      }
    } else {
      this.filters.categories.push(tag);
    }

    this.updateList();
  }

  scollTop() {
    const header = document.getElementById('header');
    header.scrollIntoView();
  }

  @HostListener('document:scroll', ['$event'])
  onScroll($event) {
    this.scollTopActive = window.scrollY >= 100 ? true : false;
    if (((window.innerHeight + window.scrollY) > document.body.offsetHeight)
          && this.filters.currentPage < this.filters.lastPage
          && this.isLoaded) {
            this.isLoaded = false;
            this.filters.currentPage = this.filters.currentPage + 1;
            this.store.dispatch(new fromStore.LoadHomeList(this.filters));
    }
  }

}
