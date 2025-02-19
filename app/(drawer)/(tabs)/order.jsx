import woolBg from "../../../assets/images/woolImage.jpg";
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  useColorScheme,
  View,
} from "react-native";
// import { Ionicons } from '@expo/vector-icons'
import { checkboxStyle } from "../../../constants/formStyles";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import CustomFormCoat from "../../../components/CustomFormCoat";
import CustomFormCollar from "../../../components/CustomFormCollar";
import CustomFormOther from "../../../components/CustomFormOther";
import  CheckBox  from "../../../components/CheckBox"
const OrderScreen = (
) => {
  const [coat, setCoat] = useState(false);
  const [coatForm, setCoatForm] = useState(false);
  const [collar, setCollar] = useState(false);
  const [collarForm, setCollarForm] = useState(false);
  const [other, setOther] = useState(false);
  const [otherForm, setOtherForm] = useState(false);
  const [warning, setWarning] = useState(false);
  const [warningmessage, setWarningmessage] = useState(
    "Please check one of the boxes"
  );
  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(true);
  const [stepThree, setStepThree] = useState(true);
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme] || Colors.light;

  const openCustomForm = () => {
    if (coat) {
      setCoatForm(true);
      setStepOne(false);
      setStepTwo(true);
    } else if (collar) {
      setCollarForm(true);
      setStepOne(false);
      setStepTwo(true);
    } else if (other) {
      setOtherForm(true);
      setStepOne(false);
      setStepTwo(true);
    } else {
      setWarning(true);
    }
  };
  return (
    <ImageBackground
      source={woolBg}
      style={checkboxStyle.imageBackground}
      resizeMode="cover">
      <View style={themeColors.overlay}>
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }} keyboardShouldPersistTaps="handled">
        <SafeAreaView
          style={{ backgroundColor: themeColors.background, flex: 1 }}
          className="mx-10">
          <View style={checkboxStyle.container}>
            <View style={checkboxStyle.containerText}>
              <Text
                className="text-2xl mb-3"
                style={{ color: themeColors.text }}>
                Här kan du lägga din beställnig
              </Text>
              <Text style={{ color: themeColors.text }}>
                Skicka en beställning/förfrågan så återkommer vi med
                prisinformation. Vänligen läs igenom våra köpvillkor (ADD
                MODAL), dessa godkänner du genom att beställa.
              </Text>
            </View>
            <View
              style={[
                checkboxStyle.blueSeperator,
                { backgroundColor: themeColors.detail },
              ]}>
              <Text
                className="text-xl text-center"
                style={{ color: "#11181C" }}>
                1. Vänligen välj vad du vill beställa
              </Text>
            </View>
            {stepOne && (
              <View>
                <CheckBox 
                coat={coat} 
                setCoat={setCoat} 
                collar={collar} 
                setCollar={setCollar} 
                other={other} 
                setOther={setOther}
                setWarning={setWarning}
                warningmessage={warningmessage}
                warning={warning}
                />
                <Pressable onPress={openCustomForm}>
                  <Text style={checkboxStyle.button}>Gå vidare</Text>
                </Pressable>
                <Text
                  style={{ color: themeColors.text }}
                  className="text-center text-xs -mt-2">
                  Om du vill beställa flera produkter så finns det alternativet
                  i nästa steg.
                </Text>
              </View>
            )}

            <View
              style={[
                checkboxStyle.blueSeperator,
                { backgroundColor: themeColors.detail },
              ]}>
              <Text
                className="text-xl text-center"
                style={{ color: "#11181C" }}>
                2. Mått, färg och specifikationer.
              </Text>
            </View>
            {stepTwo && (
              <View>
                {coatForm && (
                  <CustomFormCoat
                    setStepThree={setStepThree}
                    stepThree={stepThree}
                    stepOne={stepOne}
                    setStepOne={setStepOne}
                    stepTwo={stepTwo}
                    setStepTwo={setStepTwo}
                    setCoatForm={setCoatForm}
                  />
                )}
                {collarForm && (
                  <CustomFormCollar
                    setStepThree={setStepThree}
                    stepThree={stepThree}
                    stepOne={stepOne}
                    setStepOne={setStepOne}
                    stepTwo={stepTwo}
                    setStepTwo={setStepTwo}
                    setCollarForm={setCollarForm}
                  />
                )}
                {otherForm && (
                  <CustomFormOther
                    setStepThree={setStepThree}
                    stepThree={stepThree}
                    stepOne={stepOne}
                    setStepOne={setStepOne}
                    stepTwo={stepTwo}
                    setStepTwo={setStepTwo}
                    setOtherForm={setOtherForm}
                  />
                )}
              </View>
            )}

            <View
              style={[
                checkboxStyle.blueSeperator,
                { backgroundColor: themeColors.detail },
              ]}>
              <Text
                className="text-xl text-center"
                style={{ color: "#11181C" }}>
                3. Kontaktuppgifter.
              </Text>
            </View>
            {/* LÄGG IN COMPONENT. */}
          </View>
        </SafeAreaView>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default OrderScreen;
