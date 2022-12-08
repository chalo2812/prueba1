import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const onPressTitle = () => {
  alert("El dedo Nene");
};

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
        onPress={onPressTitle}
      >
        Fede Te amo
      </Text>
      <StatusBar style="light" />
    </View>
  );
}
