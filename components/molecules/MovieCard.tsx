import { MovieType } from "@/types/movieType";
import formatDate from "@/utils/formatDate";
import React from "react";
import {
  DimensionValue,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import FavoriteButton from "../atoms/FavoriteButton";

interface MovieCardProps {
  movie: MovieType;
  variant?: "default" | "favorite";
  width?: DimensionValue | undefined;
  height?: number;
  showTitle?: boolean;
  showDate?: boolean;
  showRating?: boolean;
  showFavorite?: boolean;
  onPress?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  variant = "default",
  onPress,
  showTitle = false,
  showDate = false,
  showRating = false,
  showFavorite = false,
}) => {
  const { title, poster_path, release_date, vote_average } = movie;

  const styles = getStyles(variant);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
        style={styles.image}
        resizeMode="cover"
      />
      <View
        style={
          showFavorite
            ? { ...styles.content }
            : { ...styles.content, height: "auto" }
        }
      >
        <View style={styles.info}>
          {showTitle && (
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
          )}
          {showDate && (
            <Text style={styles.date}>{formatDate(release_date)}</Text>
          )}
          {showRating && (
            <Text style={styles.rating}>
              {vote_average.toFixed(1)}
              {"/10"} <Icon name="star" size={14} color="#FFD700" />
            </Text>
          )}
        </View>
        {showFavorite && (
          <View style={styles.favorite}>
            <FavoriteButton variant="short" movie={movie} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const getStyles = (variant: MovieCardProps["variant"]) => {
  const favorite = variant === "favorite";

  return StyleSheet.create({
    container: {
      flexDirection: favorite ? "row" : "column",
      alignItems: favorite ? "center" : "flex-start",
      width: favorite ? "100%" : 160,
      overflow: "hidden",
    },
    content: {
      flex: favorite ? 1 : 0,
      width: favorite ? "auto" : "100%",
      height: 85,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    image: {
      width: favorite ? 150 : "100%",
      height: favorite ? 200 : 240,
      borderRadius: 12,
    },
    date: {
      color: "#777",
      fontSize: 12,
      fontWeight: "600",
    },
    info: {
      padding: 8,
      flexShrink: 2,
    },
    title: {
      color: "#fff",
      fontSize: 14,
      fontWeight: "600",
    },
    rating: {
      marginTop: 4,
      color: "#ffcc00",
      fontSize: 14,
    },
    favorite: {
      alignSelf: favorite ? "center" : "flex-end",
    },
  });
};

export default MovieCard;
