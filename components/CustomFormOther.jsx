import { Pressable, Text, TextInput, useColorScheme, View } from "react-native";
import { checkboxStyle, styleCoatForm } from "../constants/formStyles";
import { formStore } from "../data/formStoreHooks";
import { useEffect } from "react";
import { Colors } from "../constants/Colors";

const CustomFormOther = () => {
  const {
    stepThree,
    setStepThree,
    stepOne,
    setStepOne,
    stepTwo,
    setStepTwo,
    setOtherForm,
    comingFromForm,
    setComingFromForm,
  } = formStore();
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  useEffect(() => {
    setComingFromForm("Other");
  }, []);
  return (
    <View style={styleCoatForm.centerContent}>
      <Pressable
        style={{ alignSelf: "flex-end" }}
        onPress={() => {
          setStepOne(true);
          setStepTwo(false);
          setOtherForm(false);
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
      <Text style={{ color: themeColors.text }}> Annat </Text>
      <Text
        className="text-center text-xl"
        style={{ color: themeColors.detail }}>
        Special Beställnigar och beställning av koppel
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text style={{ color: themeColors.text }}>
          Skriv så detatljerat som möjligt, mått färger och om du har några
          fårgor.
        </Text>
        <TextInput
          style={[styleCoatForm.bigInput, { height: 160 }]}></TextInput>
        <Text style={{ color: themeColors.text }} className="text-sm">
          (symboler, andra färger?)
        </Text>
      </View>
      <Pressable
        onPress={() => {
          setStepThree(true);
          setOtherForm(false);
          setStepTwo(false);
        }}>
        <Text style={checkboxStyle.button}>Gå vidare</Text>
      </Pressable>
    </View>
  );
};

export default CustomFormOther;
