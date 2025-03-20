import { View, Text, SafeAreaView, Image, StatusBar } from "react-native";
import React, { useState } from "react";
import "../../global.css";
import AntDesign from "@expo/vector-icons/AntDesign";
import TextInputWithLogo from "@/components/TextInputWithLogo";
import LoginIcon from "@/components/LoginIcon";
import { Link, useNavigation } from "expo-router";

const index = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-brand-navy h-full">
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView className="flex-1">
        <View className="bg-white m-6 rounded-[48px] py-16 px-4 flex-grow">
          <Image
            source={require("@assets/redback-logo.png")}
            className="w-18 h-18 self-center"
          />
          <Text className="text-brand-navy text-center text-3xl font-bold">
            Redback Smart Bike
          </Text>
          <View className="my-auto gap-4">
            <TextInputWithLogo
              logo={<AntDesign name="mail" size={24} color="black" />}
              placeholder={"example@gmail.com"}
            />
            <TextInputWithLogo
              logo={<AntDesign name="lock1" size={28} color="black" />}
              placeholder={"Enter your password"}
            />
          </View>
          <Link
            href={"/home"}
            className="bg-brand-navy w-2/3 self-center rounded-full px-6 py-4 mt-auto"
          >
            <Text className="text-white text-center">Sign In</Text>
          </Link>
          <Link className="self-center my-6" href={"/forgot-password"}>
            Forgot password?
          </Link>
        </View>
        <View className="flex-grow justify-center border-red-500">
          <View className="flex-row justify-between w-1/2 self-center">
            <LoginIcon image={require("@assets/apple-logo.png")} />
            <LoginIcon image={require("@assets/facebook.png")} />
            <LoginIcon image={require("@assets/google.png")} />
          </View>
          <Text className="text-white text-center my-6">
            Dont have an account?{" "}
            <Text className="text-yellow-500">Sign up here</Text>{" "}
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default index;
