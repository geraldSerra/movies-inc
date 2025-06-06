import { Design } from "@/constants/Design";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MovieCard from "../molecules/MovieCard";

interface MovieListProps {
  title: string;
  data: any;
  showTitle?: boolean;
  showDate?: boolean;
  showRating?: boolean;
  showFavorite?: boolean;
}

const MovieList = ({
  title,
  data,
  showTitle = false,
  showDate = false,
  showRating = false,
  showFavorite = false,
}: MovieListProps) => {
  const router = useRouter();

  const handleOnPress = (id: number) => {
    router.push({
      pathname: "/movie/[id]",
      params: { id: id },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        horizontal
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() => handleOnPress(item.id)}
            showTitle={showTitle}
            showDate={showDate}
            showRating={showRating}
            showFavorite={showFavorite}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  title: {
    fontSize: Design.FontSize.title,
    color: Design.Colors.white,
    fontWeight: 600,
  },
  separator: {
    width: 20,
  },
});

export default MovieList;
