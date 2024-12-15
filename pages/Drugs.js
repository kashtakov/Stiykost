import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";import SubstanceUseDisorderScreen from "../components/SubstanceUseDisorderScreen";
SubstanceUseDisorderScreen

function DrugsScreen({navigation}) {

  useFocusEffect(()=>{
    navigation.setOptions({ headerStyle: {backgroundColor: "#e62d7a" }, headerTintColor: '#fff'  })
  })

    return (
      <SubstanceUseDisorderScreen/>
    );
  }

  export default DrugsScreen;