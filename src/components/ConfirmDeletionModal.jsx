import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ConfirmDeletionForm from "./ConfirmDeletionForm";
import DeleteSuccessNotice from "./DeleteSuccessNotice";

const ConfirmDeletionModal = ({ open, setOpen }) => {
  const [deleteSuccessful, setDeleteSuccessful] = useState(false);

  return (
    <View
      className={`bg-white transition-all flex p-4 duration-500 w-full h-[250px] absolute bottom-0 z-50 rounded-3xl self-center ${
        open ? "-translate-y-0" : "translate-y-full"
      }`}
    >
      {/* horizontal line */}
      <View className="bg-gray-200 self-center rounded-full w-[70px] h-1.5" />

      {/* confirm the deletion */}
      {deleteSuccessful ? (
        <DeleteSuccessNotice />
      ) : (
        <ConfirmDeletionForm
          setOpen={setOpen}
          setDeleteSuccessful={setDeleteSuccessful}
        />
      )}
    </View>
  );
};

export default ConfirmDeletionModal;
