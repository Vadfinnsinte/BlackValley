import {
  SafeAreaView,
  Text,
  View,
  useColorScheme,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  Linking,
  Pressable,
  ScrollView,
} from "react-native";
import contactPic from "../../../assets/images/tre-circlar.png";
import insta from "../../../assets/images/instagram_icon.png";
import Facebook from "../../../assets/images/facebook logo_icon.png";
import woolBg from "../../../assets/images/woolImage.jpg";
import GradientBackground from "../../../components/GradiantBackground";
import { Colors } from "@/constants/Colors";
import { contact } from "../../../StyleSheet/ContactInfo";
import { adminHooks } from "../../../data/adminStoreHooks";
import LoginPage from "../../../components/Login";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfigTwo";
import { useEffect, useState } from "react";

const ContactScreen = () => {
  const { setLoginModalOpen, loginModalOpen } = adminHooks();
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const [loggedIn, setLoggedIn] = useState(false);
  const { width } = useWindowDimensions();

  const openInstagram = () => {
    Linking.openURL(
      "https://www.instagram.com/_blackvalley_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    );
  };

  const openFacebook = () => {
    Linking.openURL("https://www.facebook.com/blackvalleysheepfarm");
  };
  useEffect(() => {
    setLoggedIn(!!auth.currentUser);
  }, [auth.currentUser]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLoggedIn(false);
    } catch (error) {
      console.error("Fel vid utloggning: ", error);
    }
  };
  return (
    <ImageBackground source={woolBg} style={{ flex: 1 }} resizeMode="cover">
      <View style={themeColors.overlay}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, overflow: "hidden" }}>
          <SafeAreaView
            style={{
              flex: 1,
            }}
            className="mx-10">
            <GradientBackground>
              <View style={contact.Body}>
                <View
                  style={
                    width > 560 ? contact.Container : contact.SmallContainer
                  }>
                  <View style={{ maxWidth: width > 560 ? 400 : 240 }}>
                    <Text
                      style={{ color: themeColors.text, ...contact.HedarText }}>
                      Kontakt
                    </Text>

                    <Text
                      style={{ color: themeColors.text, ...contact.SmallText }}>
                      E-mail: blackvalley.sheepfarm@outlook.com
                    </Text>
                    <Text
                      style={{ color: themeColors.text, ...contact.SmallText }}>
                      Tel. 0722-238047
                    </Text>
                    <Text
                      style={{ color: themeColors.text, ...contact.SmallText }}>
                      Swish: 123 443 45 10
                    </Text>
                  </View>
                  <View style={{ maxWidth: width > 560 ? 400 : 240 }}>
                    <Text
                      style={{ color: themeColors.text, ...contact.HedarText }}>
                      Sociala medier
                    </Text>
                    <Text
                      style={{
                        color: themeColors.text,
                        ...contact.SmallText,
                      }}>
                      Följ Black Valley på Facebook och Instagram för mer
                      inspiration!
                    </Text>
                    <View
                      style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
                      <TouchableOpacity onPress={openInstagram}>
                        <Image
                          style={{ height: 40, width: 40 }}
                          source={insta}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={openFacebook}>
                        <Image
                          style={{
                            height: 36,
                            width: 36,
                            marginTop: 3,
                          }}
                          source={Facebook}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <ImageBackground
                    resizeMode="contain"
                    style={{
                      height: width > 560 ? 460 : width > 370 ? 280 : 200,
                      width: width > 560 ? 460 : width > 370 ? 280 : 200,
                    }}
                    source={contactPic}
                  />
                </View>
              </View>

              {!loggedIn ? (
                <Pressable
                  style={{ alignSelf: "flex-end", paddingRight: 3 }}
                  onPress={() => setLoginModalOpen(true)}>
                  <Text>Admin</Text>
                </Pressable>
              ) : (
                <Pressable
                  style={{ alignSelf: "flex-end", paddingRight: 3 }}
                  onPress={handleLogout}>
                  <Text>Logga ut</Text>
                </Pressable>
              )}
              {loginModalOpen && <LoginPage />}
            </GradientBackground>
          </SafeAreaView>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default ContactScreen;
