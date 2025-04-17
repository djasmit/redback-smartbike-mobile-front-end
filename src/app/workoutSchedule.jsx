import { View, Text, SafeAreaView, Platform } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

import React from "react";

const workoutSchedule = () => {
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView
      style={{ padding: Platform.OS === "android" ? headerHeight : 0 }}
    >
      <Text>workoutSchedule</Text>
    </SafeAreaView>
  );
};

export default workoutSchedule;
