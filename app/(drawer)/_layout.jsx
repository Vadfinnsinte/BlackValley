import { View, Text, StyleSheet, Image, useColorScheme, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import "../../global.css";
import { router, usePathname } from "expo-router";
import { Colors } from "../../constants/Colors";
import woolBg from "../../assets/images/woolImage.jpg"
SplashScreen.preventAutoHideAsync();

const CustomDrawerContent = (props) => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;

  const pathname = usePathname();
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenuOrder, setShowSubMenuOrder] = useState(false);
  const [eng, setEng] = useState(false);

  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={!eng ? "Hem" : "Home"}
        labelStyle={[
          styles.navItemLabel,
          {
            color:
              pathname == "/" || pathname == "/home"
                ? themeColors.hamburgerTextActive
                : themeColors.hamburgerText,
          },
        ]}
        style={{
          backgroundColor:
            pathname == "/" || pathname == "/home"
              ? "#333"
              : themeColors.background,
        }}
        onPress={() => {
          if (!eng) {
            router.push("/");
          } else {
            router.push("/home");
          }
        }}
      />
      <DrawerItem
        label={!eng ? "Inspiration" : "Inspiration"}
        labelStyle={[
          styles.navItemLabel,
          {
            color:
              pathname == "/inspiration" || pathname == "/inspirationEng"
                ? themeColors.hamburgerTextActive
                : themeColors.hamburgerText,
          },
        ]}
        style={{
          backgroundColor:
            pathname == "/inspiration" || pathname == "/inspirationEng"
              ? "#333"
              : themeColors.background,
        }}
        onPress={() => {
          if (!eng) {
            router.push("/inspiration");
          } else {
            router.push("/inspirationEng");
          }
        }}
      />
      <DrawerItem
        label={!eng ? "Material" : "Material"}
        labelStyle={[
          styles.navItemLabel,
          {
            color:
              pathname == "/material" || pathname == "/materialEng"
                ? themeColors.hamburgerTextActive
                : themeColors.hamburgerText,
          },
        ]}
        style={{
          backgroundColor:
            pathname == "/material" || pathname == "/materialEng"
              ? "#333"
              : themeColors.background,
        }}
        onPress={() => setShowSubMenu(!showSubMenu)}
      />
      {showSubMenu && (
        <View>
          <DrawerItem
            label={eng ? "Wool for dog coats" : "Ull till täcke"}
            labelStyle={[
              styles.navItemLabelsmall,
              {
                color:
                  pathname == "/materialWool" || pathname == "/materialWoolEng"
                    ? themeColors.hamburgerTextActive
                    : themeColors.hamburgerText,
              },
            ]}
            style={{
              backgroundColor:
                pathname == "/materialWool" || pathname == "/materialWoolEng"
                  ? "#333"
                  : themeColors.background,
            }}
            onPress={() => {
              if (!eng) {
                router.push("/materialWool");
              } else {
                router.push("/materialWoolEng");
              }
            }}
          />
          <DrawerItem
            label={eng ? "Leather for collars" : "Läder till halsband"}
            labelStyle={[
              styles.navItemLabelsmall,
              {
                color:
                  pathname == "/materialLeather" ||
                  pathname == "/materialLeatherEng"
                    ? themeColors.hamburgerTextActive
                    : themeColors.hamburgerText,
              },
            ]}
            style={{
              backgroundColor:
                pathname == "/materialLeather" ||
                pathname == "/materialLeatherEng"
                  ? "#333"
                  : themeColors.background,
            }}
            onPress={() => {
              if (!eng) {
                router.push("/materialLeather");
              } else {
                router.push("/materialLeatherEng");
              }
            }}
          />
        </View>
      )}

      <DrawerItem
        label={!eng ? "Produkt" : "Product"}
        labelStyle={[
          styles.navItemLabel,
          {
            color:
              pathname == "/product" || pathname == "/productEng"
                ? themeColors.hamburgerTextActive
                : themeColors.hamburgerText,
          },
        ]}
        style={{
          backgroundColor:
            pathname == "/product" || pathname == "/productEng"
              ? "#333"
              : themeColors.background,
        }}
        onPress={() => {
          if (!eng) {
            router.push("/product");
          } else {
            router.push("/productEng");
          }
        }}
      />
      <DrawerItem
        label={!eng ? "Beställ" : "Order"}
        labelStyle={[
          styles.navItemLabel,
          {
            color:
              pathname == "/order" || pathname == "/orderEng"
                ? themeColors.hamburgerTextActive
                : themeColors.hamburgerText,
          },
        ]}
        onPress={() => setShowSubMenuOrder(!showSubMenuOrder)}
      />
      {showSubMenuOrder && (
        <View>
          <DrawerItem
            label={eng ? "Place Order" : "Lägg Beställning"}
            labelStyle={[
              styles.navItemLabelsmall,
              {
                color:
                  pathname == "/order" || pathname == "/orderEng"
                    ? themeColors.hamburgerTextActive
                    : themeColors.hamburgerText,
              },
            ]}
            style={{
              backgroundColor:
                pathname == "/order" || pathname == "/orderEng"
                  ? "#333"
                  : themeColors.background,
            }}
            onPress={() => {
              if (!eng) {
                router.push("/order");
              } else {
                router.push("/orderEng");
              }
            }}
          />
          <DrawerItem
            label={eng ? "Tearms And Conditions" : "Köpvilkor"}
            labelStyle={[
              styles.navItemLabelsmall,
              {
                color:
                  pathname == "/TermsConditions" ||
                  pathname == "/TermsConditionsEng"
                    ? themeColors.hamburgerTextActive
                    : themeColors.hamburgerText,
              },
            ]}
            style={{
              backgroundColor:
                pathname == "/TermsConditions" ||
                pathname == "/TermsConditionsEng"
                  ? "#333"
                  : themeColors.background,
            }}
            onPress={() => {
              if (!eng) {
                router.push("/termsConditions");
              } else {
                router.push("/termsConditionsEng");
              }
            }}
          />
        </View>
      )}
      <DrawerItem
        label={!eng ? "Eng" : "Swe"}
        labelStyle={[styles.navItemLabel, { color: themeColors.hamburgerText }]}
        onPress={() => {
          if (!eng) {
            setEng(true);
            router.push("/home");
          } else {
            setEng(false);
            router.push("/");
          }
        }}
      />
    
    </DrawerContentScrollView>
  );
};

export default function Layout() {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;

  return (
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: themeColors.background,
          },
        }}>
 
      </Drawer>
  );
}

const styles = StyleSheet.create({
  navItemLabel: {
    marginLeft: 20,
    fontSize: 18,
  },
  imageBackground: {
    flex: 1,
  },
  navItemLabelsmall: {
    marginLeft: 40,
    fontSize: 16,
  },
  userInfoWrapper: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});
