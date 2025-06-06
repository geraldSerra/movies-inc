import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet } from "react-native";

interface BackDropProps {
  backdropPath: string;
}

const BackDrop = ({ backdropPath }: BackDropProps) => {
  return (
    <>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${backdropPath}`,
        }}
        style={styles.backdrop}
      />
      {/* <View style={styles.filler}></View> */}
      <BlurView style={styles.blur} tint="dark" intensity={20} />
      <LinearGradient
        colors={[
          "transparent",
          "rgba(0,0,0,0.3)",
          "rgba(0,0,0,0.4)",
          "rgba(0,0,0,0.5)",
          "black",
          "black",
        ]}
        style={styles.gradient}
      />
    </>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
    height: 620,
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
  },
  filler: {
    height: 200,
    width: "100%",
    backgroundColor: "#000",
    position: "absolute",
    bottom: 0,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 1200,
  },
});

export default BackDrop;
