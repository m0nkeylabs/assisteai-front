import { Paginable } from '@models/paginable';
import { MoviesList } from '@models/movies-list';

export class Pagination {
  currentPage: number;
  from: number;
  lastPage?: number;
  perPage: number;
  firstPageUrl: string;
  lastPageUrl: string;
  nextPageUrl: string;
  prevPageUrl: string;
  path: string;

  constructor(response: Paginable<MoviesList>) {
    this.currentPage = response.current_page;
    this.from = response.from;
    this.lastPage = response.last_page;
    this.perPage = response.per_page;
    this.firstPageUrl = response.first_page_url;
    this.lastPageUrl = response.last_page_url;
    this.nextPageUrl = response.next_page_url;
    this.prevPageUrl = response.prev_page_url;
    this.path = response.path;
  }
}
