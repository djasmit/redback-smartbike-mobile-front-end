import { View, Text, TouchableOpacity, Modal, Keyboard } from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";

const DropDown = ({ category, options, selectedOption, handlePress }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <TouchableOpacity
      onBlur={() => setMenuOpen(false)}
      onPress={() => {
        setMenuOpen(!menuOpen);
        Keyboard.dismiss();
      }}
      className="border-[1.5px] bg-white border-gray-200  focus:border-brand-purple  z-50 relative rounded-xl"
    >
      <View className="flex-row items-center justify-between">
        <Text
          className={`p-4 ${
            selectedOption == "Select..." ? "text-gray-200" : "text-black"
          }`}
          p-6
        >
          {selectedOption}
        </Text>
        <Entypo
          name="chevron-right"
          size={18}
          color="white"
          className={`${menuOpen ? "rotate-90" : "rotate-0"} mr-6`}
        />
      </View>
      <View
        className={`absolute  bottom-0 w-full z-50 bg-white rounded-xl overflow-hidden flex translate-y-full ${
          menuOpen && "border-[1.5px] border-brand-purple"
        }`}
      >
        {menuOpen &&
          options.map((option) => (
            <TouchableOpacity
              className="bg-white  flex justify-center"
              key={option}
              onPress={() => {
                handlePress(option);
                setMenuOpen(!menuOpen);
              }}
            >
              <Text className="text-black z-50 p-6">{option}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </TouchableOpacity>
  );
};

export default DropDown;
