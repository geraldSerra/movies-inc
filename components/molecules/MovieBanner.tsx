import { Design } from "@/constants/Design";
import { MovieType } from "@/types/movieType";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FavoriteButton from "../atoms/FavoriteButton";

type MovieBannerProps = {
  movie: MovieType;
  onPress?: () => void;
};

const MovieBanner = ({ movie, onPress }: MovieBannerProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.image}
        resizeMode="cover"
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.7)", "black"]}
        style={styles.gradient}
      />
      <View style={styles.actions}>
        <View style={styles.details}>
          <Text style={styles.text}>See Details</Text>
        </View>
        <FavoriteButton movie={movie} style={{ flex: 1, borderRadius: 5 }} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 450,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 10,
    opacity: 0.9,
  },
  gradient: {
    position: "absolute",
    borderRadius: 10,
    bottom: 0,
    left: 0,
    right: 0,
    height: 250,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    height: 40,
    position: "relative",
    bottom: 50,
    paddingHorizontal: 10,
    gap: 10,
  },
  details: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    flex: 1,
    borderRadius: 5,
    backgroundColor: Design.Colors.accent,
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
  },
});

export default MovieBanner;
