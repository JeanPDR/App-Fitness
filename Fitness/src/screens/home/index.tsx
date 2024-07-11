import { View, Text } from "react-native";
import { styles } from "./styles";
import { LoginProps } from "./types";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" style="light" />
      <Text style={styles.text}>Home</Text>
      <View style={{ height: 24 }} />
      <Link style={styles.text} href={"/"}>
        Ir para Welcome
      </Link>
      <View style={{ height: 12 }} />
      <Link style={styles.text} href={"/login"}>
        Ir para Login
      </Link>
    </View>
  );
};

export default Home;
