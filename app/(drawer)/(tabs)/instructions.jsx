import {
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  useColorScheme,
  ScrollView,
  useWindowDimensions,
  Image,
  Platform,
} from "react-native";
import React, { useRef } from "react";
import { Video } from "expo-av";
import { Colors } from "@/constants/Colors";
import woolBg from "../../../assets/images/woolImage.jpg";
import { checkboxStyle } from "../../../constants/formStyles";
import GradientBackground from "../../../components/GradiantBackground.jsx";
import { InstructionsStyles } from "../../../StyleSheet/Styles.js";
import measure from "../../../assets/images/mata-hund.png";

const InstructionScreen = () => {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const { width } = useWindowDimensions();
  const videoRef = useRef(null);

  return (
    <ImageBackground
      source={woolBg}
      style={checkboxStyle.imageBackground}
      resizeMode="cover">
      <View style={themeColors.overlay}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, overflow: "hidden" }}>
          <SafeAreaView
            style={{ flex: 1, marginHorizontal: width > 450 ? 40 : 10 }}
            className="mx-10">
            <GradientBackground>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    color: themeColors.text,
                    fontSize: 25,
                    fontWeight: "400",
                    margin: 20,
                  }}>
                  Mättinstruktioner för täcke
                </Text>
                <View
                  style={[
                    InstructionsStyles.container,
                    { width: width > 800 ? 700 : 300 },
                    { height: width > 800 ? 450 : 200 },
                  ]}>
                  {Platform.OS === "web" ? (
                    // WebView för att visa videon på webben
                    <iframe
                      src="https://dl.dropboxusercontent.com/scl/fi/ygtheui1ernr9r7emszqh/M-tinstruktion-t-cke.mp4?rlkey=b07clvo60i3gjjtho0soy2iqv&st=3wp5gi04"
                      style={{ width: "100%", height: "100%" }}
                      allowFullScreen
                    />
                  ) : (
                    // Använd Video för mobil
                    <Video
                      ref={videoRef}
                      source={{
                        uri: "https://dl.dropboxusercontent.com/scl/fi/ygtheui1ernr9r7emszqh/M-tinstruktion-t-cke.mp4?rlkey=b07clvo60i3gjjtho0soy2iqv&st=3wp5gi04",
                      }}
                      useNativeControls
                      resizeMode="contain"
                      style={{ width: "100%", height: "100%" }}
                    />
                  )}
                </View>
                <View style={{ marginTop: -70 }}>
                  <Image
                    style={{
                      width: width > 800 ? 600 : width > 400 ? 340 : 280,
                      alignItems: "flex-start",
                    }}
                    resizeMode="contain"
                    source={measure}
                  />
                </View>
              </View>
            </GradientBackground>
          </SafeAreaView>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default InstructionScreen;
