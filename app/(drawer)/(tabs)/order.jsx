import woolBg from "../../../assets/images/woolImage.jpg";
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
// import { Ionicons } from '@expo/vector-icons'
import Fontisto from "@expo/vector-icons/Fontisto";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
const OrderScreen = () => {
  const [coat, setCoat] = useState(false);
  const [collar, setCollar] = useState(false);
  const [other, setOther] = useState(false);

  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;

  return (
    <ImageBackground
      source={woolBg}
      style={checkboxStyle.imageBackground}
      resizeMode="cover">
      <View style={themeColors.overlay}>
        <SafeAreaView
          style={{ backgroundColor: themeColors.background, flex: 1 }}
          className="mx-10">
          <View style={checkboxStyle.container}>
            <View style={checkboxStyle.containerText}>
              <Text
                className="text-2xl mb-3"
                style={{ color: themeColors.text }}>
                Här kan du lägga din beställnig
              </Text>
              <Text style={{ color: themeColors.text }}>
                Skicka en beställning/förfrågan så återkommer vi med
                prisinformation. Vänligen läs igenom våra köpvillkor (ADD
                MODAL), dessa godkänner du genom att beställa.
              </Text>
            </View>
            <Text
              className="text-xl text-center"
              style={{ color: themeColors.text }}>
              Vänligen välj VAD du vill beställa
            </Text>
            <View style={checkboxStyle.containerCheck}>
              <View>
                <Text style={{ color: themeColors.text }}>Täcke</Text>
                {coat ? (
                  <Pressable onPress={() => setCoat((prevCoat) => !prevCoat)}>
                    <Fontisto
                      name="checkbox-active"
                      size={24}
                      color={themeColors.detail}
                      style={{ alignSelf: "center" }}
                    />
                  </Pressable>
                ) : (
                  <Pressable onPress={() => setCoat((prevCoat) => !prevCoat)}>
                    <Fontisto
                      name="checkbox-passive"
                      size={24}
                      color={themeColors.detail}
                      style={{ alignSelf: "center" }}
                    />
                  </Pressable>
                )}
              </View>
              <View>
                <Text style={{ color: themeColors.text }}>Halsband</Text>
                {collar ? (
                  <Pressable
                    onPress={() => setCollar((prevCollar) => !prevCollar)}>
                    <Fontisto
                      name="checkbox-active"
                      size={24}
                      color={themeColors.detail}
                      style={{ alignSelf: "center" }}
                    />
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => setCollar((prevCollar) => !prevCollar)}>
                    <Fontisto
                      name="checkbox-passive"
                      size={24}
                      color={themeColors.detail}
                      style={{ alignSelf: "center" }}
                    />
                  </Pressable>
                )}
              </View>
              <View>
                <Text style={{ color: themeColors.text }}>Annat</Text>
                {other ? (
                  <Pressable
                    onPress={() => setOther((prevOther) => !prevOther)}>
                    <Fontisto
                      name="checkbox-active"
                      size={24}
                      color={themeColors.detail}
                      style={{ alignSelf: "center" }}
                    />
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={() => setOther((prevOther) => !prevOther)}>
                    <Fontisto
                      name="checkbox-passive"
                      size={24}
                      color={themeColors.detail}
                      style={{ alignSelf: "center" }}
                    />
                  </Pressable>
                )}
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};
const checkboxStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerText: {
    alignItems: "center",
    margin: 20,
  },
  containerCheck: {
    flexDirection: "row",
    gap: 30,
    justifyContent: "center",
    margin: 10,
  },

  imageBackground: {
    flex: 1,
  },
});
export default OrderScreen;
