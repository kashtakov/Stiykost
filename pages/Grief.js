import { Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import GriefSupportScreen from "../components/GriefSupportScreen";

function GriefScreen({navigation}) {

  useFocusEffect(()=>{
    navigation.setOptions({ headerStyle: {backgroundColor: "#5e6061" }, headerTintColor: '#fff'  })
  })
  
    return (
      <GriefSupportScreen/>
    );
  }

  export default GriefScreen;