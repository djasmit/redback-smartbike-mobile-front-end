import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const WorkoutCard = ({ title, image, bgColor }) => {
  return (
    <TouchableOpacity className="flex-1 aspect-video rounded-xl overflow-hidden">
      <LinearGradient
        colors={[bgColor, `${bgColor}60`]}
        start={[1, 0]} // Start from the left
        end={[0, 0]} // End on the right
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          padding: 12,
        }}
      >
        <View className=" flex-1 h-full justify-between">
          <Text className="text-3xl">{image}</Text>
          <Text className=" text-white text-lg font-bold ">{title}</Text>
        </View>
        <MaterialIcons name="navigate-next" size={24} color="white" />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default WorkoutCard;
