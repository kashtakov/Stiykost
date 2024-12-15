import { ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import CollectiveThinkingScreen from "../components/CollectiveThinkingScreen";
import RiskWarningScreen from "../components/RiskWarningScreen";
import SelfFulfillingProphecyScreen from "../components/SelfFulfillingProphecyScreen";
import SocialIsolationActionsScreen from "../components/SocialIsolationActionsScreen";

function GurtabilityScreen({navigation}) {
  useFocusEffect(()=>{
    navigation.setOptions({ headerStyle: {backgroundColor: "#f99b10" }, headerTintColor: '#fff'  })
  })

    return (
      <ScrollView>
          <CollectiveThinkingScreen/>
          <RiskWarningScreen/>
          <SelfFulfillingProphecyScreen/>
          <SocialIsolationActionsScreen/>
      </ScrollView>
    );
  }

  export default GurtabilityScreen;