import { View, Text, FlatList } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Avatar from "@/components/Avatar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import Setting from "@/components/Setting";

const settingsArray = ["Edit Profile", "Message Center", "My Workout History"];

const settings = () => {
  return (
    <View className="flex-1 bg-[#111111]">
      <LinearGradient colors={["#994D74", "#3A1C72"]}>
        <SafeAreaView className="h-[300px] flex justify-center items-center">
          <Avatar size={100} />
          <Text className="font-bold text-lg text-white">Jordan Anderson</Text>
        </SafeAreaView>
      </LinearGradient>
      <View className="h-full border-2 border-red-500 relative -top-10 rounded-[48px] bg-white py-8 px-6">
        <Text className="text-3xl font-bold text-center">Settings</Text>

        <FlatList
          data={settingsArray}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Setting settingTitle={item} />}
        />
      </View>
    </View>
  );
};

export default settings;
