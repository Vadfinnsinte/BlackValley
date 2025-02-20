import {
  Pressable,
  Text,
  TextInput,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";
import { Colors } from "../constants/Colors";
import { styleCoatForm } from "../constants/formStyles";

const ContactForm = ({
  stepThree,
  setStepThree,
  stepOne,
  setStepOne,
  stepTwo,
  setStepTwo,
}) => {
  // -- colors and responsiv variables --
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const { width } = useWindowDimensions();
  //
  return (
    <View style={styleCoatForm.centerContent}>
      <Pressable
        style={{ alignSelf: "flex-end" }}
        onPress={() => {
          setStepThree(false);
          setStepTwo(true);
          //   setCollarForm(false);   LÄGG TILL EN VARIABEL SOM HAR KOLL PÅ VAR MAN VARIT!
        }}>
        <Text
          style={{
            color: themeColors.text,
            textDecorationLine: "underline",
            marginBottom: 6,
          }}>
          Tillbaka till steg 1
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
              placeholder="Anna"
              placeholderTextColor="#808080"
              style={styleCoatForm.input}></TextInput>
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Efternamn</Text>
            <TextInput
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
              placeholder="070-1235678"
              placeholderTextColor="#808080"
              style={styleCoatForm.input}></TextInput>
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Mailadress</Text>
            <TextInput
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
              placeholder="Adressvägen 17"
              placeholderTextColor="#808080"
              style={styleCoatForm.input}></TextInput>
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Postnummer</Text>
            <TextInput
              placeholder="233 33"
              placeholderTextColor="#808080"
              style={styleCoatForm.input}></TextInput>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContactForm;
