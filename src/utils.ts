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

export const INITIAL_GENRE = 'All genres';

export const MOVIES_PER_PAGE = 8;


