import woolBg from "../../../assets/images/woolImage.jpg";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";
import { checkboxStyle, stylesModalForm } from "../../../StyleSheet/formStyles";
import { Colors } from "@/constants/Colors";
import CustomFormCoat from "../../../components/CustomFormCoat";
import CustomFormCollar from "../../../components/CustomFormCollar";
import CustomFormOther from "../../../components/CustomFormOther";
import CheckBox from "../../../components/CheckBox";
import GradientBackground from "../../../components/GradiantBackground";
import ContactForm from "../../../components/ContactForm";
import CompleteEmail from "../../../components/CompleteEmail";
import { formStore } from "../../../data/formStoreHooks";
import { validateStoreHooks } from "../../../data/validateStoreHooks";
import { Link } from "expo-router";
// import SendEmail from "../../../functions/SendEmail";
const OrderScreen = () => {
  const {
    chosenForm,
    setChosenForm,
    chosenProduct,
    setChosenStep,
    chosenStep,
    openSent,
    setOpenSent,
    sent,
  } = formStore();
  const { setWarnings } = validateStoreHooks();

  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const { width } = useWindowDimensions();
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
      setWarnings.setCheckbox(true);
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
            contentContainerStyle={{
              // paddingBottom: 50,
              flexGrow: 1,
            }}
            keyboardShouldPersistTaps="handled">
            <SafeAreaView
              style={{
                backgroundColor: themeColors.background,
                flexGrow: 1,
                marginHorizontal: width > 500 ? 40 : 20,
              }}>
              <GradientBackground>
                <View style={checkboxStyle.container}>
                  <View style={checkboxStyle.containerText}>
                    <Text
                      className="text-2xl mb-3"
                      style={{ color: themeColors.text }}>
                      Här kan du lägga din beställnig
                    </Text>
                    <Text style={{ color: themeColors.text }}>
                      Skicka en beställning/förfrågan så återkommer vi med
                      prisinformation. Vänligen läs igenom våra{" "}
                      <Link
                        href="/termsConditions"
                        style={{
                          color: themeColors.text,
                          textDecorationLine: "underline",
                        }}>
                        köpvillkor
                      </Link>{" "}
                      dessa godkänner du genom att beställa.
                    </Text>
                  </View>
                  <View
                    style={[
                      checkboxStyle.blueSeperator,
                      { backgroundColor: "#82BCBD" },
                    ]}>
                    <Text
                      className="text-xl text-center"
                      style={{ color: "#11181C" }}>
                      1. Välj vad du vill beställa.
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
                        className="text-center text-s -mt-2">
                        Om du vill beställa flera produkter så finns det
                        alternativet i sista steget.
                      </Text>
                    </View>
                  )}

                  <View
                    style={[
                      checkboxStyle.blueSeperator,
                      { backgroundColor: "#82BCBD" },
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
                      { backgroundColor: "#82BCBD" },
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
                      { backgroundColor: "#82BCBD" },
                    ]}>
                    <Text
                      className="text-xl text-center"
                      style={{ color: "#11181C" }}>
                      4. Granska och skicka beställning.
                    </Text>
                  </View>
                  <View>{chosenStep.stepFour && <CompleteEmail />}</View>
                </View>
                <Modal visible={openSent} transparent={true}>
                  <View style={stylesModalForm.modalOverlay}>
                    <View
                      style={[stylesModalForm.modalContent, { maxWidth: 350 }]}>
                      <Text style={{ padding: 10, margin: 10 }}>{sent}</Text>
                      <Pressable onPress={() => setOpenSent(false)}>
                        <Text
                          style={[
                            stylesModalForm.buttons,
                            {
                              backgroundColor: "#000",

                              color: themeColors.detail,
                            },
                          ]}>
                          Stäng
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </Modal>
              </GradientBackground>
            </SafeAreaView>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default OrderScreen;
