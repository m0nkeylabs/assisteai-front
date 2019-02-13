import { Component, OnInit } from '@angular/core';

import { HomeService } from '@services/home.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  floatLabel = 'always';
  filterOpened = false;

  movies: Array<any> = [];
  types: Array<any> = [
    {label: 'Filme' , tag: 'movie'},
    {label: 'Série' , tag: 'serie'}
  ];
  ratings: Array<any> = [
    {label: 'Imperdível' , tag: 'imperdivel'},
    {label: 'Muito Bom' , tag: 'mt-bom'},
    {label: 'Bom' , tag: 'bom'},
    {label: 'Legal' , tag: 'legal'},
    {label: 'Ruinzinho' , tag: 'ruinzinho'},
    {label: 'Muito Ruim' , tag: 'mt-ruim'},
    {label: 'Fique Longe' , tag: 'fq-longe'},
  ];
  filters: any = {
    search: '',
    exibition: 'all',
    ratings: ['imperdivel', 'mt-bom', 'bom', 'legal', 'ruinzinho', 'mt-ruim', 'fq-longe'],
    types: ['movie', 'serie']
  };

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getAllMoviesAndSeries().subscribe((result) => {
      this.movies = result;
    });
  }

  setExibition(exibition) {
    this.filters.exibition = exibition;
  }

  isRatingActive(tag) {
    return _.includes(this.filters.ratings, tag);
  }

  isTypeActive(tag) {
    return _.includes(this.filters.types, tag);
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
      case 'Fique Longe':
        ratingClass = 'rating-1';
        break;
      case 'Muito Ruim':
        ratingClass = 'rating-2';
        break;
      case 'Ruinzinho':
        ratingClass = 'rating-3';
        break;
      case 'Legal':
        ratingClass = 'rating-4';
        break;
      case 'Bom':
        ratingClass = 'rating-5';
        break;
      case 'Muito Bom':
        ratingClass = 'rating-6';
        break;
      case 'Imperdível':
        ratingClass = 'rating-7';
        break;
      default:
        ratingClass = '';
        break;
    }

    return ratingClass;
  }

  getClassType(type) {
    let typeClass: string;
    switch (type) {
      case 'Filme':
        typeClass = 'type-movie';
        break;
      case 'Série':
        typeClass = 'type-serie';
        break;
      default:
        typeClass = '';
        break;
    }

    return typeClass;
  }

}
