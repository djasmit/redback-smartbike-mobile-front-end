import { View, Text, SafeAreaView, Platform } from "react-native";
import React, { useState } from "react";
import DropDown from "@/components/DropDown";
import { useHeaderHeight } from "@react-navigation/elements";
import CustomSafeArea from "@/components/CustomSafeArea";

const visibilityOptions = ["public", "private"];

const privacySettings = () => {
  const [visibility, setVisibility] = useState("select..");
  return (
    <CustomSafeArea className="flex-1 bg-white">
      <View>
        <View className="p-4 gap-4 items-center flex-row">
          <Text className="font-semibold">Profile Visibility</Text>
          <View className="flex-1">
            <DropDown
              handlePress={(selectedOption) => setVisibility(selectedOption)}
              options={visibilityOptions}
              selectedOption={visibility}
            />
          </View>
        </View>
        <View>
          <Text className="font-semibold p-4">Notification Settings</Text>
        </View>
      </View>
    </CustomSafeArea>
  );
};

export default privacySettings;
