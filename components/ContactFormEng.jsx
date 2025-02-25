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
import { formStore } from "../data/formStoreHooks";

const ContactFormEng = ({}) => {
  // -- colors and responsiv variables --
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const { width } = useWindowDimensions();
  const { comingFromForm, setChosenStep, setChosenForm } = formStore();

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
          Back to step 2
        </Text>
      </Pressable>
      <View>
        <Text
          className={`text-xl  ${width < 790 ? "text-center" : ""}`}
          style={{ color: themeColors.detail }}>
          Contact information
        </Text>
        <View
          style={[
            width > 750 ? styleCoatForm.flexBox : styleCoatForm.flexBoxSmall,
            { zIndex: 10 },
          ]}>
          <View>
            <Text style={{ color: themeColors.text }}>Name</Text>
            <TextInput
              placeholder="Anna"
              placeholderTextColor="#808080"
              style={styleCoatForm.input}></TextInput>
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Surname</Text>
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
            <Text style={{ color: themeColors.text }}>Phone number</Text>
            <TextInput
              placeholder="070-1235678"
              placeholderTextColor="#808080"
              style={styleCoatForm.input}></TextInput>
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Email</Text>
            <TextInput
              placeholder="example@example.com"
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
            <Text style={{ color: themeColors.text }}>Street</Text>
            <TextInput
              placeholder="Adressroad 17"
              placeholderTextColor="#808080"
              style={styleCoatForm.input}></TextInput>
          </View>
          <View>
            <Text style={{ color: themeColors.text }}>Postal code</Text>
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

export default ContactFormEng;
