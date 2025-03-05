import {
  Pressable,
  Text,
  TextInput,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";
import { Colors } from "../constants/Colors";
import { checkboxStyle, styleCoatForm } from "../StyleSheet/formStyles";
import { formStore } from "../data/formStoreHooks";
import { validateStoreHooks } from "../data/validateStoreHooks";

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
  const {
    nameWarning,
    setWarnings,
    surnameWarning,
    phoneWarning,
    emailWarning,
    streetWarning,
    postalWarning,
  } = validateStoreHooks();
  const phonePattern = /^[0-9]{3}-[0-9]{7}$/;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const postalPattern = /^[0-9]{3}\s?[0-9]{2}\s?[a-zA-ZåäöÅÄÖ]*$/;

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
  const continueToNext = () => {
    let warning = false;
    if (userInformation.name == "") {
      setWarnings.setNameWarning(true);
      warning = true;
    }
    if (userInformation.surname == "") {
      setWarnings.setSurNameWarning(true);
      warning = true;
    }
    if (userInformation.phoneNumber == "") {
      setWarnings.setPhoneWarning(true);
      warning = true;
    } else if (!phonePattern.test(userInformation.phoneNumber)) {
      setWarnings.setPhoneWarning(true);
      setWarnings.setPhoneWarningMessage("*Ogiltigt telefonnummer");
      warning = true;
    }
    if (userInformation.email == "") {
      setWarnings.setEmailWarning(true);
      warning = true;
    } else if (!emailPattern.test(userInformation.email)) {
      setWarnings.setEmailWarning(true);
      setWarnings.setEmailWarningMessage("*Ogiltig e-postadress.");
      warning = true;
    }
    if (userInformation.street == "") {
      setWarnings.setStreetWarning(true);
      warning = true;
    }
    if (userInformation.postalCode == "") {
      setWarnings.setPostalWarning(true);
      warning = true;
    } else if (!postalPattern.test(userInformation.postalCode)) {
      setWarnings.setPostalWarning(true);
      setWarnings.setPostalWarningMessage("*Ogiltigt postnummer.");
      warning = true;
    } else if (!warning) {
      setChosenStep.setStepThree(false);
      setChosenStep.setStepFour(true);
      warning = false;
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
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: themeColors.text }}>Förnamn</Text>
              <Text
                style={[
                  styleCoatForm.warning,
                  { opacity: nameWarning.bool ? 1 : 0 },
                ]}>
                {nameWarning.message}
              </Text>
            </View>
            <TextInput
              value={userInformation.name}
              onChangeText={(text) => {
                setUserInformation.setName(text);
                setWarnings.setNameWarning(false);
              }}
              placeholder="Anna"
              placeholderTextColor="#808080"
              style={styleCoatForm.input}></TextInput>
          </View>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: themeColors.text }}>Efternamn</Text>
              <Text
                style={[
                  styleCoatForm.warning,
                  { opacity: surnameWarning.bool ? 1 : 0 },
                ]}>
                {surnameWarning.message}
              </Text>
            </View>
            <TextInput
              value={userInformation.suename}
              onChangeText={(text) => {
                setUserInformation.setSurname(text);
                setWarnings.setSurNameWarning(false);
              }}
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
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: themeColors.text }}>Telefonnummer</Text>
              <Text
                style={[
                  styleCoatForm.warning,
                  { opacity: phoneWarning.bool ? 1 : 0 },
                ]}>
                {phoneWarning.message}
              </Text>
            </View>
            <TextInput
              keyboardType="phone-pad"
              value={userInformation.phoneNumber}
              onChangeText={(text) => {
                setUserInformation.setPhoneNumber(text);
                setWarnings.setPhoneWarning(false);
              }}
              placeholder="070-1235678"
              placeholderTextColor="#808080"
              style={styleCoatForm.input}></TextInput>
          </View>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: themeColors.text }}>Mailadress</Text>
              <Text
                style={[
                  styleCoatForm.warning,
                  { opacity: emailWarning.bool ? 1 : 0 },
                ]}>
                {emailWarning.message}
              </Text>
            </View>
            <TextInput
              keyboardType="email-address"
              value={userInformation.email}
              onChangeText={(text) => {
                setUserInformation.setEmail(text);
                setWarnings.setEmailWarning(false);
              }}
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
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: themeColors.text }}>Gata</Text>
              <Text
                style={[
                  styleCoatForm.warning,
                  { opacity: streetWarning.bool ? 1 : 0 },
                ]}>
                {streetWarning.message}
              </Text>
            </View>
            <TextInput
              value={userInformation.street}
              onChangeText={(text) => {
                setUserInformation.setStreet(text);
                setWarnings.setStreetWarning(false);
              }}
              placeholder="Adressvägen 17"
              placeholderTextColor="#808080"
              style={styleCoatForm.input}></TextInput>
          </View>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: themeColors.text }}>Postnummer</Text>
              <Text
                style={[
                  styleCoatForm.warning,
                  { opacity: postalWarning.bool ? 1 : 0 },
                ]}>
                {postalWarning.message}
              </Text>
            </View>
            <TextInput
              value={userInformation.postalCode}
              onChangeText={(text) => {
                setUserInformation.setPostalCode(text);
                setWarnings.setPostalWarning(false);
              }}
              placeholder="233 33"
              placeholderTextColor="#808080"
              style={styleCoatForm.input}></TextInput>
          </View>
        </View>
        <Pressable
          style={checkboxStyle.button}
          onPress={() => {
            continueToNext();
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
