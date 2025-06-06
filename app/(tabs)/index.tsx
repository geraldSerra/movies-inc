import { fetchNowPlaying } from "@/api/movies";
import Logo from "@/components/atoms/Logo";
import MovieBanner from "@/components/molecules/MovieBanner";
import MovieList from "@/components/organisms/MovieList";
import { MovieType } from "@/types/movieType";
import Constants from "expo-constants";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<any>([]);

  const banner = nowPlaying[0];
  const nowPlatingWithOutBanner = nowPlaying.slice(1);

  const handleOnPress = (id: number) => {
    router.push({
      pathname: "/movie/[id]",
      params: { id: id },
    });
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await fetchNowPlaying();
        movies.sort((a: MovieType, b: MovieType) => {
          const titleA = a.title.toUpperCase();
          const titleB = b.title.toUpperCase();
          if (titleA < titleB) {
            return -1;
          }
          if (titleA > titleB) {
            return 1;
          }
          return 0;
        });
        setNowPlaying(movies);
      } catch (error) {
        console.error("Error", error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  if (loading) return <ActivityIndicator size="large" style={styles.loader} />;

  return (
    <ScrollView style={{ ...styles.container }}>
      <View style={styles.content}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <MovieBanner movie={banner} onPress={() => handleOnPress(banner.id)} />
        <MovieList
          title={"Now playing"}
          data={nowPlatingWithOutBanner}
          showFavorite
          showTitle
          showDate
          showRating
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loader: { flex: 1, justifyContent: "center" },
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    padding: 16,
    backgroundColor: "#000000",
  },
  content: {
    display: "flex",
    gap: 20,
    marginBottom: 60,
  },
  logo: {
    marginVertical: 20,
  },
});
