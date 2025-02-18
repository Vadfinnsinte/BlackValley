import { View, Text, StyleSheet, Image, useColorScheme } from "react-native";
import React, { useEffect, useState } from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import "../../global.css";
import { router, usePathname } from "expo-router";
import { Colors } from "../../constants/Colors";

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
    if (pathname.includes("Eng")) {
      setEng(true);
    } else {
      setEng(false);
    }
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
              pathname == "/" || pathname == "/indexEng"
                ? themeColors.hamburgerTextActive
                : themeColors.hamburgerText,
          },
        ]}
        style={{
          backgroundColor:
            pathname == "/" || pathname == "/indexEng"
              ? "#333"
              : themeColors.background,
        }}
        onPress={() => {
          if (!eng) {
            router.push("/");
          } else {
            router.push("/indexEng");
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
            label={!eng ? "Ull till täcke" : "Wool for dog coats"}
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
            label={!eng ? "Läder till halsband" : "Leather for collars"}
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
        // style={{
        //   backgroundColor:
        //     pathname == "/order" || pathname == "/orderEng"
        //       ? "#333"
        //       : themeColors.background,
        // }}
        onPress={() => setShowSubMenuOrder(!showSubMenuOrder)}
      />
      {showSubMenuOrder && (
        <View>
          <DrawerItem
            label={!eng ? "Beställ här" : "Place Order"}
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
            label={!eng ? "Köpvilkor" : "Tearms And Conditions"}
            labelStyle={[
              styles.navItemLabelsmall,
              {
                color:
                  pathname == "/termsConditions" ||
                  pathname == "/termsConditionsEng"
                    ? themeColors.hamburgerTextActive
                    : themeColors.hamburgerText,
              },
            ]}
            style={{
              backgroundColor:
                pathname == "/termsConditions" ||
                pathname == "/termsConditionsEng"
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
            router.push("/indexEng");
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
      {/* <Drawer.Screen name="favourites" options={{ headerShown: true }} />
      <Drawer.Screen name="settings" options={{ headerShown: true }} /> */}
    </Drawer>
  );
}

const styles = StyleSheet.create({
  navItemLabel: {
    marginLeft: 20,
    fontSize: 18,
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
