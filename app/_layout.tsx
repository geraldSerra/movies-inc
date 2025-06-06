import { FavoritesProvider } from "@/context/FavoriteContext";
import { RatingsProvider } from "@/context/RatingContext";
import { SessionProvider } from "@/context/SessionContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SessionProvider>
      <FavoritesProvider>
        <RatingsProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="movie/[id]" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="light" translucent backgroundColor="#000" />
        </RatingsProvider>
      </FavoritesProvider>
    </SessionProvider>
  );
}
