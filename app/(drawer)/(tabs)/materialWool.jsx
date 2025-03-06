import {
  FlatList,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";
import woolBg from "../../../assets/images/woolImage.jpg";
import { useEffect, useState } from "react";
import { fetchCollection } from "../../../functions/fetchCollection";
import WoolColor from "../../../components/List/MaterialColor";
import { Colors } from "@/constants/Colors";
import GradientBackground from "../../../components/GradiantBackground";
import { checkboxStyle } from "../../../StyleSheet/formStyles";
import { auth } from "../../../firebaseConfigTwo";
import { adminHooks } from "../../../data/adminStoreHooks";
import AddModal from "../../../components/AddWoolProduct";

const MaterialScreen = () => {
  const { width } = useWindowDimensions();
  const [listOfWools, setListofWools] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const { openAddWool, setOpenAddWool } = adminHooks();

  const numberOfcolums =
    width > 1200 ? 5 : width > 880 ? 4 : width > 700 ? 3 : 2;
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;

  const user = auth.currentUser;

  useEffect(() => {
    setLoggedIn(!!auth.currentUser);
  }, [auth.currentUser]);

  const fetchProducts = async () => {
    const snapshot = await fetchCollection("wool");
    const sortedList = snapshot.sort((a, b) =>
      a.colorGroup.localeCompare(b.colorGroup)
    );
    setListofWools(sortedList);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ImageBackground
      source={woolBg}
      style={styles.imageBackground}
      resizeMode="cover">
      <View style={themeColors.overlay}>
        <SafeAreaView style={{ flex: 1 }} className="mx-3">
          <GradientBackground>
            <View>
              <Text
                style={{ color: themeColors.text }}
                className="text-center text-2xl">
                Ull till täcken
              </Text>
              {loggedIn && (
                <Pressable onPress={() => setOpenAddWool(true)}>
                  <Text style={checkboxStyle.button}>Lägg till</Text>
                </Pressable>
              )}
            </View>
            {openAddWool && <AddModal from="wool" />}

            <FlatList
              contentContainerStyle={styles.container}
              data={listOfWools}
              numColumns={numberOfcolums}
              key={numberOfcolums}
              renderItem={({ item }) => (
                <WoolColor image={item.url} color={item.color} width={width} />
              )}></FlatList>
          </GradientBackground>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  imageBackground: {
    flex: 1,
  },
  image: {
    height: 200,
    width: 200,
  },
  smallimage: {
    height: 150,
    width: 150,
  },
});

export default MaterialScreen;
