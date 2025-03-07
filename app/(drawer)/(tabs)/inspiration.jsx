import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  ScrollView,
  View,
  Pressable,
} from "react-native";
import woolBg from "../../../assets/images/woolImage.jpg";
import { useEffect, useState } from "react";
import { fetchCollection } from "../../../functions/fetchCollection";
import { Colors } from "@/constants/Colors";
import InspoList from "../../../components/List/InspoList";
import GradientBackground from "../../../components/GradiantBackground";
import { adminHooks } from "../../../data/adminStoreHooks";
import AddToInspo from "../../../components/AddToInspo";
import { auth } from "../../../firebaseConfigTwo";
import { checkboxStyle } from "../../../StyleSheet/formStyles";

const InspirationScreen = () => {
  const { width } = useWindowDimensions();
  const [loggedIn, setLoggedIn] = useState(false);
  const [inspirationList, setInspirationList] = useState([]);
  const { openAddInspo, setOpenAddInspo } = adminHooks();
  const numberOfcolums =
    width > 1700 ? 4 : width > 1380 ? 3 : width > 925 ? 2 : 1;
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;

  const fetchInspo = async () => {
    const picture = await fetchCollection("inspiration");
    setInspirationList(picture);
  };

  useEffect(() => {
    fetchInspo();
  }, []);

  useEffect(() => {
    setLoggedIn(!!auth.currentUser);
  }, [auth.currentUser]);

  return (
    <ImageBackground
      source={woolBg}
      style={styles.imageBackground}
      resizeMode="cover">
      <View style={themeColors.overlay}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, overflow: "hidden" }}>
          <SafeAreaView
            style={{
              flex: 1,
            }}
            className="mx-10">
            <GradientBackground>
              <View style={{ alignItems: "center" }}>
                <View>
                  <Text
                    style={[styles.Text, { color: themeColors.text }]}
                    className="text-center ">
                    Inspiration
                  </Text>
                  {loggedIn && (
                    <Pressable onPress={() => setOpenAddInspo(true)}>
                      <Text style={checkboxStyle.button}>Lägg till</Text>
                    </Pressable>
                  )}
                </View>
                {openAddInspo && <AddToInspo fetchInspo={fetchInspo} />}
                <FlatList
                  numColumns={numberOfcolums}
                  data={inspirationList}
                  key={numberOfcolums}
                  renderItem={({ item }) => (
                    <InspoList
                      image={item.url}
                      name={item.name}
                      width={width}
                    />
                  )}></FlatList>
              </View>
            </GradientBackground>
          </SafeAreaView>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default InspirationScreen;

const styles = StyleSheet.create({
  Text: {
    margin: 10,
    fontFamily: "monospace",
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  imageBackground: {
    flex: 1,
  },
});
