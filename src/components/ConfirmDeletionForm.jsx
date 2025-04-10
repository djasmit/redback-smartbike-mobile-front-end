import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ConfirmDeletionForm = ({ setOpen, setDeleteSuccessful }) => {
  return (
    <View className="gap-4 p-4">
      <View className="w-[70px] bg-red-500 self-center rounded-full">
        <Text className="text-white text-center">Warning</Text>
      </View>
      <Text className="text-lg font-bold text-center">
        Are you sure you want to delete your account?
      </Text>
      <Text className="text-center text-gray-600">
        By deleting your account you will lose your data.
      </Text>
      {/* Buttons */}
      <View className="flex-row gap-4">
        {/* BACK BUTTON */}
        <TouchableOpacity
          onPress={() => setOpen(false)}
          className="flex-1 rounded-full border border-gray-200 p-4"
        >
          <Text className="text-center font-semibold">Back</Text>
        </TouchableOpacity>

        {/* CONFIRM BUTTON */}
        <TouchableOpacity
          onPress={() => setDeleteSuccessful(true)}
          className="flex-1 rounded-full bg-brand-purple p-4"
        >
          <Text className="text-center text-white font-semibold">
            Delete Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmDeletionForm;
