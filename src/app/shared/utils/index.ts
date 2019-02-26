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

export function getClassType(type) {
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
