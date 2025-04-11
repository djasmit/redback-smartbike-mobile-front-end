import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ConfirmDeletionForm from "./ConfirmDeletionForm";
import DeleteSuccessNotice from "./DeleteSuccessNotice";

const ConfirmDeletionModal = ({ open, setConfirmDeletion }) => {
  const [deleteSuccessful, setDeleteSuccessful] = useState(false);

  return (
    <View>
      {/* confirm the deletion */}
      {deleteSuccessful ? (
        <DeleteSuccessNotice />
      ) : (
        <ConfirmDeletionForm
          setConfirmDeletion={setConfirmDeletion}
          setDeleteSuccessful={setDeleteSuccessful}
        />
      )}
    </View>
  );
};

export default ConfirmDeletionModal;
