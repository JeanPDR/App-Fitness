import { Home, Welcome } from "@/screens";
import { View } from "react-native";

export const isSigned = false;

const WelcomeScreen = () => {
  return (
    <>
      {isSigned ? (
        <View>
          <Home />
        </View>
      ) : (
        <View>
          <Welcome />
        </View>
      )}
    </>
  );
};

export default WelcomeScreen;
