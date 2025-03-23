import { View, SafeAreaView, Text } from "react-native";
import React from "react";
import Avatar from "@/components/Avatar";

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="p-2 flex-row items-center gap-2">
        <Avatar size={50} />
        <View>
          <Text className="text-gray-500">Good Morning</Text>
          <Text className="text-white font-semibold text-lg">
            Jordan Anderson
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
