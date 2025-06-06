import MovieCard from "@/components/molecules/MovieCard";
import { Design } from "@/constants/Design";
import { useFavorites } from "@/context/FavoriteContext";
import Constants from "expo-constants";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const FavoriteScreen = () => {
  const { favorites } = useFavorites();

  const handleOnPress = (id: number) => {
    router.push({
      pathname: "/movie/[id]",
      params: { id: id },
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Favorites</Text>
        {favorites.length ? (
          <View style={styles.list}>
            {favorites.map((item) => (
              <MovieCard
                key={item.id}
                variant="favorite"
                movie={item}
                showTitle
                showRating
                showFavorite
                onPress={() => handleOnPress(item.id)}
              />
            ))}
          </View>
        ) : (
          <Text style={styles.empty}>
            Add some movies to Favorites to see the list here
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    paddingHorizontal: 16,
    gap: 30,
    backgroundColor: "#000",
  },
  content: {
    marginTop: Constants.statusBarHeight + 10,
    marginBottom: 50,
    gap: 30,
  },
  title: {
    fontSize: 30,
    color: "#fff",
  },
  list: {
    display: "flex",
    gap: 15,
    maxWidth: "100%",
  },
  empty: {
    color: Design.Colors.subText,
    fontSize: 20,
    alignSelf: "center",
  },
});

export default FavoriteScreen;
