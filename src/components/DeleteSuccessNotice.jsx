import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

const DeleteSuccessNotice = () => {
  return (
    <View className="gap-4 p-4">
      <View className="w-[70px] bg-green-500 self-center rounded-full">
        <Text className="text-white text-center">Success</Text>
      </View>
      <Text className="text-lg font-bold text-center">Account Deleted!</Text>
      <Text className="text-center text-gray-600">
        Your account has been successfully deleted. We're sorry to see you go.
      </Text>
      <TouchableOpacity
        onPress={() => router.replace("/")}
        className="bg-brand-purple p-4 rounded-full "
      >
        <Text className="font-semibold text-center text-white">Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeleteSuccessNotice;
