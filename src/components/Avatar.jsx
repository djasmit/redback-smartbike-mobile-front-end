import { View, Image } from "react-native";
import React from "react";

const Avatar = ({ size }) => {
  return (
    <Image
      className="rounded-full border-2 border-brand-purple"
      style={{ height: size, width: size }}
      source={require("@assets/avatar.jpg")}
    />
  );
};

export default Avatar;
