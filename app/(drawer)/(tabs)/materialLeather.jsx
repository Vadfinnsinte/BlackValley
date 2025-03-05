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
import { adminHooks } from "../../../data/adminStoreHooks";
import { auth } from "../../../firebaseConfigTwo";
import { checkboxStyle } from "../../../StyleSheet/formStyles";
import AddModal from "../../../components/AddWoolProduct";
const MaterialScreenLeather = () => {
  const { width } = useWindowDimensions();
  const [listOfLeather, setlistOfLeather] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const { openAddLeather, setOpenAddLeather } = adminHooks();

  const numberOfcolums =
    width > 1200 ? 5 : width > 880 ? 4 : width > 700 ? 3 : 2;
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;

  const fetchProducts = async () => {
    const snapshot = await fetchCollection("leather");
    const sortedList = snapshot.sort((a, b) =>
      a.colorGroup.localeCompare(b.colorGroup)
    );
    setlistOfLeather(sortedList);
  };
  useEffect(() => {
    setLoggedIn(!!auth.currentUser);
  }, [auth.currentUser]);

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
                Läder till halsband
              </Text>
              <Text
                style={{ color: themeColors.text }}
                className="text-center ">
                (Färgerna kan variera)
              </Text>
              {loggedIn && (
                <Pressable onPress={() => setOpenAddLeather(true)}>
                  <Text style={checkboxStyle.button}>Lägg till</Text>
                </Pressable>
              )}

              {openAddLeather && <AddModal from="leather" />}
            </View>
            <FlatList
              contentContainerStyle={styles.container}
              data={listOfLeather}
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

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 2,
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

export default MaterialScreenLeather;
