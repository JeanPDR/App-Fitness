import { StatusBar } from "expo-status-bar";
import { Login } from "../components/common";
import { SafeAreaView, Text } from "react-native";

export default function Page() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Login />
    </SafeAreaView>
  );
}
