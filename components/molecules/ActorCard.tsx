import { Design } from "@/constants/Design";
import { Image, StyleSheet, Text, View } from "react-native";

type ActorCardProps = {
  image: string;
  name: string;
  character: string;
};

const ActorCard = ({ image, name, character }: ActorCardProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${image}`,
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
      <Text style={styles.character} numberOfLines={1}>
        {character}
      </Text>
    </View>
  );
};

export default ActorCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    width: 80,
    gap: 2,
  },
  image: { width: 60, height: 60, borderRadius: 30 },
  name: {
    fontSize: Design.FontSize.small,
    fontWeight: 600,
    color: Design.Colors.text,
  },
  character: {
    fontSize: Design.FontSize.small,
    color: Design.Colors.subText,
  },
});
