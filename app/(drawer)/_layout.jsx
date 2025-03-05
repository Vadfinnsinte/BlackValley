import { View, StyleSheet, useColorScheme } from "react-native";
import React, { useEffect, useState } from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import "../../global.css";
import { router, usePathname } from "expo-router";
import { Colors } from "../../constants/Colors";
SplashScreen.preventAutoHideAsync();

export const CustomDrawerContent = (props) => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);

  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

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
        label={"Black Valley"}
        labelStyle={[
          styles.navItemLabel,
          {
            color: themeColors.hamburgerText,
          },
        ]}
        onPress={() => toggleMenu("home")}
      />
      {activeMenu === "home" && (
        <View>
          <DrawerItem
            label={"Hem"}
            labelStyle={[
              styles.navItemLabelsmall,
              {
                color:
                  pathname == "/"
                    ? themeColors.hamburgerTextActive
                    : themeColors.hamburgerText,
              },
            ]}
            style={{
              backgroundColor:
                pathname == "/" ? "#333" : themeColors.background,
            }}
            onPress={() => {
              router.push("/");
            }}
          />
          <DrawerItem
            label={"Kontakt"}
            labelStyle={[
              styles.navItemLabelsmall,
              {
                color:
                  pathname == "/contact"
                    ? themeColors.hamburgerTextActive
                    : themeColors.hamburgerText,
              },
            ]}
            style={{
              backgroundColor:
                pathname == "/contact" ? "#333" : themeColors.background,
            }}
            onPress={() => {
              router.push("/contact");
            }}
          />
        </View>
      )}
      <DrawerItem
        label={"Modeller"}
        labelStyle={[
          styles.navItemLabel,
          {
            color: themeColors.hamburgerText,
          },
        ]}
        style={{
          backgroundColor:
            pathname == "/product" ? "#333" : themeColors.background,
        }}
        onPress={() => toggleMenu("models")}
      />
      {activeMenu === "models" && (
        <View>
          <DrawerItem
            label={"Halsband och koppel"}
            labelStyle={[
              styles.navItemLabelsmall,
              {
                color:
                  pathname == "/collarLeashModels"
                    ? themeColors.hamburgerTextActive
                    : themeColors.hamburgerText,
              },
            ]}
            style={{
              backgroundColor:
                pathname == "/collarLeashModels"
                  ? "#333"
                  : themeColors.background,
            }}
            onPress={() => {
              router.push("/collarLeashModels");
            }}
          />
          <DrawerItem
            label={"Täcken"}
            labelStyle={[
              styles.navItemLabelsmall,
              {
                color:
                  pathname == "/coatModels"
                    ? themeColors.hamburgerTextActive
                    : themeColors.hamburgerText,
              },
            ]}
            style={{
              backgroundColor:
                pathname == "/coatModels" ? "#333" : themeColors.background,
            }}
            onPress={() => {
              router.push("/coatModels");
            }}
          />
          <DrawerItem
            label={"Mätinstruktioner"}
            labelStyle={[
              styles.navItemLabelsmall,
              {
                color:
                  pathname == "/instructions"
                    ? themeColors.hamburgerTextActive
                    : themeColors.hamburgerText,
              },
            ]}
            style={{
              backgroundColor:
                pathname == "/instructions" ? "#333" : themeColors.background,
            }}
            onPress={() => {
              router.push("/instructions");
            }}
          />
        </View>
      )}

      <DrawerItem
        label={"Material"}
        labelStyle={[
          styles.navItemLabel,
          {
            color: themeColors.hamburgerText,
          },
        ]}
        style={{
          backgroundColor: themeColors.background,
        }}
        onPress={() => toggleMenu("material")}
      />
      {activeMenu === "material" && (
        <View>
          <DrawerItem
            label={"Ull till täcke"}
            labelStyle={[
              styles.navItemLabelsmall,
              {
                color:
                  pathname == "/materialWool"
                    ? themeColors.hamburgerTextActive
                    : themeColors.hamburgerText,
              },
            ]}
            style={{
              backgroundColor:
                pathname == "/materialWool" ? "#333" : themeColors.background,
            }}
            onPress={() => {
              router.push("/materialWool");
            }}
          />
          <DrawerItem
            label={"Läder till halsband"}
            labelStyle={[
              styles.navItemLabelsmall,
              {
                color:
                  pathname == "/materialLeather"
                    ? themeColors.hamburgerTextActive
                    : themeColors.hamburgerText,
              },
            ]}
            style={{
              backgroundColor:
                pathname == "/materialLeather"
                  ? "#333"
                  : themeColors.background,
            }}
            onPress={() => {
              router.push("/materialLeather");
            }}
          />
          <DrawerItem
            label={"Tillbehör och font"}
            labelStyle={[
              styles.navItemLabelsmall,
              {
                color:
                  pathname == "/materialOther"
                    ? themeColors.hamburgerTextActive
                    : themeColors.hamburgerText,
              },
            ]}
            style={{
              backgroundColor:
                pathname == "/materialOther" || pathname == "/materialOtherEng"
                  ? "#333"
                  : themeColors.background,
            }}
            onPress={() => {
              router.push("/materialOther");
            }}
          />
        </View>
      )}
      <DrawerItem
        label={"Beställ"}
        labelStyle={[
          styles.navItemLabel,
          {
            color: themeColors.hamburgerText,
          },
        ]}
        onPress={() => toggleMenu("order")}
      />
      {activeMenu === "order" && (
        <View>
          <DrawerItem
            label={"Beställ här"}
            labelStyle={[
              styles.navItemLabelsmall,
              {
                color:
                  pathname == "/order"
                    ? themeColors.hamburgerTextActive
                    : themeColors.hamburgerText,
              },
            ]}
            style={{
              backgroundColor:
                pathname == "/order" ? "#333" : themeColors.background,
            }}
            onPress={() => {
              router.push("/order");
            }}
          />
          <DrawerItem
            label={"Köpvilkor"}
            labelStyle={[
              styles.navItemLabelsmall,
              {
                color:
                  pathname == "/termsConditions"
                    ? themeColors.hamburgerTextActive
                    : themeColors.hamburgerText,
              },
            ]}
            style={{
              backgroundColor:
                pathname == "/termsConditions"
                  ? "#333"
                  : themeColors.background,
            }}
            onPress={() => {
              router.push("/termsConditions");
            }}
          />
        </View>
      )}
      <DrawerItem
        label={"Inspiration"}
        labelStyle={[
          styles.navItemLabel,
          {
            color:
              pathname == "/inspiration"
                ? themeColors.hamburgerTextActive
                : themeColors.hamburgerText,
          },
        ]}
        style={{
          backgroundColor:
            pathname == "/inspiration" ? "#333" : themeColors.background,
        }}
        onPress={() => {
          router.push("/inspiration");
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
      }}></Drawer>
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
