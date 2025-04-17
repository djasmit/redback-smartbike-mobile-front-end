import { View, SafeAreaView, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import Avatar from "@/components/Avatar";
import LastWeekActivity from "@/components/LastWeekActivity";
import WelcomeMessage from "@/components/WelcomeMessage";
import HomeScreenTile from "@/components/HomeScreenTile";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { AuthContext } from "@/context/authContext";
import AntDesign from "@expo/vector-icons/AntDesign";

const homeTiles = [
  {
    title: "Connect",
  },
  {
    title: "Start workout",
    link: "",
    icon: <MaterialCommunityIcons name={"bike"} size={42} color="#EB7363" />,
  },
  {
    title: "Friends",
    link: "/friends",
    icon: <MaterialIcons name="group" size={42} color="#EB7363" />,
  },
  {
    title: "Schedule",
    link: "/workoutSchedule",
    icon: <AntDesign name="calendar" size={42} color="#EB7363" />,
  },
];

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="p-4">
        {/* Header */}
        <View className="flex-row justify-between items-center my-6">
          <WelcomeMessage name={user.username ? user.username : "Username"} />
          <Avatar size={50} />
        </View>

        {/* Last Week Activity */}
        <LastWeekActivity />

        <FlatList
          columnWrapperClassName="gap-4"
          contentContainerClassName="gap-4"
          numColumns={2}
          data={homeTiles}
          renderItem={({ item }) => <HomeScreenTile item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
