import { View, Text, Image } from "react-native";
import React from "react";

const LoginIcon = ({ image }) => {
  return (
    <View className="rounded-full bg-white w-16 aspect-square flex justify-center items-center">
      <Image className="w-12 h-12" source={image} />
    </View>
  );
};

export default LoginIcon;
