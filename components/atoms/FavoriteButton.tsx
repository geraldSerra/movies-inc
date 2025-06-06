import { MovieType } from "@/types/movieType";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { useFavorites } from "../../context/FavoriteContext";

type FavoriteButtonProps = {
  variant?: "default" | "short";
  movie: MovieType;
  style?: ViewStyle;
};

const FavoriteButton = ({
  movie,
  variant = "default",
  style,
}: FavoriteButtonProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  const short = variant === "short";
  let propsStyles = { ...style };
  if (short) {
    propsStyles = { ...styles, borderWidth: 0 };
  }

  return (
    <TouchableOpacity
      style={{ ...styles.container, ...propsStyles }}
      onPress={() => toggleFavorite(movie)}
    >
      <AntDesign
        name={isFavorite(movie.id) ? "heart" : "hearto"}
        size={18}
        color="#fff"
      />
      {!short && <Text style={styles.text}>Favorite</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    padding: 8,
    borderRadius: 20,
    gap: 5,
  },
  text: { color: "#fff" },
});

export default FavoriteButton;
