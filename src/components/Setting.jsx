import { View, Text } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Setting = ({ settingTitle }) => {
  return (
    <View className="flex-row justify-between my-2">
      <Text className="font-semibold">{settingTitle}</Text>
      <MaterialIcons name="navigate-next" size={24} color="black" />
    </View>
  );
};

export default Setting;
