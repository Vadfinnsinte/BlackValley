import { View, TextInput, Button, Alert } from "react-native";
import emailjs from "@emailjs/browser";
import { formValuesStore } from "../data/formValueStore";
import { publicKey, service, template } from "../firebaseConfigTwo";

export const sendEmail = (userInformation, orderMessage) => {
  const nameOfSender = `${userInformation.name} ${userInformation.surname}`;
  console.log("sent email");

  const formatMessageArray = (arr) => {
    if (Array.isArray(arr) && arr.length > 0) {
      return arr.map((item) => item).join("\n\n");
    }
    return "";
  };
  const message = `
    Namn: ${nameOfSender}
    Telefonnummer: ${userInformation.phoneNumber}
    Mailadress: ${userInformation.email}
    Adress: ${userInformation.street}, ${userInformation.postalCode}

     Beställning:
    ${formatMessageArray(orderMessage.messageCoat)}
    ${formatMessageArray(orderMessage.messageCollar)}
    ${formatMessageArray(orderMessage.messageOther)}
  `;
  const templateParams = {
    from_email: userInformation.email,
    message: message,
    user_name: nameOfSender,
  };

  emailjs
    .send(service, template, templateParams, publicKey)
    .then((response) => {
      Alert.alert("E-post skickad!", "Vi har tagit emot ditt meddelande.");
    })
    .catch((error) => {
      Alert.alert("Fel!", "Något gick fel, försök igen.");
      console.error("EmailJS Error:", error);
    });
};
