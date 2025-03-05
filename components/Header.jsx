import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  Pressable,
  useColorScheme,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Colors } from "@/constants/Colors";
import Navstyles from "../StyleSheet/Navbar";
import wool from "../assets/images/woolImage.jpg";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import blackValleylogo from "../assets/images/BlackValleylogo.png";

export default function Header({ data }) {
  const { width } = useWindowDimensions();
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const themeColors = Colors[colorScheme] || Colors.light;
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (width > 800) {
    return (
      <SafeAreaView>
        <ImageBackground
          style={
            width > 750 ? Navstyles.backgroundImage : Navstyles.smallbackground
          }
          source={wool}
          resizeMode="cover">
          <View style={Navstyles.logoContainer}>
            <ImageBackground
              source={blackValleylogo}
              style={Navstyles.logo}
              resizeMode="contain"
            />
          </View>
        </ImageBackground>

        <View style={Navstyles.navbar}>
          {data.map((link, index) => (
            <View
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}>
              <Pressable onPress={() => link.path && router.push(link.path)}>
                <Text
                  style={[
                    Navstyles.navbarText,
                    link.title === "Black Valley" &&
                      hoveredIndex === index && {
                        opacity: 0,
                      },
                  ]}>
                  {link.title}
                </Text>
              </Pressable>
              {hoveredIndex === index && link.submenu && (
                <View
                  style={[
                    Navstyles.dropdown,
                    { width: width < 1000 ? 150 : 200 },
                  ]}>
                  <Text
                    style={[
                      Navstyles.navbarText,
                      hoveredIndex && { opacity: 0 },
                    ]}>
                    {link.title}
                  </Text>
                  <View style={Navstyles.innerDropdown}>
                    {link.submenu.map((sub, subIndex) => (
                      <Pressable
                        key={subIndex}
                        onPress={() => router.push(sub.path)}
                        style={Navstyles.dropdownItem}>
                        <Text style={Navstyles.dropdownText}>{sub.title}</Text>
                      </Pressable>
                    ))}
                  </View>
                </View>
              )}
            </View>
          ))}
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <ImageBackground
        style={
          width > 750 ? Navstyles.backgroundImage : Navstyles.smallbackground
        }
        source={wool}
        resizeMode="cover">
        <View style={Navstyles.logoContainer}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={Navstyles.menuButton}>
            <Ionicons name="menu" size={40} color={themeColors.hamburgerIcon} />
          </TouchableOpacity>
          <ImageBackground
            source={blackValleylogo}
            style={width > 750 ? Navstyles.logo : Navstyles.smallLogo}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>
    );
  }
}
