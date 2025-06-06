import { Design } from "@/constants/Design";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ActorCard from "../molecules/ActorCard";

type CastListProps = {
  data: {
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
    order: number;
  }[];
};

const CastList = ({ data }: CastListProps) => {
  const filteredData = data.filter((actor: any) => actor.profile_path);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cast</Text>
      <FlatList
        data={filteredData}
        horizontal
        renderItem={({ item }) => (
          <ActorCard
            image={item.profile_path || ""}
            name={item.name}
            character={item.character}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
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
    color: Design.Colors.text,
    fontWeight: 600,
  },
  separator: {
    width: 10,
  },
});

export default CastList;
