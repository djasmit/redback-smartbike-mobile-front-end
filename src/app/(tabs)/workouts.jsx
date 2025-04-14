import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import WorkoutCard from "@/components/WorkoutCard";

const workoutItems = [
  {
    title: "VR Game",
    image: "🎮",
    bgColour: "#ff3b30",
  },
  {
    title: "Pilates",
    image: "🙆‍♀️",
    bgColour: "#5956d6",
  },
  {
    title: "Cycling",
    image: "🚴‍♂️",
    bgColour: "#ff9500",
  },
  {
    title: "Running",
    image: "🏃‍♀️",
    bgColour: "#4cd964",
  },
  {
    title: "Yoga",
    image: "🧘‍♀️",
    bgColour: "#007aff",
  },
  {
    title: "HIIT",
    image: "🏋",
    bgColour: "#5956d6",
  },
];

const workouts = () => {
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <FlatList
        ListHeaderComponent={
          <Text className="text-brand-purple my-6 font-bold text-4xl">
            Track your fitness
          </Text>
        }
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={workoutItems}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
        renderItem={({ item }) => (
          <WorkoutCard
            title={item.title}
            image={item.image}
            bgColor={item.bgColour}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default workouts;
