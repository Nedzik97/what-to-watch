export const debounce = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number
): ((...args: T) => void) => {
  let timerId: NodeJS.Timeout;

  return (...args: T) => {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export const genres = ['All genres', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Action', 'Kids & Family', 'Romance', 'Adventure', 'Thrillers'];
export const ratingLevels = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'];

export const INITIAL_GENRE = 'All genres';

export const MOVIES_PER_PAGE = 8;

export const validateFormReview = (ratingReview: string | null, textReview: string | null) =>
  ratingReview !== null && textReview !== null
    ? ratingReview && textReview.length >= 50 && textReview.length <= 400
    : false;

