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
import blackValleylogo from "../assets/images/BlackValleylogo.png";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function CustomHeader() {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const router = useRouter();
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const [isHoveredOrder, setIsHoveredOrder] = useState(false);
  const [isHoveredMaterail, setIsHoveredMaterail] = useState(false);

  const navigateAround = (path) => {
    navigation.navigate(path);
  };

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
          <Pressable onPress={() => router.push("")}>
            <Text style={styles.navbarText}>Black Valley</Text>
          </Pressable>

          <Pressable onPress={() => router.push("product")}>
            <Text style={styles.navbarText}>Produkter</Text>
          </Pressable>

          <View
            onMouseEnter={() => setIsHoveredMaterail(true)}
            style={styles.navbarText}>
            <Text style={styles.navbarText}>Material</Text>

            {isHoveredMaterail && (
              <View
                onMouseLeave={() => setIsHoveredMaterail(false)}
                style={styles.dropdown}>
                <Text
                  style={[
                    styles.navbarText,
                    isHoveredMaterail && { cursor: "pointer" },
                  ]}>
                  Material
                </Text>
                <View style={styles.innerDropdown}>
                  <Pressable
                    onPress={() => router.push("/materialWool")}
                    style={styles.dropdownItem}>
                    <Text
                      className="hover:underline"
                      style={styles.dropdownText}>
                      Ull
                    </Text>
                    <Text style={{ marginTop: -10 }}>Till täcke</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => router.push("/materialLeather")}
                    style={styles.dropdownItem}>
                    <Text
                      className="hover:underline"
                      style={styles.dropdownText}>
                      Läder
                    </Text>
                    <Text style={{ marginTop: -10 }}>Till halsband</Text>
                  </Pressable>
                </View>
              </View>
            )}
          </View>

          <View
            onMouseEnter={() => setIsHoveredOrder(true)}
            style={styles.navbarText}>
            <Text style={styles.navbarText}>Beställ</Text>

            {isHoveredOrder && (
              <View
                onMouseLeave={() => setIsHoveredOrder(false)}
                style={styles.dropdown}>
                <Text
                  style={[
                    styles.navbarText,
                    isHoveredOrder && { cursor: "pointer" },
                  ]}>
                  Beställ
                </Text>
                <View style={styles.innerDropdown}>
                  <Pressable
                    onPress={() => router.push("order")}
                    style={styles.dropdownItem}>
                    <Text
                      className="hover:underline"
                      style={styles.dropdownText}>
                      Beställ här
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => router.push("termsConditions")}
                    style={styles.dropdownItem}>
                    <Text
                      className="hover:underline"
                      style={styles.dropdownText}>
                      Köpvillkor
                    </Text>
                  </Pressable>
                </View>
              </View>
            )}
          </View>

          <Pressable onPress={() => router.push("inspiration")}>
            <Text style={styles.navbarText}>Inspiration</Text>
          </Pressable>

          <Pressable onPress={() => navigateAround("(engTabs)")}>
            <Text style={styles.navbarText}>Eng</Text>
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
    marginBottom: -10,
    justifyContent: "flex-end",
    zIndex: 20,
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
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: -5,
    left: "50%",
    transform: [{ translateX: -65 }],
    backgroundColor: "#E8E8E9",
    width: 130,
    paddingVertical: 5,
    zIndex: 10,
  },
  innerDropdown: {
    top: 8,
    borderColor: "black",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderTopWidth: 0,
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
  },
  dropdownText: {
    fontSize: 18,
    // textAlign: "center",
    paddingVertical: 5,
    color: "#000",
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});
