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
    stepThree,
    setStepThree,
    stepOne,
    setStepOne,
    stepTwo,
    setStepTwo,
    comingFromForm,
    setCollarForm,
    setOtherForm,
    setCoatForm,
    setStepFour,
    setUserInformation,
    userInformation,
  } = formStore();

  const goBack = () => {
    if (comingFromForm === "Collar") {
      setStepThree(false);
      setStepTwo(true);
      setCollarForm(true);
    }
    if (comingFromForm === "Coat") {
      setStepThree(false);
      setStepTwo(true);
      setCoatForm(true);
    }
    if (comingFromForm === "Other") {
      setStepThree(false);
      setStepTwo(true);
      setOtherForm(true);
    }
  };
  console.log(userInformation.street);

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
              value={userInformation.phoneNumber}
              onChangeText={(text) => setUserInformation.setPhoneNumber(text)}
              placeholder="070-1235678"
              placeholderTextColor="#808080"
              style={styleCoatForm.input}></TextInput>
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Mailadress</Text>
            <TextInput
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
            setStepThree(false);
            setStepFour(true);
          }}>
          <Text style={{ color: themeColors.detail }}>Granska</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ContactForm;
