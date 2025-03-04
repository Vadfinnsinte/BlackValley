import { signInWithEmailAndPassword } from "firebase/auth";
import { styleCoatForm, stylesModalForm } from "../constants/formStyles";
import { adminHooks } from "../data/adminStoreHooks";
import { auth } from "../firebaseConfigTwo";
import { useState } from "react";
import { Colors } from "../constants/Colors";

const {
  Modal,
  TextInput,
  Text,
  View,
  Pressable,
  useWindowDimensions,
  useColorScheme,
  StyleSheet,
} = require("react-native");

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginModalOpen, setLoginModalOpen, setUserId } = adminHooks();
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;
  const { width } = useWindowDimensions();
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("loged in : ", auth.currentUser);
      setUserId(auth.currentUser.uid);
    } catch (error) {
      console.log("something went wrong with error: ", error);
    }
  };
  return (
    <Modal visible={loginModalOpen} transparent={true}>
      <View style={stylesModalForm.modalOverlay}>
        <View style={[styles.modalContent]}>
          <View style={{ alignSelf: "center", width: "70%" }}>
            <View style={{ margin: 10 }}>
              <Text style={{ alignSelf: "center" }}>Användarnamn</Text>
              <TextInput
                style={styles.input}
                placeholder="Användare"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={{ margin: 10 }}>
              <Text style={{ alignSelf: "center" }}> Lösenord</Text>
              <TextInput
                style={[styles.input]}
                placeholder="Lösenord"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
              }}>
              <Pressable
                style={[stylesModalForm.buttons, { backgroundColor: "#000" }]}
                onPress={() => setLoginModalOpen(false)}>
                <Text
                  style={{ color: themeColors.detail, textAlign: "center" }}>
                  Stäng
                </Text>
              </Pressable>
              <Pressable
                style={[
                  stylesModalForm.buttons,
                  {
                    backgroundColor: themeColors.detail,
                  },
                ]}
                onPress={handleLogin}>
                <Text style={{ color: "#000", textAlign: "center" }}>
                  Logga in
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  modalContent: {
    width: "55%",
    backgroundColor: "white",
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
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  //   inputSmall: {
  //     width: "100%",
  //     height: 40,
  //     backgroundColor: "#D9D9D9",
  //     borderRadius: 10,
  //     borderColor: "black",
  //     borderWidth: 1,
  //   },
});
