import { Slot, Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerTransparent: true,
          headerTitle: "",
          headerTintColor: "white",
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="deleteAccount"
          options={{
            headerShown: true,
            headerTitle: "Delete Account",
            headerTintColor: "black",
          }}
        />
      </Stack>
    </>
  );
};

export default _layout;
