import woolBg from "../../../assets/images/woolImage.jpg";
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { checkboxStyle } from "../../../constants/formStyles";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import CustomFormCoat from "../../../components/CustomFormCoat";
import CustomFormCollar from "../../../components/CustomFormCollar";
import CustomFormOther from "../../../components/CustomFormOther";
import CheckBox from "../../../components/CheckBox";
import ContactForm from "../../../components/ContactForm";
import { formStore } from "../../../data/formStoreHooks";
const OrderScreen = () => {
  const {
    setCoat,
    coat,
    coatForm,
    setCoatForm,
    collar,
    setCollar,
    collarForm,
    setCollarForm,
    other,
    setOther,
    otherForm,
    setOtherForm,
    warning,
    setWarning,
    warningmessage,
    setWarningmessage,
    stepOne,
    setStepOne,
    stepTwo,
    setStepTwo,
    stepThree,
    setStepThree,
  } = formStore();
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;

  const openCustomForm = () => {
    if (coat) {
      setCoatForm(true);
      setStepOne(false);
      setStepTwo(true);
    } else if (collar) {
      setCollarForm(true);
      setStepOne(false);
      setStepTwo(true);
    } else if (other) {
      setOtherForm(true);
      setStepOne(false);
      setStepTwo(true);
    } else {
      setWarning(true);
      // setWarningmessage("Please check one of the boxes");
    }
  };

  return (
    <ImageBackground
      source={woolBg}
      style={checkboxStyle.imageBackground}
      resizeMode="cover">
      <View style={themeColors.overlay}>

        <ScrollView
          contentContainerStyle={{ paddingBottom: 50 }}
          keyboardShouldPersistTaps="handled">
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
              <View
                style={[
                  checkboxStyle.blueSeperator,
                  { backgroundColor: themeColors.detail },
                ]}>
                <Text
                  className="text-xl text-center"
                  style={{ color: "#11181C" }}>
                  1. Vänligen välj vad du vill beställa
                </Text>
              </View>
              {stepOne && (
                <View>
                  <CheckBox />
                  <Pressable onPress={openCustomForm}>
                    <Text style={checkboxStyle.button}>Gå vidare</Text>
                  </Pressable>
                  <Text
                    style={{ color: themeColors.text }}
                    className="text-center text-xs -mt-2">
                    Om du vill beställa flera produkter så finns det
                    alternativet i nästa steg.
                  </Text>
                </View>
              )}

              <View
                style={[
                  checkboxStyle.blueSeperator,
                  { backgroundColor: themeColors.detail },
                ]}>
                <Text
                  className="text-xl text-center"
                  style={{ color: "#11181C" }}>
                  2. Mått, färg och specifikationer.
                </Text>
              </View>
              {stepTwo && (
                <View>
                  {coatForm && <CustomFormCoat />}
                  {collarForm && <CustomFormCollar />}
                  {otherForm && <CustomFormOther />}
                </View>
              )}

              <View
                style={[
                  checkboxStyle.blueSeperator,
                  { backgroundColor: themeColors.detail },
                ]}>
                <Text
                  className="text-xl text-center"
                  style={{ color: "#11181C" }}>
                  3. Kontaktuppgifter.
                </Text>
              </View>
              {stepThree && (
                <ContactForm
                  stepThree={stepThree}
                  setStepThree={setStepThree}
                  stepOne={stepOne}
                  setStepOne={setStepOne}
                  stepTwo={stepTwo}
                  setStepTwo={setStepTwo}
                />
              )}
            </View>
          </SafeAreaView>
        </ScrollView>

      </View>
    </ImageBackground>
  );
};


  imageBackground: {
    flex: 1,
  },
});

export default OrderScreen;
