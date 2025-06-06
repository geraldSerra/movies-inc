import { TMDB_API_KEY, TMDB_BASE_URL } from "@/config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
    language: "en-US",
  },
});

export const fetchNowPlaying = async () => {
  const response = await axiosInstance.get("/movie/now_playing", {
    params: { page: 1 },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId: number) => {
  const response = await axiosInstance.get(`/movie/${movieId}`, {
    params: { append_to_response: "credits,recommendations" },
  });
  return response.data;
};

export const rateMovie = async (
  movieId: number,
  rating: number,
  guestSessionId: string
) => {
  const response = await axiosInstance.post(
    `/movie/${movieId}/rating`,
    { value: rating },
    {
      params: { guest_session_id: guestSessionId },
      headers: { "Content-Type": "application/json;charset=utf-8" },
    }
  );
  return response.data;
};

export const createGuestSession = async () => {
  const response = await axiosInstance.get("/authentication/guest_session/new");
  return response.data.guest_session_id;
};

export const getAccountState = async (
  movieId: number,
  guestSessionId: string
) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/account_states`,
    {
      params: {
        guest_session_id: guestSessionId,
      },
    }
  );
  return res.data;
};
