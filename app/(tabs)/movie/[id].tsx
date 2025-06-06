import BackDrop from "@/components/atoms/BackDrop";
import FavoriteButton from "@/components/atoms/FavoriteButton";
import { StarRating } from "@/components/molecules/StarRating";
import CastList from "@/components/organisms/CastList";
import GenreList from "@/components/organisms/GenreList";
import MovieList from "@/components/organisms/MovieList";
import { Design } from "@/constants/Design";
import { useRatings } from "@/context/RatingContext";
import { useSession } from "@/context/SessionContext";
import { MovieType } from "@/types/movieType";
import formatMinutes from "@/utils/formatMinutes";
import Constants from "expo-constants";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { fetchMovieDetails, rateMovie } from "../../../api/movies";

export default function MovieDetailsScreen() {
  const { id } = useLocalSearchParams();
  const { guestSessionId } = useSession();
  const { ratings, ratingMovie } = useRatings();
  const [movie, setMovie] = useState<MovieType | null>(null);

  const currentRating = ratings[+id] || 0;

  const handleRate = async (rate: number) => {
    if (!movie) return;
    try {
      ratingMovie(+id, rate);
      const result = await rateMovie(movie.id, rate * 2, guestSessionId);

      if (result.status_code === 1) {
        Alert.alert(
          result.status_message,
          "The movie was rated successfully in TMDB data base"
        );
      } else if (result.status_code === 12) {
        Alert.alert(
          result.status_message,
          "You can see the new record reflected in TMDB"
        );
      }
    } catch (error) {
      Alert.alert("Error");
    }
  };

  useEffect(() => {
    if (id) {
      fetchMovieDetails(+id).then(setMovie);
    }
  }, [guestSessionId, id]);

  return (
    <>
      {movie ? (
        <>
          <BackDrop backdropPath={movie.backdrop_path || ""} />
          <ScrollView style={styles.container}>
            <View style={styles.details}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }}
                style={styles.image}
              />
              <Text style={styles.title}>{movie.title}</Text>
              <View style={styles.info}>
                <GenreList genres={movie?.genres} />
                <View>
                  <Text style={styles.info}>
                    {movie.release_date.slice(0, 4)}
                    {"   "}•{"   "}
                    {formatMinutes(movie.runtime || 0)}
                    {"   "}•{"   "}
                    {movie.vote_average.toFixed(1)}
                    {"/10"} <Icon name={"star"} size={12} color={"fff"} />
                  </Text>
                </View>
              </View>
              <View style={styles.actions}>
                <StarRating rating={currentRating} onChange={handleRate} />
                <FavoriteButton movie={movie}/>
              </View>
              <Text style={styles.overview}>{movie.overview}</Text>
            </View>
            <View style={styles.cast}>
              <CastList data={movie.credits.cast} />
            </View>
            <View style={styles.recommendations}>
              <MovieList
                title={"Recommended movies"}
                data={movie.recommendations.results}
              />
            </View>
          </ScrollView>
        </>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: Constants.statusBarHeight,
    gap: 20,
  },
  info: {
    display: "flex",
    alignItems: "center",
    fontSize: Design.FontSize.regular,
    color: Design.Colors.subText,
    marginTop: 8,
  },
  image: { width: 200, height: 300, borderRadius: 12 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: Design.Colors.text,
  },
  overview: { fontSize: 14, color: "#ccc" },
  details: {
    display: "flex",
    marginTop: 100,
    paddingHorizontal: 20,
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  actions: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    gap: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  cast: {
    marginLeft: 20,
    marginBottom: 20,
  },
  recommendations: {
    marginLeft: 20,
    marginBottom: 20,
  },
});
