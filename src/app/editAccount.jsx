import { View, Text, TextInput } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import Avatar from "@/components/Avatar";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import { AuthContext } from "@/context/authContext";

const editProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({ username: "", email: "" });
  useEffect(() => {
    setUser({ id: 1, username: "Jordan", email: "jordan@gmail.com" });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <View className="self-center relative">
        <Avatar size={100} className="self-center" />
        <View className="w-8 h-8 absolute bottom-1 right-1 rounded-full bg-blue-400 flex items-center justify-center">
          <Feather name="edit-2" size={12} color="white" />
        </View>
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
              placeholder={user.username}
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
