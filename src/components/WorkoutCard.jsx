import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const WorkoutCard = ({ title, image, bgColor }) => {
  return (
    <View
      className="w-full h-48 my-2 rounded-[48px] overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <Text className="absolute top-1/3 left-4 text-black font-bold text-3xl">
        {title}
      </Text>
      <Image
        className="w-56 h-44 absolute bottom-0 right-0"
        source={image}
        resizeMode="contain"
      />
    </View>
  );
};

export default WorkoutCard;
