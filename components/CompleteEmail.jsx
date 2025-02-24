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
    if (item === false) {
      setItem(true);
    }
  }
  if (comingFromForm === "Collar") {
    buyerObj = {};
  }
  if (comingFromForm === "Other") {
    buyerObj = {};
  }
  return (
    <View>
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
      <Text>Beställning till Black Valley.</Text>
      <Text>Modell: {buyerObj.modell}</Text>
      {item && <Text>Mått: {buyerObj.measurement}</Text>}
      <Text>
        Färg på {comingFromForm}: {buyerObj.materialColor}
      </Text>
      <Text>Brodyr Färg: {buyerObj.brodyrColour}</Text>
      <Text>Font: {buyerObj.font}</Text>
      <Text>Text (blir exakt som skrivet här): {buyerObj.text}</Text>
      {item && <Text>Besnören: {buyerObj.legStrings}</Text>}
      <Text>Kommentarer och önskemål: {buyerObj.comment}</Text>
    </View>
  );
};

export default CompleteEmail;
