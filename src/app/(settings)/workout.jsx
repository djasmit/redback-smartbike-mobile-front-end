import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const WorkoutScreen = () => {
  return (
    <LinearGradient
      colors={["#1C1C1E", "#212124"]}
      start={[0, 0]}
      end={[1, 1]}
      style={{ flex: 1 }}
    >
      <View className="flex-1 p-6">
        {/* Header */}
        <View className="flex flex-row justify-between items-center mb-6">
          <Text className="text-white text-2xl font-bold">Workout</Text>
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-brand-orange px-3 py-1 rounded-xl"
          >
            <Text className="text-white font-semibold">Back</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View className="flex-1 justify-center items-center">
          <Text className="text-gray-300 text-lg mb-4">
            🚴 Workout session screen
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default WorkoutScreen;
