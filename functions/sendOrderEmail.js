import { View, TextInput, Button, Alert } from "react-native";
import emailjs from "@emailjs/browser";
import { formValuesStore } from "../data/formValueStore";
import { publicKey, service, template } from "../firebaseConfigTwo";

export const sendEmail = (message) => {
  const { userInformation } = formValuesStore();
  const nameOfSender = userInformation.name + " " + userInformation.surname;

  const templateParams = {
    from_email: userInformation.email,
    message: message, // Meddelandetext
    user_name: nameOfSender,
  };

  emailjs
    .send(
      service, // ditt Service ID
      template, // Template ID
      templateParams,
      publicKey
    )
    .then((response) => {
      Alert.alert("E-post skickad!", "Vi har tagit emot ditt meddelande.");
    })
    .catch((error) => {
      Alert.alert("Fel!", "Något gick fel, försök igen.");
      console.error("EmailJS Error:", error);
    });
};
