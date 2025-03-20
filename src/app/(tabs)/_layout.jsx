import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#11111180",
          borderRadius: 100,
          marginHorizontal: 20,
          marginBottom: 32,
          height: 52,
          paddingTop: 8,
          position: "absolute",
          zIndex: 10,
          overflow: "hidden",
          shadowColor: "",
          borderWidth: 1,
          borderColor: "#11111180",
        },
        tabBarItemStyle: {
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "home",
          tabBarIcon: ({ focused }) => (
            <>
              <Entypo
                name="home"
                size={24}
                color={focused ? "#28887D" : "white"}
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          title: "statistics",
          tabBarIcon: ({ focused }) => (
            <>
              <Entypo
                name="bar-graph"
                size={24}
                color={focused ? "#28887D" : "white"}
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="workouts"
        options={{
          title: "workouts",
          tabBarIcon: ({ focused }) => (
            <>
              <MaterialCommunityIcons
                name="weight-lifter"
                size={24}
                color={focused ? "#28887D" : "white"}
              />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "settings",
          tabBarIcon: ({ focused }) => (
            <>
              <Entypo
                name="cog"
                size={24}
                color={focused ? "#28887D" : "white"}
              />
            </>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
