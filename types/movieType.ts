export type MovieType = {
  id: number;
  title: string;
  original_title?: string;
  poster_path: string | null;
  backdrop_path?: string | null;
  overview?: string;
  release_date: string;
  vote_average: number;
  vote_count?: number;
  genre_ids?: number[];
  genres?: { id: number; name: string }[];
  runtime?: number;
  tagline?: string;
  popularity?: number;
  adult?: boolean;
  original_language?: string;
  spoken_languages?: { name: string }[];
  credits: {
    cast: {
      id: number;
      name: string;
      character: string;
      profile_path: string | null;
      order: number;
    }[]
  };
  recommendations: {
    results: MovieType[];
  };
};
