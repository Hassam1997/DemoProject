import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  EpisodeDetail,
} from "../screens";
import { NavigationService } from "../utils";
import { Colors } from "../theme";
import {
  backButton,
  removeHeader,
  title,
} from "../utils/NavigatorHelper";
import BottomTab from "./bottom";

const Stack = createStackNavigator();

function StackScreens() {

  return (
    <Stack.Navigator
      initialRouteName={"HomeScreen"}
      screenOptions={{
        headerShown: true,
        ...backButton(),
        headerTitleAlign: "left",
        headerTitleStyle: {
          color: Colors.HEAD_TEXT,
        },
        headerStyle: {
          backgroundColor: Colors.white,
          borderBottomWidth: 0,
          shadowColor: "transparent",
          elevation: 0,
        },
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={BottomTab}
        options={{
          // ...removeHeaderLeft,
          // ...title("Sign In", 20, Fonts.inter.bold),
          ...removeHeader,
        }}
      />
      <Stack.Screen
        name="EpisodeDetail"
        component={EpisodeDetail}
      />
    </Stack.Navigator>
  );
}

const AppContainer = () => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <StackScreens />
    </NavigationContainer>
  );
};

export default AppContainer;
