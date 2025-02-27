import woolBg from "../../../assets/images/woolImage.jpg";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { checkboxStyle } from "../../../constants/formStyles";
import { Colors } from "@/constants/Colors";
import CustomFormCoat from "../../../components/CustomFormCoat";
import CustomFormCollar from "../../../components/CustomFormCollar";
import CustomFormOther from "../../../components/CustomFormOther";
import CheckBox from "../../../components/CheckBox";
import ContactForm from "../../../components/ContactForm";
import CompleteEmail from "../../../components/CompleteEmail";
import { formStore } from "../../../data/formStoreHooks";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FA5Style } from "@expo/vector-icons/build/FontAwesome5";
// import SendEmail from "../../../functions/SendEmail";
const OrderScreen = () => {
  const {
    chosenForm,
    setChosenForm,
    chosenProduct,
    setWarning,
    setWarningMessage,
    setChosenStep,
    chosenStep,
  } = formStore();
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;

  const openCustomForm = () => {
    if (chosenProduct.coat) {
      setChosenForm.setCoatForm(true);
      setChosenStep.setStepOne(false);
      setChosenStep.setStepTwo(true);
    } else if (chosenProduct.collar) {
      setChosenForm.setCollarForm(true);
      setChosenStep.setStepOne(false);
      setChosenStep.setStepTwo(true);
    } else if (chosenProduct.other) {
      setChosenForm.setOtherForm(true);
      setChosenStep.setStepOne(false);
      setChosenStep.setStepTwo(true);
    } else {
      setWarningMessage("Please check one of the boxes");
      setWarning(true);
    }
  };

  return (
    <ImageBackground
      source={woolBg}
      style={checkboxStyle.imageBackground}
      resizeMode="cover">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}>
        <View style={themeColors.overlay}>
          <ScrollView
            contentContainerStyle={{ paddingBottom: 50 }}
            keyboardShouldPersistTaps="handled">
            <SafeAreaView
              style={{ backgroundColor: themeColors.background, flex: 1 }}
              className="mx-10">
              {/* <SendEmail /> */}
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
                {chosenStep.stepOne && (
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
                {chosenStep.stepTwo && (
                  <View>
                    {chosenForm.coatForm && <CustomFormCoat />}
                    {chosenForm.collarForm && <CustomFormCollar />}
                    {chosenForm.otherForm && <CustomFormOther />}
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
                {chosenStep.stepThree && <ContactForm />}
                <View
                  style={[
                    checkboxStyle.blueSeperator,
                    { backgroundColor: themeColors.detail },
                  ]}>
                  <Text
                    className="text-xl text-center"
                    style={{ color: "#11181C" }}>
                    4. Granska och skicka beställning.
                  </Text>
                </View>
                <View>{chosenStep.stepFour && <CompleteEmail />}</View>
              </View>
            </SafeAreaView>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default OrderScreen;
