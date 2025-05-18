import { View, Text } from "react-native";
import React from "react";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Platform } from "react-native";

const CustomSafeArea = ({ children, bgColour = "white" }) => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{ paddingTop: Platform.OS === "android" ? insets.top : 0 }}
        className={`flex-1 bg-${bgColour}`}
      >
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default CustomSafeArea;
