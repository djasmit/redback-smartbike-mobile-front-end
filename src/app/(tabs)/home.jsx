import { View, SafeAreaView, Text } from "react-native";
import React from "react";
import Avatar from "@/components/Avatar";

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="p-3 flex-row items-center gap-2">
        <Avatar size={50} />
        <View>
          <Text className="text-gray-800">Good Morning</Text>
          <Text className="text-black font-semibold text-lg">
            Jordan Anderson
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
