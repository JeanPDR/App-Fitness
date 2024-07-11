import { View, Text } from "react-native";
import { styles } from "./styles";
import { LoginProps } from "./types";
import { StatusBar } from "expo-status-bar";
import { Link, Stack } from "expo-router";

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#25292e" style="light" />
      <Text style={styles.text}>Login</Text>
      <View style={{ height: 24 }} />
      <Link style={styles.text} href={"/"}>
        Ir para Welcome
      </Link>
      <View style={{ height: 12 }} />
      <Link style={styles.text} href={"/home"}>
        Ir para Home
      </Link>
    </View>
  );
};

export default Login;
