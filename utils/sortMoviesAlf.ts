import { MovieType } from "@/types/movieType";

const sortMoviesAlf = (movies: MovieType[]) => {
  const newArray = [...movies];

  newArray.sort((a: MovieType, b: MovieType) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });

  return newArray;
};

export default sortMoviesAlf;
