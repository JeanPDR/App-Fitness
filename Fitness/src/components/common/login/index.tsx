import { View, Text } from "react-native";
import { styles } from "./styles";
import { LoginProps } from "./types";
import { StatusBar } from "expo-status-bar";

const Login: React.FC<unknown> = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#25292e" style="light" />
      <Text style={styles.text}>Página de Login</Text>
    </View>
  );
};

export default Login;
