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
import CustomFormOther from "../../../components/CustomFormOther";
import ContactForm from "../../../components/ContactForm";
import { formStore } from "../../../data/formStoreHooks";
import CustomFormCoatEng from "../../../components/CustomFormCoatEng";
import CheckBoxEng from "../../../components/CheckBoxEng";
import CustomFormCollarEng from "../../../components/CustomFormCollarEng";
const OrderScreenEng = () => {
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
                  Order Here
                </Text>
                <Text style={{ color: themeColors.text }}>
                  Send us an order request or inquiry, and we will get back to
                  you with pricing information.Please read our terms &
                  conditions (link to them), as you accept them by placing an
                  order
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
                  1. Please choose what you would like to order
                </Text>
              </View>
              {stepOne && (
                <View>
                  <CheckBoxEng />
                  <Pressable onPress={openCustomForm}>
                    <Text style={checkboxStyle.button}>Continue</Text>
                  </Pressable>
                  {/* <Text
                    style={{ color: themeColors.text }}
                    className="text-center text-xs -mt-2">
                    If you want to order more than one, it 
                  </Text> */}
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
                  2. Size, color, and specifications
                </Text>
              </View>
              {stepTwo && (
                <View>
                  {coatForm && <CustomFormCoatEng />}
                  {collarForm && <CustomFormCollarEng />}
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
                  3. Contact details
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

export default OrderScreenEng;
