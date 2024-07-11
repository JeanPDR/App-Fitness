import { Home } from "@/screens";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const HomeLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 8,
          height: 60,
        },
        tabBarItemStyle: {
          paddingTop: 8,
        },
        // tabBarLabelStyle: ,
        // tabBarIconStyle: ,
      }}
      initialRouteName="home"
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          title: "config",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default HomeLayout;
