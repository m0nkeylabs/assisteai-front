import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { HomeService } from '@services/home.service';

import { ratings } from '@constants/ratings';
import { types } from '@constants/types';

import { IndicateComponent } from 'app/indicate/indicate.component';

import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  floatLabel = 'always';
  filterOpened = false;

  movies: Array<any>;

  typeEnum = types;
  typeArray = _.keys(types);
  rantingEnum = ratings;
  ratingArray = _.keys(ratings);

  filters: any = {
    search: '',
    exibition: 'all',
    ratings: ['UNMISSABLE', 'VERY_GOOD', 'GOOD', 'COOL', 'BAD', 'VERY_BAD', 'STAY_AWAY'],
    types: ['MOVIE', 'SERIE']
  };

  constructor(private homeService: HomeService, public dialog: MatDialog) { }

  ngOnInit() {
    this.homeService.getAllMoviesAndSeries().subscribe((result) => {
      this.movies = result;
    });
  }

  setExibition(exibition) {
    this.filters.exibition = exibition;
  }

  isRatingActive(rating) {
    return _.includes(this.filters.ratings, rating);
  }

  isTypeActive(type) {
    return _.includes(this.filters.types, type);
  }

  openDialog(urlIndication?): void {
    const dialogRef = this.dialog.open(IndicateComponent, {
      width: '90%',
      maxWidth: '700px',
      data: {url: urlIndication}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
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

}
