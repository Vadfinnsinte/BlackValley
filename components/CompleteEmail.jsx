const {
  View,
  Text,
  Pressable,
  useColorScheme,
  useWindowDimensions,
  Modal,
  StyleSheet,
} = require("react-native");
import { useState } from "react";
import { formStore } from "../data/formStoreHooks";
import { Colors } from "../constants/Colors";
import { styleCoatForm, stylesModalForm } from "../constants/formStyles";

const CompleteEmail = () => {
  const {
    // Coat Form - Variables
    selectedCollarVariables,
    selectedCoatVariables,

    comingFromForm,
    //
    // Collar form - Variables

    // Special order - variables
    specialOrder,
    userInformation,
    setChosenStep,
  } = formStore();
  const [item, setItem] = useState(true);
  const [openCancel, setOpenCancel] = useState(false);
  // colors and responsiv variables.
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const { width } = useWindowDimensions();
  //

  let buyerObj = {};

  if (comingFromForm === "Coat") {
    buyerObj = {
      modell: selectedCoatVariables.selectedModelCoat,
      measurement: selectedCoatVariables.measurementsCoat,
      materialColor: selectedCoatVariables.selectedColor,
      brodyrColour: selectedCoatVariables.brodyrColor,
      font: selectedCoatVariables.selectedFont,
      text: selectedCoatVariables.brodyrText,
      legStrings: selectedCoatVariables.legString ? "Ja" : "Nej",
      comment: selectedCoatVariables.commentsCoat,
    };
  }
  if (comingFromForm === "Collar") {
    buyerObj = {
      modell: selectedCollarVariables.selectedModalCollar,
      measurement: selectedCollarVariables.lengthCollar,
      width: selectedCollarVariables.collarWidth,
      materialColor: selectedCollarVariables.selectedLeather,
      brodyrColour: selectedCollarVariables.brodyrColor,
      metal: selectedCollarVariables.selectedMetal,
      font: selectedCollarVariables.selectedFont,
      text: selectedCollarVariables.brodyrText,
      // legStrings: legString ? "Ja" : "Nej",
      comment: selectedCollarVariables.commentsCollar,
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
          setChosenStep.setStepThree(true);
          setChosenStep.setStepFour(false);
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
          <View
            style={
              width > 780
                ? { maxWidth: 450, margin: 10, minWidth: 400 }
                : { margin: 10 }
            }>
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
        <View
          style={
            width > 780
              ? { flexDirection: "row", justifyContent: "space-between" }
              : {}
          }>
          <Pressable onPress={() => setOpenCancel(true)}>
            <Text
              style={[
                stylesModalForm.buttons,
                { backgroundColor: "#000", color: themeColors.detail },
              ]}>
              Avbryt
            </Text>
          </Pressable>
          <Pressable>
            <Text
              style={[
                stylesModalForm.buttons,
                { color: "#000", backgroundColor: themeColors.detail },
              ]}>
              Skicka beställning
            </Text>
          </Pressable>
        </View>
      </View>
      <Modal
        visible={openCancel}
        transparent={true}
        onRequestClose={() => setOpenCancel(false)}>
        <View style={stylesModalForm.modalOverlay}>
          <View style={stylesModalForm.modalContent}>
            <Text style={stylesModalForm.modalText}>
              Detta kommer ta bort all information.
            </Text>
            <Text style={stylesModalForm.modalText}>
              Är du säker på att du vill avbryta beställningen?
            </Text>
            <Text style={stylesModalForm.modalText}>
              Vill du ändra infromation välj avbryt och klicka på gå
              tillbaka(längst upp på granska).
            </Text>
            <Pressable onPress={() => setOpenCancel(false)}>
              <Text>Avbryt</Text>
            </Pressable>
            <Pressable onPress={() => setOpenCancel(false)}>
              <Text>Ta bort informationen</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CompleteEmail;
