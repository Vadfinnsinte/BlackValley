import { View, TextInput, Button, Alert } from "react-native";
import emailjs from "@emailjs/browser";
import { publicKey, service, template } from "../firebaseConfigTwo";

export const sendEmail = (userInformation, orderMessage, setSent) => {
  const nameOfSender = `${userInformation.name} ${userInformation.surname}`;

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
      setSent("Vi har tagit emot din beställning och hör av oss inom kort.");
      console.log("E-post skickad!", "Vi har tagit emot ditt meddelande.");
    })
    .catch((error) => {
      setSent(
        "Beställning misslyckad, försök igen senare eller hör av dig till: blackvalley.sheepfarm@outlook.com."
      );
      console.log("Fel!", "Något gick fel, försök igen.");
      console.error("EmailJS Error:", error);
    });
};
