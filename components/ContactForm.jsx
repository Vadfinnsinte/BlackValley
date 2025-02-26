import {
  Pressable,
  Text,
  TextInput,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";
import { Colors } from "../constants/Colors";
import { checkboxStyle, styleCoatForm } from "../constants/formStyles";
import { formStore } from "../data/formStoreHooks";

const ContactForm = ({}) => {
  // -- colors and responsiv variables --
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const { width } = useWindowDimensions();
  const {
    comingFromForm,
    setChosenForm,
    setUserInformation,
    userInformation,
    setChosenStep,
  } = formStore();

  const goBack = () => {
    if (comingFromForm === "Collar") {
      setChosenStep.setStepThree(false);
      setChosenStep.setStepTwo(true);
      setChosenForm.setCollarForm(true);
    }
    if (comingFromForm === "Coat") {
      setChosenStep.setStepThree(false);
      setChosenStep.setStepTwo(true);
      setChosenForm.setCoatForm(true);
    }
    if (comingFromForm === "Other") {
      setChosenStep.setStepThree(false);
      setChosenStep.setStepTwo(true);
      setChosenForm.setOtherForm(true);
    }
  };

  return (
    <View style={styleCoatForm.centerContent}>
      <Pressable style={{ alignSelf: "flex-end" }} onPress={goBack}>
        <Text
          style={{
            color: themeColors.text,
            textDecorationLine: "underline",
            marginBottom: 6,
          }}>
          Tillbaka till steg 2
        </Text>
      </Pressable>
      <View>
        <Text
          className={`text-xl  ${width < 790 ? "text-center" : ""}`}
          style={{ color: themeColors.detail }}>
          Kontakt
        </Text>
        <View
          style={[
            width > 750 ? styleCoatForm.flexBox : styleCoatForm.flexBoxSmall,
            { zIndex: 10 },
          ]}>
          <View>
            <Text style={{ color: themeColors.text }}>Förnamn</Text>
            <TextInput
              value={userInformation.name}
              onChangeText={(text) => setUserInformation.setName(text)}
              placeholder="Anna"
              placeholderTextColor="#808080"
              style={styleCoatForm.input}></TextInput>
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Efternamn</Text>
            <TextInput
              value={userInformation.suename}
              onChangeText={(text) => setUserInformation.setSurname(text)}
              placeholder="Andersson"
              placeholderTextColor="#808080"
              style={styleCoatForm.input}></TextInput>
          </View>
        </View>
        <View
          style={[
            width > 750 ? styleCoatForm.flexBox : styleCoatForm.flexBoxSmall,
            { zIndex: 10 },
          ]}>
          <View>
            <Text style={{ color: themeColors.text }}>Telefonnummer</Text>
            <TextInput
              keyboardType="phone-pad"
              value={userInformation.phoneNumber}
              onChangeText={(text) => setUserInformation.setPhoneNumber(text)}
              placeholder="070-1235678"
              placeholderTextColor="#808080"
              style={styleCoatForm.input}></TextInput>
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Mailadress</Text>
            <TextInput
              keyboardType="email-address"
              value={userInformation.email}
              onChangeText={(text) => setUserInformation.setEmail(text)}
              placeholder="exemel@exempel.se"
              placeholderTextColor="#808080"
              style={styleCoatForm.input}></TextInput>
          </View>
        </View>
        <View
          style={[
            width > 750 ? styleCoatForm.flexBox : styleCoatForm.flexBoxSmall,
            { zIndex: 10 },
          ]}>
          <View>
            <Text style={{ color: themeColors.text }}>Gata</Text>
            <TextInput
              value={userInformation.street}
              onChangeText={(text) => setUserInformation.setStreet(text)}
              placeholder="Adressvägen 17"
              placeholderTextColor="#808080"
              style={styleCoatForm.input}></TextInput>
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Postnummer</Text>
            <TextInput
              value={userInformation.postalCode}
              onChangeText={(text) => setUserInformation.setPostalCode(text)}
              placeholder="233 33"
              placeholderTextColor="#808080"
              style={styleCoatForm.input}></TextInput>
          </View>
        </View>
        <Pressable
          style={checkboxStyle.button}
          onPress={() => {
            setChosenStep.setStepThree(false);
            setChosenStep.setStepFour(true);
          }}>
          <Text style={{ color: themeColors.detail, textAlign: "center" }}>
            Granska
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ContactForm;
