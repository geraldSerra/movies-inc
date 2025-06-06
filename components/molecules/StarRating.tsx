import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type StarRatingProps = {
  rating: number;
  maxStars?: number;
  onChange?: (rating: number) => void;
  size?: number;
  disabled?: boolean;
};

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  onChange,
  size = 28,
  disabled = false,
}) => {
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    const isFilled = i <= rating;

    stars.push(
      <Pressable
        key={i}
        disabled={disabled}
        onPress={() => !disabled && onChange?.(i)}
        hitSlop={8}
      >
        <Icon
          name={isFilled ? "star" : "star-o"}
          size={size}
          color={isFilled ? "#FFD700" : "#666"}
          style={styles.star}
        />
      </Pressable>
    );
  }

  return <View style={styles.container}>{stars}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
    paddingVertical: 8,
  },
  star: {
    marginHorizontal: 2,
  },
});
