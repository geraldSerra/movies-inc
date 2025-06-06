import { MovieType } from "@/types/movieType";
import { render } from "@testing-library/react-native";
import MovieCard from "../MovieCard";

jest.mock("../../atoms/FavoriteButton", () => () => null);

jest.mock("react-native-vector-icons/FontAwesome", () => {
  return () => {
    return null;
  };
});

const movie: MovieType = {
  id: 1,
  title: "Inception",
  poster_path: "/inception.jpg",
  release_date: "2010-07-16",
  vote_average: 8.8,
  overview: "A mind-bending thriller.",
  credits: {
    cast: [],
  },
  recommendations: {
    results: [],
  },
};

describe("MovieCard", () => {
  it("displays the movie title", () => {
    const { getByText } = render(<MovieCard movie={movie} showTitle />);
    expect(getByText("Inception")).toBeTruthy();
  });

  it("displays the formatted release date", () => {
    const { getByText } = render(<MovieCard movie={movie} showDate />);
    expect(getByText("Jul 16, 2010")).toBeTruthy();
  });

  it("displays the rating with a star", () => {
    const { getByText } = render(<MovieCard movie={movie} showRating />);
    expect(getByText("8.8/10")).toBeTruthy();
  });
});
