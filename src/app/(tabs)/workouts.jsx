import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import WorkoutCard from "@/components/WorkoutCard";
import { space } from "postcss/lib/list";
const workoutItems = [
  {
    title: "VR Game",
    image: require("@assets/VR.png"),
    bgColour: "#ff3b30",
  },
  {
    title: "Cycling",
    image: require("@assets/cycling.png"),
    bgColour: "#ff9500",
  },
  {
    title: "Running",
    image: require("@assets/running.png"),
    bgColour: "#4cd964",
  },
  {
    title: "Yoga",
    image: require("@assets/yoga.png"),
    bgColour: "#007aff",
  },
  {
    title: "HIIT",
    image: require("@assets/weights.png"),
    bgColour: "#5956d6",
  },
];

const workouts = () => {
  return (
    <View className="flex-1 bg-[#111111] p-6">
      <FlatList
        ListHeaderComponent={
          <Text className="text-white font-bold text-4xl">
            Track your fitness
          </Text>
        }
        showsVerticalScrollIndicator={false}
        className="mt-12"
        data={workoutItems}
        renderItem={({ item }) => (
          <WorkoutCard
            title={item.title}
            image={item.image}
            bgColor={item.bgColour}
          />
        )}
      />
    </View>
  );
};

export default workouts;
