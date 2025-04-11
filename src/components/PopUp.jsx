import { View, TouchableOpacity } from "react-native";
import React from "react";

const PopUp = ({ children, open }) => {
  return (
    <View className="h-screen absolute top-0 w-screen">
      <View
        className={`h-screen w-full absolute top-0  transition-all duration-500 bg-black/50 ${
          open ? "opacity-100" : "opacity-0"
        } `}
      />
      <View
        className={`bg-white transition-all opacity-100 flex p-4 duration-500 w-full h-[250px] absolute bottom-0 z-50 rounded-3xl self-center ${
          open ? "-translate-y-0" : "translate-y-full"
        }`}
      >
        <TouchableOpacity className="h-1 w-1/4 self-center rounded-full bg-gray-400" />
        <View className="flex flex-grow items-center justify-center">
          {children}
        </View>
      </View>
    </View>
  );
};

export default PopUp;
