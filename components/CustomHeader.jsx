import {
  ImageBackground,
  SafeAreaView,
  View,
  StyleSheet,
  useWindowDimensions,
  Text,
  useColorScheme,
  Pressable,
} from "react-native";
import wool from "../assets/images/woolImage.jpg";
import blackValleylogo from "../assets/images/BlackValleylogo.png";
import { Colors } from "@/constants/Colors";
import { useRouter, useNavigation } from "expo-router";

export default function CustomHeader() {
  // const colorScheme = useColorScheme();
  // // const themeColors = Colors[colorScheme] || Colors.light;
  const router = useRouter();
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  const navigateAround = (path) => {
    navigation.navigate(path);
  };

  return (
    <SafeAreaView>
      <ImageBackground
        style={width > 750 ? styles.backgroundImage : styles.smallbackground}
        source={wool}
        resizeMode="cover">
        <View style={styles.logoContainer}>
          <ImageBackground
            source={blackValleylogo}
            style={width > 750 ? styles.logo : styles.smallLogo}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>
      <View style={styles.navbar}>
        <Pressable onPress={() => router.back("index")}>
          <Text style={styles.navbarText}>Black Valley</Text>
        </Pressable>

        <Pressable onPress={() => router.push("product")}>
          <Text style={styles.navbarText}>Produkter</Text>
        </Pressable>

        <Pressable onPress={() => router.push("material")}>
          <Text style={styles.navbarText}>Material</Text>
        </Pressable>

        <Pressable onPress={() => router.push("order")}>
          <Text style={styles.navbarText}>Beställ här</Text>
        </Pressable>

        <Pressable onPress={() => router.push("inspiration")}>
          <Text style={styles.navbarText}>Inspiration</Text>
        </Pressable>

        <Pressable onPress={() => navigateAround("(engTabs)")}>
          <Text style={styles.navbarText}>Eng</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
} // kolla upp link.

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: 160,
    justifyContent: "center",
  },
  smallbackground: {
    width: "100%",
    height: 100,
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    height: 130,
  },
  logoContainer: {
    alignContent: "center",
  },
  smallLogo: {
    width: "100%",
    height: 80,
  },
  navbar: {
    width: "100%",
    height: 50,
    backgroundColor: "#E8E8E9",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  navbarText: {
    fontSize: 25,
    textAlign: "center",
  },
});
