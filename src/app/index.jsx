import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import "../../global.css";
import AntDesign from "@expo/vector-icons/AntDesign";
import TextInputWithLogo from "@/components/TextInputWithLogo";
import LoginIcon from "@/components/LoginIcon";
import { Link, useNavigation } from "expo-router";
import "@expo/metro-runtime";
import { LinearGradient } from "expo-linear-gradient";

const index = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient style={{ flex: 1 }} colors={["#340C4C", "#EB7363"]}>
        <StatusBar barStyle={"light-content"} />
        <SafeAreaView>
          <View className="bg-white max-h-[78%] py-6 m-6 rounded-[48px] flex justify-center px-4">
            <Image
              source={require("@assets/Redback-logo.png")}
              className="max-w-[130px] max-h-[130px] self-center mb-6"
              resizeMode="contain"
            />
            <Text className="text-brand-navy text-center text-3xl font-bold">
              Redback Smart Bike
            </Text>
            <View className="gap-4 my-12">
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
              className="bg-brand-purple w-2/3 self-center rounded-full px-6 py-4"
            >
              <Text className="text-white bg-brand-purplefont-bold text-lg text-center">
                Sign In
              </Text>
            </Link>
            <Link className="self-center mt-6" href={"/forgot-password"}>
              Forgot password?
            </Link>
          </View>
          <View className="flex flex-grow justify-center gap-4">
            <View className="flex-row justify-between w-1/2 self-center">
              <LoginIcon image={require("@assets/apple-logo.png")} />
              <LoginIcon image={require("@assets/facebook.png")} />
              <LoginIcon image={require("@assets/google.png")} />
            </View>
            <Text className="text-white text-center">
              Dont have an account?{" "}
              <Text className="text-brand-purple font-semibold">
                Sign up here
              </Text>{" "}
            </Text>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default index;
