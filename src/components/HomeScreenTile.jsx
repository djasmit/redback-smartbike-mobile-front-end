import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const HomeScreenTile = ({ tileTitle, icon }) => {
  return (
    <View className=" flex-1 aspect-square rounded-xl overflow-hidden">
      <LinearGradient
        colors={["#1C1C1E", "#212124"]}
        start={[0, 0]}
        end={[1, 0]}
        style={{ flex: 1 }}
      >
        <View className="flex-1 p-4">
          <View className="flex-row items-center justify-between">
            <Text className="text-white font-bold text-center">
              {tileTitle}
            </Text>
            <MaterialIcons name="navigate-next" size={24} color={"#EB7363"} />
          </View>
          <Text>
            <View className="flex-1 items-center justify-center">{icon}</View>
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default HomeScreenTile;
