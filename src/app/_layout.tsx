import { AuthProvider } from "@/context/authContext";
import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <>
      <AuthProvider>
        <Stack
          screenOptions={{
            headerTransparent: true,
            headerTitle: "",
            headerTintColor: "black",
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
          <Stack.Screen
            name="(scheduleWorkout)"
            options={{
              presentation: "modal",
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="(deleteAccountConfirmation)"
            options={{
              presentation: "transparentModal",
              headerShown: false,
            }}
          />
        </Stack>
      </AuthProvider>
    </>
  );
};

export default _layout;
