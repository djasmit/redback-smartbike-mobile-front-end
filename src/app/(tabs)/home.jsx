import { View, SafeAreaView } from "react-native";
import React from "react";
import Avatar from "@/components/Avatar";
import LastWeekActivity from "@/components/LastWeekActivity";
import WelcomeMessage from "@/components/WelcomeMessage";
import HomeScreenTile from "@/components/HomeScreenTile";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="p-4">
        {/* Header */}
        <View className="flex-row justify-between items-center my-6">
          <WelcomeMessage name={"Jordan Anderson"} />
          <Avatar size={50} />
        </View>

        {/* Last Week Activity */}
        <LastWeekActivity />

        {/* Tiles Section */}
        <View className="gap-4">
          {/* Connect & Start Workout */}
          <View className="flex gap-4 justify-between flex-row">
            <View className="flex-1">
              <HomeScreenTile tileTitle={"Connect"} />
            </View>
            <View className="flex-1">
              <HomeScreenTile
                icon={
                  <MaterialCommunityIcons
                    name={"bike"}
                    size={42} // Reduced size
                    color="#EB7363"
                  />
                }
                tileTitle={"Start workout"}
              />
            </View>
          </View>

          {/* Friends Tile */}
          <View className="flex-row mt-4">
            <View className="flex-1">
              <Link href="/friends" asChild>
                <TouchableOpacity>
                  <HomeScreenTile
                    tileTitle="Friends"
                    icon={
                      <MaterialIcons name="group" size={42} color="#EB7363" /> // Reduced size
                    }
                  />
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
