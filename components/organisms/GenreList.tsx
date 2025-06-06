import { Design } from "@/constants/Design";
import { StyleSheet, Text, View } from "react-native";

type Genre = {
  id: number;
  name: string;
};

type GenreProps = {
  genres: Genre[] | undefined;
};

const GenreList = ({ genres }: GenreProps) => {
  return (
    <View style={styles.container}>
      {genres?.map((genre: Genre) => (
        <Text style={styles.genre} key={genre.id}>
          {genre.name}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  genre: {
    textAlign: "center",
    backgroundColor: "#555",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    color: Design.Colors.text,
  },
});

export default GenreList;
