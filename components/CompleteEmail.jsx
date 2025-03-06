import {
  View,
  Text,
  Pressable,
  useColorScheme,
  useWindowDimensions,
  Modal,
} from "react-native";
import { useState } from "react";
import { formStore } from "../data/formStoreHooks";
import { Colors } from "../constants/Colors";
import { styleCoatForm, stylesModalForm } from "../StyleSheet/formStyles";

import { sendEmail } from "../functions/sendOrderEmail";
import {
  resetStoreVariables,
  resetStoreVariablesHard,
} from "../functions/resetStoreVariables";

const CompleteEmail = () => {
  const {
    selectedCollarVariables,
    selectedCoatVariables,
    comingFromForm,
    specialOrder,
    userInformation,
    setChosenStep,
    setOrderMessage,
    orderMessage,
    setChosenForm,
    setChosenProduct,
    setSelectedCollarVariables,
    setSelectedCoatVariables,
    setSpecialOrder,
    setUserInformation,
    setOpenSent,
    sent,
    setSent,
  } = formStore();

  const [item, setItem] = useState(true);
  const [openCancel, setOpenCancel] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [onlySave, setOnlySave] = useState(true);

  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const { width } = useWindowDimensions();
  //
  let keepSome = true;
  let buyerObj = {};
  let commingSwe;

  if (comingFromForm === "Coat") {
    commingSwe = "Täcke";
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
    commingSwe = "Halsband";
    buyerObj = {
      modell: selectedCollarVariables.selectedModalCollar,
      measurement: selectedCollarVariables.lengthCollar,
      width: selectedCollarVariables.collarWidth,
      materialColor: selectedCollarVariables.selectedLeather,
      brodyrColour: selectedCollarVariables.brodyrColor,
      metal: selectedCollarVariables.selectedMetal,
      font: selectedCollarVariables.selectedFont,
      text: selectedCollarVariables.brodyrText,
      comment: selectedCollarVariables.commentsCollar,
    };
  }
  if (comingFromForm === "Other") {
    commingSwe = "Annat";
    buyerObj = {
      modell: "inte aplicerbart",
      measurement: "inte aplicerbart",
      width: "inte aplicerbart",
      materialColor: "inte aplicerbart",
      brodyrColour: "inte aplicerbart",
      metal: "inte aplicerbart",
      font: "inte aplicerbart",
      text: "inte aplicerbart",
      comment: specialOrder,
    };
  }
  let prevOrder = {
    messageCoat:
      orderMessage?.messageCoat?.length > 0
        ? orderMessage.messageCoat.join("\n\n")
        : "",
    messageCollar:
      orderMessage?.messageCollar?.length > 0
        ? orderMessage.messageCollar.join("\n\n")
        : "",
    messageOther:
      orderMessage?.messageOther?.length > 0
        ? orderMessage.messageOther.join("\n\n")
        : "",
  };

  let message = ` 
  
Produkt information:  ${commingSwe}
Modell:  ${buyerObj.modell}
Mått:  ${buyerObj.measurement && buyerObj.measurement}
Färg på ${commingSwe}:  ${buyerObj.materialColor}
Brodyr Färg:  ${buyerObj.brodyrColour}
Text (blir exakt som skrivet här):  ${buyerObj.text}
Besnören:  ${buyerObj.legStrings ? buyerObj.legStrings : "inte aplicerbart"}
Metall på ringar:  ${buyerObj.metal ? buyerObj.metal : "inte aplicerbart"}
Kommentarer och önskemål:  ${buyerObj.comment}
  `;
  if (!item) {
    message = "";
  }

  const cancelOrder = () => {
    setItem(true);
    keepSome = false;
    setOpenCancel(false);
    closeAllSteps();
  };
  const closeAllSteps = () => {
    setChosenStep.setStepOne(true);
    setChosenStep.setStepTwo(false);
    setChosenStep.setStepThree(false);
    setChosenStep.setStepFour(false);
    if (keepSome) {
      resetStoreVariables(
        setChosenForm,
        setChosenProduct,
        setSelectedCollarVariables,
        setSelectedCoatVariables,
        setSpecialOrder
      );
    } else {
      resetStoreVariablesHard(
        setChosenForm,
        setChosenProduct,
        setSelectedCollarVariables,
        setSelectedCoatVariables,
        setSpecialOrder,
        setUserInformation,
        setOrderMessage
      );
      keepSome = true;
    }
  };

  const saveOrder = (shouldClose = true) => {
    console.log(onlySave);

    if (comingFromForm === "Coat") {
      setOrderMessage.setMessageCoat([...orderMessage.messageCoat, message]);
    } else if (comingFromForm === "Collar") {
      setOrderMessage.setMessageCollar([
        ...orderMessage.messageCollar,
        message,
      ]);
    } else if (comingFromForm === "Other") {
      setOrderMessage.setMessageOther([...orderMessage.messageOther, message]);
    }

    resetStoreVariables(
      setChosenForm,
      setChosenProduct,
      setSelectedCollarVariables,
      setSelectedCoatVariables,
      setSpecialOrder
    );

    if (shouldClose) {
      closeAllSteps();
    }
  };
  const completeOrder = () => {
    keepSome = false;
    saveOrder();
    sendEmail(userInformation, orderMessage, setSent);

    setOpenSent(true);
  };
  return (
    <View
      style={[
        styleCoatForm.centerContent,
        { backgroundColor: "#D9D9D9", padding: width > 500 ? 10 : 0 },
      ]}>
      <Pressable
        style={{ alignSelf: "flex-end" }}
        onPress={() => {
          setChosenStep.setStepThree(true);
          setChosenStep.setStepFour(false);
          setItem(true);
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
      <View style={{ margin: width > 500 ? 20 : 5 }}>
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

        <View
          style={
            width > 780
              ? { maxWidth: 600, margin: 10, minWidth: 400 }
              : { margin: 10 }
          }>
          <Text
            style={{ fontSize: 18, flexWrap: "wrap", wordBreak: "break-word" }}>
            {/* Produkt information: */}
            {message}
          </Text>
          <Text style={{ fontSize: 18 }}>{prevOrder.messageCoat}</Text>
          <Text style={{ fontSize: 18 }}>{prevOrder.messageCollar}</Text>
          <Text style={{ fontSize: 18 }}>{prevOrder.messageOther}</Text>
        </View>

        <View
          style={
            width > 780
              ? { flexDirection: "row", justifyContent: "space-between" }
              : {}
          }>
          <Pressable
            onPress={() => {
              // setOnlySave(true);
              saveOrder(true);
            }}>
            <Text
              style={[
                stylesModalForm.buttons,
                { color: "#000", backgroundColor: themeColors.detail },
              ]}>
              Lägg till en produkt
            </Text>
          </Pressable>
          <Pressable onPress={() => setOpenCancel(true)}>
            <Text
              style={[
                stylesModalForm.buttons,
                { backgroundColor: "#000", color: themeColors.detail },
              ]}>
              Avbryt
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setItem(false);
              saveOrder(false);
              setConfirm(true);
            }}>
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
            <View
              style={{
                justifyContent: "center",
                flexDirection: width > 780 ? "row" : "column",
              }}>
              <Pressable
                style={[stylesModalForm.buttons, { backgroundColor: "#000" }]}
                onPress={() => setOpenCancel(false)}>
                <Text
                  style={{ color: themeColors.detail, textAlign: "center" }}>
                  Avbryt
                </Text>
              </Pressable>
              <Pressable
                style={[
                  stylesModalForm.buttons,
                  {
                    backgroundColor: themeColors.detail,
                  },
                ]}
                onPress={cancelOrder}>
                <Text style={{ color: "#000", textAlign: "center" }}>
                  Radera information
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={confirm} transparent={true}>
        <View style={stylesModalForm.modalOverlay}>
          <View style={[stylesModalForm.modalContent, { maxWidth: 300 }]}>
            <View>
              <Text style={stylesModalForm.modalText}>
                Skicka beställningen?
              </Text>
              <View
                style={{
                  flexDirection: width > 780 ? "row" : "column",
                  justifyContent: "space-between",
                }}>
                <Pressable
                  style={[
                    stylesModalForm.buttons,
                    { backgroundColor: "#000", minWidth: 50 },
                  ]}
                  onPress={() => setConfirm(false)}>
                  <Text
                    style={{ color: themeColors.detail, textAlign: "center" }}>
                    Nej
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    stylesModalForm.buttons,
                    {
                      backgroundColor: themeColors.detail,
                      minWidth: 50,
                    },
                  ]}
                  onPress={() => {
                    completeOrder();
                  }}>
                  <Text style={{ color: "#000", textAlign: "center" }}>Ja</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CompleteEmail;
