import { View, SafeAreaView, Text, FlatList } from "react-native";
import React from "react";
import Avatar from "@/components/Avatar";
import LastWeekActivity from "@/components/LastWeekActivity";
import WelcomeMessage from "@/components/WelcomeMessage";
import HomeScreenTile from "@/components/HomeScreenTile";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const homeTiles = [
  {
    title: "Connect",
  },
  {
    title: "Start workout",
    link: "",
    icon: <MaterialCommunityIcons name={"bike"} size={52} color="#EB7363" />,
  },
];

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="p-4">
        <View className="flex-row justify-between items-center my-6">
          <WelcomeMessage name={"Jordan Anderson"} />
          <Avatar size={50} />
        </View>
        <LastWeekActivity />

        <FlatList
          columnWrapperClassName="gap-4"
          contentContainerClassName="gap-4"
          numColumns={2}
          data={homeTiles}
          renderItem={({ item }) => (
            <HomeScreenTile tileTitle={item.title} icon={item.icon} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
