export function  getClassPoster(averageRating: string) {
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

export function getClassCategory(category) {
  let categoryClass: string;
  switch (category) {
    case 'MOVIE':
      categoryClass = 'category-movie';
      break;
    case 'SERIE':
      categoryClass = 'category-serie';
      break;
    default:
      break;
  }

  return categoryClass;
}
