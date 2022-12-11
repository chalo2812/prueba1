import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyCcontent: "center",
      }}
    >
      <Text
        style={{
          alignContent: "flex-start",
          flex: 2,
          marginTop: 5,
          paddingTop: 100,
          fontSize: 48,
        }}
      >
        Fede Te amo
      </Text>
      <StatusBar style="light" />
    </View>
  );
}
