import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "@/context/authContext";

const ConfirmDeletionForm = ({ setOpen, setDeleteSuccessful }) => {
  const { user } = useContext(AuthContext);

  const handleDeleteUser = async () => {
    const response = await fetch(
      `http://0.0.0.0:8000/user/delete/${user.id}/`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    switch (response.status) {
      case 404:
        alert("User not found");
        return;
      case 204:
        setDeleteSuccessful(true);
        break;
    }
  };
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
          onPress={handleDeleteUser}
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
