import { Pressable, Text, View } from "react-native";
import { checkboxStyle } from "../app/(drawer)/(tabs)/order";
const CustomFormCollar = ({
  stepThree,
  setStepThree,
  stepOne,
  setStepOne,
  stepTwo,
  setStepTwo,
  setCollarForm,
}) => {
  return (
    <View>
      <Text className="text-center text-xl"> Halsband </Text>
      <Pressable
        onPress={() => {
          setStepOne(true);
          setStepTwo(false);
          setCollarForm(false);
        }}>
        <Text style={checkboxStyle.button}>Tillbaka till steg 1</Text>
      </Pressable>
      {/* LÄgg till NOLLSTÄLLNING av AKTIVA FormVariabeln  */}
    </View>
  );
};

export default CustomFormCollar;
