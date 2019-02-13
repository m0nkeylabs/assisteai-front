import { Component, OnInit } from '@angular/core';

import { HomeService } from '@services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Array<any> = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getAllMoviesAndSeries().subscribe((result) => {
      this.movies = result;
    });
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

  getClassCategory(category) {
    let categoryClass: string;
    switch (category) {
      case 'Filme':
        categoryClass = 'category-movie';
        break;
      case 'Série':
        categoryClass = 'category-serie';
        break;
      default:
        categoryClass = '';
        break;
    }

    return categoryClass;
  }

}
