import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Avatar from "@/components/Avatar";
import AntDesign from "@expo/vector-icons/AntDesign";

const deleteAccount = () => {
  return (
    <SafeAreaView className="flex items-center h-full bg-white">
      <View className="my-4  flex items-center justify-center  relative">
        <Avatar size={100} />
        <View className="bg-red-500 p-2 absolute right-1 bottom-1 w-10 h-10 flex items-center justify-center square rounded-full">
          <AntDesign name="exclamationcircle" size={14} color="white" />
        </View>
      </View>

      <Text className="text-center text-white">We're sorry to see you go</Text>
    </SafeAreaView>
  );
};

export default deleteAccount;
