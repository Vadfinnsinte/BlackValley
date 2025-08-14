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
import DropDownPicker from "react-native-dropdown-picker";
import { auth } from "../../../firebaseConfigTwo";
import { checkboxStyle } from "../../../StyleSheet/formStyles";
import AddModal from "../../../components/AddWoolProduct";
import LeashColor from "../../../components/List/MaterialLeash";
const MaterialScreenLeash = () => {
  const { width } = useWindowDimensions();
  const [listOfLeash, setlistOfLeash] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [chosenGroup, setChosenGroup] = useState([
    { label: "Läder", value: "Läder" },
    { label: "Hex", value: "Hex" },
    { label: "Alla", value: "Alla" },
  ]);

  const { openAddLeash, setOpenAddLeash } = adminHooks();

  const numberOfcolums =
    width > 1200 ? 5 : width > 880 ? 4 : width > 700 ? 3 : 2;
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;

  const fetchProducts = async () => {
    const snapshot = await fetchCollection("leash");
    if (selectedGroup === "Läder") {
      const sortedList = snapshot
        .filter((item) => item.group === "leather")
        .sort((a, b) => a.colorGroup.localeCompare(b.colorGroup));
      setlistOfLeash(sortedList);
    } else if (selectedGroup === "Hex") {
      const sortedList = snapshot
        .filter((item) => item.group === "hex")
        .sort((a, b) => a.colorGroup.localeCompare(b.colorGroup));
      setlistOfLeash(sortedList);
    } else {
      const sortedList = snapshot.sort((a, b) => {
        if (a.group === "leather" && b.group !== "leather") return -1;
        if (a.group !== "leather" && b.group === "leather") return 1;
        return a.colorGroup.localeCompare(b.colorGroup);
      });
      setlistOfLeash(sortedList);
    }
  };

  useEffect(() => {
    setLoggedIn(!!auth.currentUser);
  }, [auth.currentUser]);

  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    fetchProducts();
  }, [selectedGroup]);

  return (
    <ImageBackground
      source={woolBg}
      style={styles.imageBackground}
      resizeMode="cover">
      <View style={themeColors.overlay}>
        <SafeAreaView style={{ flex: 1 }} className="mx-3">
          <GradientBackground>
            <View
              style={{
                marginBottom: 15,
                alignSelf: "center",
                zIndex: 2000,
              }}>
              <View>
                <Text
                  style={{ color: themeColors.text }}
                  className="text-center text-2xl">
                  Material till koppel
                </Text>
                <Text
                  style={{ color: themeColors.text }}
                  className="text-center ">
                  (Färgerna kan avvika från verkligheten)
                </Text>
              </View>
              <View style={styles.dropdown}>
                <DropDownPicker
                  showArrowIcon={false}
                  open={openFilter}
                  value={selectedGroup}
                  items={chosenGroup}
                  setOpen={setOpenFilter}
                  setItems={setChosenGroup}
                  placeholder="Filtrera"
                  style={{
                    minHeight: 26,
                    paddingVertical: 0,
                    padding: 0,
                  }}
                  labelStyle={{
                    fontSize: 13,
                    lineHeight: 16,
                  }}
                  listItemContainerStyle={{
                    height: 30,
                    paddingVertical: 0,
                  }}
                  dropDownContainerStyle={{
                    maxHeight: 90,
                    paddingVertical: 0,
                  }}
                  setValue={(callback) => {
                    const newValue = callback(selectedGroup);
                    setSelectedGroup(newValue);
                  }}
                />
              </View>
              {loggedIn && (
                <Pressable onPress={() => setOpenAddLeash(true)}>
                  <Text style={checkboxStyle.button}>Lägg till</Text>
                </Pressable>
              )}

              {openAddLeash && (
                <AddModal from="leash" fetchProducts={fetchProducts} />
              )}
            </View>

            <FlatList
              contentContainerStyle={styles.container}
              data={listOfLeash}
              numColumns={numberOfcolums}
              key={numberOfcolums}
              renderItem={({ item }) => (
                <LeashColor
                  image={item.url}
                  color={item.color}
                  width={width}
                  group={item.group}
                />
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
  dropdown: {
    zIndex: 100000,
    elevation: 1000,
    minWidth: "60px",
    position: "relative",
    height: 10,
    marginTop: 6,
  },
});

export default MaterialScreenLeash;
