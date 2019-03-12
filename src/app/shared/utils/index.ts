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

export function  getClassCheckbox(option: string) {
  let ratingClass: string;
  switch (option) {
    case 'STAY_AWAY':
      ratingClass = 'checkbox-1';
      break;
    case 'VERY_BAD':
      ratingClass = 'checkbox-2';
      break;
    case 'BAD':
      ratingClass = 'checkbox-3';
      break;
    case 'COOL':
      ratingClass = 'checkbox-4';
      break;
    case 'GOOD':
      ratingClass = 'checkbox-5';
      break;
    case 'VERY_GOOD':
      ratingClass = 'checkbox-6';
      break;
    case 'UNMISSABLE':
      ratingClass = 'checkbox-7';
      break;
    case 'MOVIE':
      ratingClass = 'checkbox-movie';
      break;
    case 'SERIE':
      ratingClass = 'checkbox-serie';
      break;
    default:
      break;
  }

  return ratingClass;
}
