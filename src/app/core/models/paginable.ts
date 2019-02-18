export interface Paginable<T> {
  data: Array<T>;
  // Pagination
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string;
  prev_page_url: string;
  path: string;
}
