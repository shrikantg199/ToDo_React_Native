import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ tabBarLabel: "Home" }} />
      <Tabs.Screen name="profile" options={{ tabBarLabel: "Profile" }} />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
