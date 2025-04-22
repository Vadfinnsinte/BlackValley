import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

import Navstyles from "../StyleSheet/Navbar";
import wool from "../assets/images/woolImage.jpg";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import blackValleylogo from "../assets/images/BlackValleylogo.png";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header({ data }) {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
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
            <RxHamburgerMenu style={{ fontSize: 35 }} />
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
