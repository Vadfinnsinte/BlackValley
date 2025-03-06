import {
  Image,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  useColorScheme,
  ImageBackground,
  useWindowDimensions,
  ScrollView,
  Linking,
  TouchableOpacity,
} from "react-native";
import woolBg from "../../../assets/images/woolImage.jpg";
import pictureOnMe from "../../../assets/images/Mig.jpg";
import startPicture from "../../../assets/images/startPic.png";
import { Colors } from "@/constants/Colors";
import GradientBackground from "../../../components/GradiantBackground.jsx";
import ModinBed from "../../../assets/images/modinBed.png";
import { useRouter } from "expo-router";
import { useEffect } from "react";

const HomeScreen = () => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const { width } = useWindowDimensions();
  const bigger = width > 1000;

  const openModinBed = () => {
    Linking.openURL("https://modinbed.se/hundmadrasser");
  };

  return (
    <ImageBackground
      source={woolBg}
      style={styles.imageBackground}
      resizeMode="cover">
      <View style={themeColors.overlay}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, overflow: "hidden" }}>
          <SafeAreaView
            style={{ flex: 1, marginHorizontal: width > 450 ? 40 : 10 }}>
            <GradientBackground>
              <View style={[bigger && styles.layoutBig, { marginTop: 20 }]}>
                <View style={styles.textContainer}>
                  <Text
                    style={{ color: themeColors.text }}
                    className={bigger ? "text-4xl my-5" : " text-2xl my-5"}>
                    Välkommen till Black Valley
                  </Text>
                  <Text style={{ color: themeColors.text, fontSize: 16 }}>
                    På den här sidan hittar du massa inspiration om du är ute
                    efter skräddarsydda produkter till din hund. Jag syr främst
                    ulltäcken och halsband i svenskt skinn, men älskar även
                    specialbeställningar.
                  </Text>
                  <Text
                    className={"mt-5"}
                    style={{ color: themeColors.text, fontSize: 16 }}>
                    Välkommen att kika runt! Beställer gör du enligt
                    instruktioner under fliken ”Beställ här”. Har du frågor,
                    tveka inte att kontakta mig.
                  </Text>
                </View>
                <View
                  style={[
                    bigger ? styles.placeholderBoxBig : styles.placeholderBox,
                    bigger && { order: -1 },
                  ]}>
                  <Image
                    style={{
                      height: width > 1000 ? 340 : 230,
                      width: width > 1000 ? 340 : 230,
                    }}
                    source={startPicture}
                    resizeMode="contain"
                  />
                </View>
              </View>
              <View style={bigger && styles.layoutBig}>
                <View style={[styles.textContainer, { paddingRight: 35 }]}>
                  <Text
                    style={{ color: themeColors.text }}
                    className={bigger ? "text-3xl mb-5" : " text-2xl mb-5"}>
                    Om mig
                  </Text>
                  <Text style={{ color: themeColors.text, fontSize: 16 }}>
                    Therese heter jag och jag driver firman Black Valley. Jag
                    har alltid brunnit för djur och natur, är uppvuxen på
                    bondgård och har präglats av att man tar tillvara på och
                    lever nära jorden.{" "}
                  </Text>
                  <Text
                    className={"mt-5"}
                    style={{ color: themeColors.text, fontSize: 16 }}>
                    Under flera år har jag bott på Tjörn, men har nu återvänt
                    till gården jag växt upp på, där vi bedriver lammuppfödning
                    i liten skala. Att känna till ursprunget på allt från det
                    som ligger på tallriken, till det jag har på mig är en
                    viktig värdering.
                  </Text>
                </View>
                <View
                  style={
                    bigger ? styles.placeholderBoxBig : styles.placeholderBox
                  }>
                  <Image
                    style={{
                      height: 350,
                      width: width > 450 ? 265 : 230,
                      marginTop: 10,
                      borderRadius: 10,
                    }}
                    source={pictureOnMe}
                    resizeMode="contain"
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}>
                <TouchableOpacity
                  style={{
                    flexDirection: width > 682 ? "row" : "column",
                    marginBottom: 20,
                  }}
                  onPress={openModinBed}>
                  <Text
                    style={{
                      color: themeColors.text,
                    }}>
                    I samarbete med Modin Bed
                  </Text>
                  <Text
                    style={{
                      color: themeColors.text,
                      display: width > 510 ? "block" : "none",
                    }}>
                    -Tåliga hundmadrasser med smarta lösningar{" "}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={openModinBed}>
                  <Image
                    style={{
                      width: width > 400 ? 100 : 80,
                      height: 100,
                      margin: width > 400 ? 20 : 10,
                    }}
                    source={ModinBed}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </GradientBackground>
          </SafeAreaView>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  placeholderBox: {
    margin: 10,
    alignItems: "center",
    overflow: "hidden",
  },

  placeholderBoxBig: {
    overflow: "hidden",
  },
  layoutBig: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 20,
    justifyContent: "space-around",
  },
  textContainer: {
    maxWidth: 550,
    alignSelf: "center",
    padding: 10,
  },
});

export default HomeScreen;
