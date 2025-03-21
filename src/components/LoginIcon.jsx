import { View, Text, Image } from "react-native";
import React from "react";

const LoginIcon = ({ image }) => {
  return (
    <View className="rounded-full bg-white w-16 h-16  flex justify-center items-center">
      <Image className="max-w-12 max-h-12 " source={image} />
    </View>
  );
};

export default LoginIcon;
