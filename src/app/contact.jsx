import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import DropDown from "@/components/DropDown";

const options = ["General Equiry", "Technical Support", "Billing", "Other"];

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    category: "Select...",
    email: "",
    message: "",
  });

  const handleCategorySelect = (option) => {
    setFormData({ ...formData, category: option });
  };
  return (
    <LinearGradient style={{ flex: 1 }} colors={["#340C4C", "#EB7363"]}>
      <SafeAreaView className="flex justify-center h-full p-4">
        <Text className="text-white text-3xl my-8 font-bold text-center">
          How can we help?
        </Text>
        <View className="gap-4 my-4 flex-1 ">
          <TextInput
            className="text-white box-border border-[1.5px] rounded-xl p-6 flex items-center justify-center border-gray-200 focus:border-brand-purple"
            placeholderTextColor={"gainsboro"}
            placeholder="Subject"
            value={formData.subject}
            onChangeText={(text) => setFormData({ ...formData, subject: text })}
          />
          <DropDown
            data={formData}
            setData={setFormData}
            category={formData.category}
            options={options}
            selectedOption={formData.category}
            handlePress={handleCategorySelect}
          ></DropDown>
          <TextInput
            className="text-white box-border border-[1.5px] rounded-xl p-6 flex items-center justify-center border-gray-200 focus:border-brand-purple"
            placeholderTextColor={"gainsboro"}
            placeholder="Email"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            autoCapitalize="none"
          />
          <TextInput
            className="text-white box-border border-[1.5px] h-1/2  rounded-xl p-6 flex items-center justify-center border-gray-200 focus:border-brand-purple"
            placeholderTextColor={"gainsboro"}
            placeholder="Message"
            value={formData.message}
            onChangeText={(text) => setFormData({ ...formData, message: text })}
            multiline={true}
            numberOfLines={5}
          />

          <View className=" flex-grow items-center justify-center">
            <TouchableOpacity className="text-white  bg-brand-purple w-full py-4 rounded-xl text-xl">
              <Text className="text-white text-center">Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Contact;
