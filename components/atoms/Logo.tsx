import { Image, StyleSheet } from "react-native";

const logo = require("../../assets/images/MoviesInc-logo.png");
const Logo = () => {
  return <Image source={logo} style={styles.logo} resizeMode="cover" />;
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    width: 130,
    height: 26,
  },
});
