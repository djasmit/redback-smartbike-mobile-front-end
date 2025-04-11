import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";

const links = [
  {
    title: "Catch up on latest news",
    link: "",
    bgcolours: ["#DC5432", "#DC543290"],
    icon: <FontAwesome name="newspaper-o" size={30} color="white" />,
  },
  {
    title: "See our privacy policy",
    link: "",
    bgcolours: ["#E24F97", "#E24F9790"],
    icon: <MaterialIcons name="privacy-tip" size={30} color="white" />,
  },
  {
    title: "Get in touch",
    link: "/contact",
    bgcolours: ["#CE062B", "#CE062B90"],
    icon: <Entypo name="mail" size={30} color="white" />,
  },
  {
    title: "Check out our website",
    link: "",
    bgcolours: ["#22BAA2", "#22BAA290"],
    icon: <MaterialIcons name="computer" size={30} color="white" />,
  },
];

const aboutUs = () => {
  const [width, setWidth] = useState();
  const handleLayout = (e) => {
    const window = e.nativeEvent.layout.width;
    setWidth(window * 0.45);
  };

  const containerRef = useRef(null);
  return (
    <SafeAreaView>
      <View className="p-4  gap-4">
        <Text className="text-2xl mb-12 text-center font-bold text-brand-purple">
          Redback Operations
        </Text>
        <Text className="text-center">
          Redback operations aims to turn small steps of virtuality into bigger
          steps of reality, making you smarter, fitter, and better.
        </Text>
        <Text className="text-center">
          Bad weather? Traffic? Worry not, our smart bike project transforms
          your indoor cycling experience but also features an interactive
          virtual reality game and accessible mobile application to bring the
          world to you.
        </Text>
      </View>
      <View onLayout={handleLayout} className="flex my-12 items-center">
        {width && (
          <FlatList
            numColumns={2}
            data={links}
            renderItem={({ item }) => (
              <LinearGradient
                start={[1, 0]} // Start from the left
                end={[0, 0]} // End on the right
                colors={item.bgcolours}
                style={{
                  width: width,
                  margin: 4,
                  borderRadius: 12,
                  aspectRatio: "16 / 9",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    item.link && router.push(item.link);
                  }}
                  className="flex-grow p-2"
                >
                  <View>{item.icon}</View>
                  <Text className="text-white mt-auto text-lg font-semibold">
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default aboutUs;
