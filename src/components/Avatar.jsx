import { View, Image } from "react-native";
import React from "react";

const Avatar = ({ size }) => {
  return (
    <Image
      className="rounded-full"
      style={{ height: size, width: size }}
      source={require("@assets/avatar.jpg")}
    />
  );
};

export default Avatar;
