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
    // Special order - variables
    specialOrder,
    userInformation,
  } = formStore();
  const [item, setItem] = useState(true);
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
    if (item) {
      setItem(false);
    }
  }
  return (
    <View style={[styleCoatForm.centerContent, { backgroundColor: "#D9D9D9" }]}>
      <Pressable
        style={{ alignSelf: "flex-end" }}
        onPress={() => {
          setStepThree(true);
          setStepFour(false);
        }}>
        <Text
          style={{
            color: "#000",
            textDecorationLine: "underline",
            marginBottom: 6,
          }}>
          Tillbaka till kontakt.
        </Text>
      </Pressable>
      <View style={{ margin: 20 }}>
        <Text
          style={{
            color: "#000",
            fontSize: 23,
            marginBottom: 10,
            textAlign: "center",
          }}>
          Beställning till Black Valley.
        </Text>
        <View style={styleCoatForm.contactInfoConatainer}>
          <View style={{ alignSelf: "center" }}>
            <Text
              style={{
                color: "#000",
                textAlign: "center",
                fontSize: 20,
              }}>
              Din informarion:
            </Text>
            <Text style={styleCoatForm.contactText}>
              Namn: {userInformation.name}, {userInformation.surname}
            </Text>
            <Text style={styleCoatForm.contactText}>
              Telefonnummer: {userInformation.phoneNumber}
            </Text>
            <Text style={styleCoatForm.contactText}>
              Mailadress: {userInformation.email}
            </Text>
            <Text style={styleCoatForm.contactText}>
              Adress: {userInformation.street}, {userInformation.postalCode}
            </Text>
          </View>
        </View>
        {item ? (
          <View style={styleCoatForm.productInformationContainer}>
            <Text
              style={{ fontSize: 23, marginBottom: 10, textAlign: "center" }}>
              Produkt information:
            </Text>
            <Text style={styleCoatForm.productText}>
              Modell: {buyerObj.modell}
            </Text>
            {buyerObj.measurement && (
              <Text style={styleCoatForm.productText}>
                Mått: {buyerObj.measurement}
              </Text>
            )}
            <Text style={styleCoatForm.productText}>
              Färg på {comingFromForm}: {buyerObj.materialColor}
            </Text>
            <Text style={styleCoatForm.productText}>
              Brodyr Färg: {buyerObj.brodyrColour}
            </Text>
            <Text style={styleCoatForm.productText}>Font: {buyerObj.font}</Text>
            <Text style={styleCoatForm.productText}>
              Text (blir exakt som skrivet här): {buyerObj.text}
            </Text>
            {buyerObj.legStrings && (
              <Text style={styleCoatForm.productText}>
                Besnören: {buyerObj.legStrings}
              </Text>
            )}
            {buyerObj.metal && (
              <Text style={styleCoatForm.productText}>
                Metall på ringar: {buyerObj.metal}
              </Text>
            )}
            <Text style={styleCoatForm.productText}>
              Kommentarer och önskemål: {buyerObj.comment}
            </Text>
          </View>
        ) : (
          <View>
            <Text style={styleCoatForm.productText}>
              Ditt meddelande: {specialOrder}
            </Text>
            <Text style={styleCoatForm.productText}>
              Vi kommer att höra av oss till dig med pris och om vi behöver
              förtydliganden.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default CompleteEmail;
