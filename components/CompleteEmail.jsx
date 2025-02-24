const {
  View,
  Text,
  Pressable,
  useColorScheme,
  useWindowDimensions,
} = require("react-native");
import { useState } from "react";
import { formStore } from "../data/formStoreHooks";
import { Colors } from "../constants/Colors";
import { styleCoatForm } from "../constants/formStyles";

const CompleteEmail = () => {
  const {
    // Coat Form - Variables
    selectedModelCoat,
    measurementsCoat,
    selectedColor,
    cosyCollarColor,
    brodyrColor,
    selectedFont,
    brodyrText,
    legString, // if true YES.
    commentsCoat,
    comingFromForm,
    setStepFour,
    setStepThree,
    //
    // Collar form - Variables
    selectedModalCollar,
    lengthCollar,
    collarWidth,
    selectedLeather,
    selectedMetal,
  } = formStore();
  const [item, setItem] = useState(false);
  // colors and responsiv variables.
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const { width } = useWindowDimensions();
  //
  let buyerObj = {};

  if (comingFromForm === "Coat") {
    buyerObj = {
      modell: selectedModelCoat,
      measurement: measurementsCoat,
      materialColor: selectedColor,
      brodyrColour: brodyrColor,
      font: selectedFont,
      text: brodyrText,
      legStrings: legString ? "Ja" : "Nej",
      comment: commentsCoat,
    };
  }
  if (comingFromForm === "Collar") {
    buyerObj = {
      modell: selectedModalCollar,
      measurement: lengthCollar,
      width: collarWidth,
      materialColor: selectedLeather,
      brodyrColour: brodyrColor,
      metal: selectedMetal,
      font: selectedFont,
      text: brodyrText,
      legStrings: legString ? "Ja" : "Nej",
      comment: commentsCoat,
    };
  }
  if (comingFromForm === "Other") {
    buyerObj = {};
  }
  return (
    <View style={styleCoatForm.centerContent}>
      <Pressable
        style={{ alignSelf: "flex-end" }}
        onPress={() => {
          setStepThree(true);
          setStepFour(false);
        }}>
        <Text
          style={{
            color: themeColors.text,
            textDecorationLine: "underline",
            marginBottom: 6,
          }}>
          Tillbaka till kontakt.
        </Text>
      </Pressable>
      <View style={{ margin: 20 }}>
        <Text
          style={{
            color: themeColors.text,
            fontSize: 23,
            marginBottom: 10,
            textAlign: "center",
          }}>
          Beställning till Black Valley.
        </Text>
        <Text
          style={{
            color: themeColors.text,
          }}>
          Modell: {buyerObj.modell}
        </Text>
        {buyerObj.measurement && (
          <Text
            style={{
              color: themeColors.text,
            }}>
            Mått: {buyerObj.measurement}
          </Text>
        )}
        <Text
          style={{
            color: themeColors.text,
          }}>
          Färg på {comingFromForm}: {buyerObj.materialColor}
        </Text>
        <Text
          style={{
            color: themeColors.text,
          }}>
          Brodyr Färg: {buyerObj.brodyrColour}
        </Text>
        <Text
          style={{
            color: themeColors.text,
          }}>
          Font: {buyerObj.font}
        </Text>
        <Text
          style={{
            color: themeColors.text,
          }}>
          Text (blir exakt som skrivet här): {buyerObj.text}
        </Text>
        {buyerObj.legStrings && (
          <Text
            style={{
              color: themeColors.text,
            }}>
            Besnören: {buyerObj.legStrings}
          </Text>
        )}
        {buyerObj.metal && (
          <Text
            style={{
              color: themeColors.text,
            }}>
            Metall på ringar: {buyerObj.metal}
          </Text>
        )}
        <Text
          style={{
            color: themeColors.text,
          }}>
          Kommentarer och önskemål: {buyerObj.comment}
        </Text>
      </View>
    </View>
  );
};

export default CompleteEmail;
