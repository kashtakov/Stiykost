import React from "react";
import { View, Text, Linking, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerToggleButton,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

// Import screens
import AdaptationScreen from "./pages/Adaptation";
import ContentsScreen from "./pages/Contents";
import DrivingScreen from "./pages/Driving";
import DrugsScreen from "./pages/Drugs";
import GriefScreen from "./pages/Grief";
import IcoverScreen from "./pages/Icover";
import SkillsScreen from "./pages/Skills";
import SleepScreen from "./pages/Sleep";
import StressScreen from "./pages/Stress";
import GurtabilityScreen from "./pages/Gurtability";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require("./assets/logo126.png")}
          style={styles.logo}
          accessibilityLabel="App logo"
        />
      </View>

      {/* Drawer Items */}
      <DrawerItemList {...props} />

      {/* Social Media Links */}
      <View style={styles.socialMediaContainer}>
        <Ionicons
          name="logo-instagram"
          size={30}
          style={styles.socialIcon}
          onPress={() => Linking.openURL("https://instagram.com/126_brigade")}
          accessibilityLabel="Instagram"
        />
        <Ionicons
          name="logo-facebook"
          size={30}
          style={styles.socialIcon}
          onPress={() => Linking.openURL("https://facebook.com/126brigadatro")}
          accessibilityLabel="Facebook"
        />
        <Ionicons
          name="logo-youtube"
          size={30}
          style={styles.socialIcon}
          onPress={() => Linking.openURL("https://youtube.com/@126brigadatro")}
          accessibilityLabel="YouTube"
        />
      </View>
    </DrawerContentScrollView>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerPosition: "left",
          headerLeft: false,
          headerRight: () => <DrawerToggleButton />,
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
          drawerLabelStyle: { fontSize: 18 },
        }}
      >
        <Drawer.Screen
          name="Стрес"
          component={StressScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="thunderstorm-outline" size={24} color="#3b019a" />
            ),
          }}
        />
        <Drawer.Screen
          name="iCover"
          component={IcoverScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="eye-outline" size={24} color="#da0d09" />
            ),
          }}
        />
        <Drawer.Screen
          name="Адаптація"
          component={AdaptationScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="flower-outline" size={24} color="#0b8725" />
            ),
          }}
        />
        <Drawer.Screen
          name="Сон"
          component={SleepScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="moon-outline" size={24} color="#6aa6f9" />
            ),
          }}
        />
        <Drawer.Screen
          name="Алкоголь і наркотики"
          component={DrugsScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="wine-outline" size={24} color="#e62d7a" />
            ),
          }}
        />
        <Drawer.Screen
          name="Горе"
          component={GriefScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="heart-half-outline" size={24} color="#000609" />
            ),
          }}
        />
        <Drawer.Screen
          name="Управління стресом під час операцій"
          component={DrivingScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="build-outline" size={24} color="#fad707" />
            ),
          }}
        />
        <Drawer.Screen
          name="Згуртованність"
          component={GurtabilityScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="people-outline" size={24} color="#f99b10" />
            ),
          }}
        />
        <Drawer.Screen
          name="Скілли"
          component={SkillsScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="person-outline" size={24} color="#f99b10" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  socialMediaContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
    backgroundColor: "#5da665",
    padding: 10,
    borderRadius: 8,
  },
  socialIcon: {
    color: "#fff",
  },
});

export default App;
