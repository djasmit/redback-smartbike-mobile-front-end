import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const WorkoutCard = ({ title, image, bgColor }) => {
  return (
    <LinearGradient
      colors={[bgColor, "#ffffff"]}
      start={[0, 0]} // Start from the left
      end={[1, 0]} // End on the right
      style={{
        overflow: "hidden",
        borderRadius: 48,
        marginBottom: 4,
        marginTop: 4,
      }}
    >
      <View className="w-full h-48">
        <Text className="absolute top-1/3 left-4 text-black font-bold text-3xl">
          {title}
        </Text>
        <Image
          className="w-56 h-44 absolute bottom-0 right-0"
          source={image}
          resizeMode="contain"
        />
      </View>
    </LinearGradient>
  );
};

export default WorkoutCard;
