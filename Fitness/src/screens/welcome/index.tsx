import { View, Text } from "react-native";
import { styles } from "./styles";
import { LoginProps } from "./types";
import { StatusBar } from "expo-status-bar";
import { Link, Stack } from "expo-router";

const Welcome: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" style="light" />
      <Text style={styles.text}>Welcome</Text>
      <View style={{ height: 24 }} />
      <Link style={styles.text} href={"/home"}>
        Ir para Home
      </Link>
      <View style={{ height: 12 }} />
      <Link style={styles.text} href={"/login"}>
        Ir para Login
      </Link>
    </View>
  );
};

export default Welcome;
