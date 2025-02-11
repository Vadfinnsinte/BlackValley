import {SafeAreaView, Text } from 'react-native';
import CustomHeader from '../../components/CustomHeader';


export default function OrderScreen() {
  return (
    <SafeAreaView>
     <CustomHeader/> 
    <Text>
     Beställ här
    </Text>
    </SafeAreaView>
  );
}

