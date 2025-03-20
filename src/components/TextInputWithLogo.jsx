import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const TextInputWithLogo = ({ logo, placeholder }) => {
  const [focus, setFocus] = useState(false);
  return (
    <View
      className={`flex flex-row items-center gap-4 px-6 py-4 rounded-full ${
        focus ? "border border-brand-navy" : null
      }`}
    >
      {logo}
      <TextInput
        className="w-full rounded-full"
        placeholder={placeholder}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
      />
    </View>
  );
};

export default TextInputWithLogo;
