import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { adminHooks } from "../data/adminStoreHooks";
import {
  checkboxStyle,
  styleCoatForm,
  stylesModalForm,
} from "../StyleSheet/formStyles";
// import { TextInput } from "react-native-web";
import { useState } from "react";
import { auth, db } from "../firebaseConfigTwo";
import { addDoc, collection } from "firebase/firestore";

const AddModal = ({ from, fetchProducts }) => {
  const [color, setColor] = useState("");
  // const [status, setStatus] = useState(true)
  const [colorGroup, setColorGroup] = useState("");
  const [url, setUrl] = useState("");
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const { openAddWool, setOpenAddWool, openAddLeather, setOpenAddLeather } =
    adminHooks();
  const handleAddWool = async () => {
    if (!auth.currentUser) {
      setWarning(true);
      setWarningMessage("Måste logga in för att göra ändringar");
      return;
    } else if (color === "" || url === "" || colorGroup === "") {
      setWarning(true);
      setWarningMessage("Vänligen fyll i alla fält");
      return;
    } else {
      const collectionName = from === "wool" ? "wool" : "leather";
      try {
        const docRef = await addDoc(collection(db, collectionName), {
          color: color,
          colorGroup: colorGroup,
          status: true,
          url: url,
        });
        setColor("");
        setColorGroup("");
        setUrl("");
        setOpenAddWool(false);
        setOpenAddLeather(false);

        fetchProducts();
      } catch (error) {
        setWarning(true);
        setWarningMessage(
          "Fel med databasen, försök igen senare. Eller kontakta support om felet kvarstår"
        );
      }
    }
  };
  let material = from === "wool" ? "ull" : "läder";

  return (
    <View>
      <Modal
        visible={from === "wool" ? openAddWool : openAddLeather}
        transparent={true}>
        <View style={stylesModalForm.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={{ textAlign: "center" }}>Lägg till {material}</Text>
            <View style={{ margin: 10 }}>
              <Text>Färg: </Text>
              <TextInput
                value={color}
                onChangeText={setColor}
                style={styles.input}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Text>Färg grupp</Text>
              <TextInput
                value={colorGroup}
                onChangeText={setColorGroup}
                style={styles.input}
              />
            </View>

            <View style={{ margin: 10 }}>
              <Text>Url till bild</Text>
              <TextInput
                value={url}
                onChangeText={setUrl}
                style={styles.input}
              />
            </View>
            {warning && (
              <Text style={[styleCoatForm.warning, { textAlign: "center" }]}>
                {warningMessage}
              </Text>
            )}
            <View style={{ flexDirection: "row", margin: 10 }}>
              <Pressable
                onPress={() =>
                  from === "wool"
                    ? setOpenAddWool(false)
                    : setOpenAddLeather(false)
                }>
                <Text style={checkboxStyle.button}>Avbryt</Text>
              </Pressable>
              <Pressable onPress={handleAddWool}>
                <Text style={styles.button}>Lägg till</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default AddModal;
const styles = StyleSheet.create({
  modalContent: {
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    width: 200,
    height: 40,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    padding: 3,
    paddingLeft: 10,
  },
  button: {
    placeSelf: "center",
    backgroundColor: "#82BCBD",
    padding: 8,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
    textAlign: "center",
    color: "#000",
    fontWeight: "600",
    margin: 12,
  },
});
