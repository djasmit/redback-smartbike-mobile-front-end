import { View, Text, TextInput, Platform, SafeAreaView } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import Avatar from "@/components/Avatar";
import AntDesign from "@expo/vector-icons/AntDesign";
import { AuthContext } from "@/context/authContext";
import { useHeaderHeight } from "@react-navigation/elements";

const editProfile = () => {
  const headerHeight = useHeaderHeight();
  const { user, setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({ username: "", email: "" });
  // useEffect(() => {
  //   setUser({ id: 1, username: "Jordan", email: "jordan@gmail.com" });
  // }, []);

  return (
    <SafeAreaView className="bg-white flex-1">
      <View style={{ padding: Platform.OS === "android" ? headerHeight : 0 }}>
        <Avatar
          size={100}
          className="self-center"
          icon={<AntDesign name="edit" size={14} color="white" />}
          iconBgColour={"bg-blue-500"}
        />
      </View>
      {user && (
        <View
          className=" gap-4
        p-4"
        >
          <View className="gap-2">
            <Text>Username:</Text>
            <TextInput
              value={formData.username}
              onChangeText={(text) =>
                setFormData({ ...formData, username: text })
              }
              className="border border-gray-400 p-2 rounded-xl"
              placeholder={user.username ? user.username : "Username"}
            />
          </View>
          <View className="gap-2">
            <Text>Password:</Text>
            <TextInput
              secureTextEntry
              value={formData.password}
              onChangeText={(text) =>
                setFormData({ ...formData, password: text })
              }
              className="border border-gray-400 p-2 rounded-xl"
              placeholder={"*********"}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default editProfile;
