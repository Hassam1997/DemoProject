/** @format */

import React from "react";
import { View, Image, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors, Images, Metrics } from "../../theme";
import { Util } from "../../utils";
import { styles } from "./styles";
import {
  HomeScreen,
  EpisodesScreen,
} from "../../screens";

const navigationItems = [
  {
    label: "Home",
    icon: Images.tab.homeIcon,
    component: HomeScreen,
    customIconStyles: {},
  },
  {
    label: "Episodes",
    icon: Images.tab.feedbackIcon,
    component: EpisodesScreen,
    customIconStyles: {},
  },
];

const Tab = createBottomTabNavigator();

export default function BottomTab({ route }) {
  React.useLayoutEffect(() => {
    Util.notificationCount();
  }, [route]);
  return (
    <Tab.Navigator
      screenOptions={{
        // Tab Header
        headerShown: true,
        headerTitleAlign: "left",
        headerTitleStyle: {
          color: Colors.TEXT_GREY,
        },
        headerStyle: {
          backgroundColor: Colors.WHITE,
          borderBottomWidth: 0,
          shadowColor: "transparent",
          elevation: 0,
        },
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        // Tab Bottom
        tabBarActiveTintColor: Colors.BLACK,
        tabBarStyle: {
          borderTopEndRadius: 0,
          borderTopStartRadius: 0,
          borderTopWidth: 1,
          height: Util.isPlatformIOS()
            ? Metrics.screenHeight * 0.11
            : Metrics.ratio(80),
        },
      }}
    >
      {navigationItems.map(
        ({ label, icon, component, customIconStyles }, index) => {
          return (
            <Tab.Screen
              key={index.toString()}
              name={label}
              component={component}
              options={{
                tabBarIcon: ({ focused }) =>
                  focused ? (
                    <>
                      <Image
                        source={icon}
                        resizeMode="contain"
                        style={[
                          styles.icon,
                          { tintColor: Colors.BLACK },
                          customIconStyles,
                        ]}
                      />
                    </>
                  ) : (
                    <Image
                      source={icon}
                      resizeMode="contain"
                      style={[styles.icon, customIconStyles]}
                    />
                  ),
                tabBarLabelStyle: { ...styles.labelFont },
              }}
            />
          );
        }
      )}
    </Tab.Navigator>
  );
}
