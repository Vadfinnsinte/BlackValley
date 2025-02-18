import { Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-web"
import { checkboxStyle } from "../app/(drawer)/(tabs)/order";


const CustomFormCoat = ({stepThree, setStepThree,stepOne, setStepOne, stepTwo, setStepTwo}) => {

    return (
        <View>
            <Text className="text-center text-xl"> Täcke </Text>
            <Pressable onPress={() => {setStepOne(true); setStepTwo(false)}}>
                <Text style={checkboxStyle.button} >Tillbaka till steg 1</Text>                  
            </Pressable> 
         {/* LÄgg till NOLLSTÄLLNING av AKTIVA FormVariabeln  */}
        </View>
    )
}

export default CustomFormCoat