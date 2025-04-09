import { View, Text, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";

const categories = ["General Equiry", "Technical Support", "Billing", "Other"];

const DropDown = ({ category, formData, setFormData }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handlePress = (category) => {
    setFormData({ ...formData, category: category });
    setMenuOpen(!menuOpen);
  };
  return (
    <TouchableOpacity
      onPress={() => setMenuOpen(!menuOpen)}
      className="border-[1.5px] border-white  rounded-xl"
    >
      <View className="flex-row items-center justify-between">
        <Text className="text-gray-200 p-6">{category}</Text>
        <Entypo
          name="chevron-right"
          size={18}
          color="white"
          className={`${menuOpen ? "rotate-90" : "rotate-0"} mr-6`}
        />
      </View>
      <View className="">
        {menuOpen &&
          categories.map((category) => (
            <TouchableOpacity
              className="border-t flex justify-center border-white"
              key={category}
              onPress={() => handlePress(category)}
            >
              <Text className="text-white p-6">{category}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </TouchableOpacity>
  );
};

export default DropDown;
