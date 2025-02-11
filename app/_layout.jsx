import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Colors } from "@/constants/Colors";
// Prevent the splash screen from auto-hiding before asset loading is complete.
import woolBg from "../assets/images/woolImage.jpg"

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const themeColors = Colors[colorScheme] || Colors.light;
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      {/* <ImageBackground source={woolBg} style={styles.imageBackground} resizeMode="cover">
        <View style={ themeColors.overlay }> */}
          <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="(engTabs)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="auto" />
          </ThemeProvider>
        {/* </View>
      </ImageBackground> */}
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },})
  