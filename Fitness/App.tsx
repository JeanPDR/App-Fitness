import { StatusBar } from "expo-status-bar";
import React from "react";
import { Login } from "./src/components/common";
import { SafeAreaView, Text } from "react-native";

const App: React.FC<void> = () => {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Text>Ínicio</Text>
    </SafeAreaView>
  );
};

export default App;
