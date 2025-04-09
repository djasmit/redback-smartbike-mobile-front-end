import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";

const Setting = ({ settingTitle, icon, link }) => {
  return (
    <TouchableOpacity
      onPress={() => router.push(link)}
      className="flex-row gap-4 items-baseline  my-2"
    >
      <View>{icon}</View>
      <Text className="font-semibold">{settingTitle}</Text>

      <MaterialIcons
        className="ml-auto"
        name="navigate-next"
        size={24}
        color="black"
      />
    </TouchableOpacity>
  );
};

export default Setting;
