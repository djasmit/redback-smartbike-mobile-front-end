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
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const homeTiles = [
  {
    title: "Connect",
    link: "",
  },
  {
    title: "Start workout",
    link: "",
    icon: <MaterialCommunityIcons name={"bike"} size={42} color="#EB7363" />,
  },
  {
    title: "Groups",
    link: "/groups",
    icon:  <MaterialIcons name="groups" size={42} color="#Eb7363" />,
  },
  {
    title: "Schedule",
    link: "/workoutSchedule",
    icon: <AntDesign name="calendar" size={42} color="#EB7363" />,
  },

  {
    title: "Friends",
    link: "/friendslist",
    icon: <MaterialIcons name="group" size={42} color="#EB7363" />
  },

  {
    title: "Current Workout",
    link: "/currentWorkout",
    icon: <FontAwesome5 name="running" size={42} color="green" />
  },

];

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="p-4 flex-1">
        {/* Header */}
        <View className="flex-row justify-between items-center my-6">
          <WelcomeMessage name={user.username ? user.username : "Username"} />
          <Avatar size={50} />
        </View>

        {/* Last Week Activity */}
        <LastWeekActivity />

        <FlatList
        nestedScrollEnabled
          columnWrapperClassName="gap-4"
          contentContainerClassName="gap-4"
          numColumns={2}
          data={homeTiles}
          renderItem={({ item }) => <HomeScreenTile item={item} />}
        />
      </View >
    </SafeAreaView>
  );
};

export default Home;
