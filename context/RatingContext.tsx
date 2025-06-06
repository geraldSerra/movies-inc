import React, { createContext, useContext, useState } from "react";

type RatingMap = {
  [movieId: number]: number;
};

type RatingsContextType = {
  ratings: RatingMap;
  ratingMovie: (movieId: number, rating: number) => void;
};

const RatingsContext = createContext<RatingsContextType | undefined>(undefined);

export const RatingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [ratings, setRatings] = useState<RatingMap>({});

  const ratingMovie = (movieId: number, rating: number) => {
    setRatings((prev) => ({ ...prev, [movieId]: rating }));
  };

  return (
    <RatingsContext.Provider value={{ ratings, ratingMovie }}>
      {children}
    </RatingsContext.Provider>
  );
};

export const useRatings = () => {
  const context = useContext(RatingsContext);
  if (!context) {
    throw new Error("useRatings should be use inside RatingsProvider");
  }
  return context;
};
