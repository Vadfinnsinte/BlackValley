import {
  ImageBackground,
  SafeAreaView,
  View,
  StyleSheet,
  useWindowDimensions,
  Text,
  useColorScheme,
  TouchableOpacity,
  Pressable,
} from "react-native";
import wool from "../assets/images/woolImage.jpg";
import { Ionicons } from "@expo/vector-icons";
import blackValleylogo from "../assets/images/BlackValleylogo.png";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export default function CustomHeaderEng() {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const router = useRouter();
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  //   const navigateAround = (path) => {
  //     navigation.navigate(path);
  //   };
  if (width > 750) {
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
          <Pressable onPress={() => router.push("home")}>
            <Text style={styles.navbarText}>Black Valley</Text>
          </Pressable>

          <Pressable onPress={() => router.push("productEng")}>
            <Text style={styles.navbarText}>Products</Text>
          </Pressable>

          <Pressable onPress={() => router.push("materialEng")}>
            <Text style={styles.navbarText}>Material</Text>
          </Pressable>

          <Pressable onPress={() => router.push("orderEng")}>
            <Text style={styles.navbarText}>Order here</Text>
          </Pressable>

          <Pressable onPress={() => router.push("inspirationEng")}>
            <Text style={styles.navbarText}>Inspiration</Text>
          </Pressable>

          <Pressable onPress={() => router.push("")}>
            <Text style={styles.navbarText}>Swe</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <ImageBackground
        style={width > 750 ? styles.backgroundImage : styles.smallbackground}
        source={wool}
        resizeMode="cover">
        <View style={styles.logoContainer}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={styles.menuButton}>
            <Ionicons name="menu" size={40} color={themeColors.hamburgerIcon} />
          </TouchableOpacity>
          <ImageBackground
            source={blackValleylogo}
            style={width > 750 ? styles.logo : styles.smallLogo}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>
    );
  }
}

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
    marginBottom: -5,
    flexDirection: "row",
  },
  menuButton: {
    // alignSelf: "start",
    zIndex: 20,
    marginBottom: -10,
    justifyContent: "flex-end",
  },
  smallLogo: {
    width: "100%",
    height: 80,
    // marginTop: 40,
    marginLeft: -40,
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
