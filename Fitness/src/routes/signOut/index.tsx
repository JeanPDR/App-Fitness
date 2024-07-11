import { Stack } from "expo-router";

const SignOutRoutes = () => {
  return (
    <Stack
      initialRouteName="welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "welcome", headerShown: false }}
      />
      <Stack.Screen
        name="login"
        options={{ title: "login", headerShown: false }}
      />
    </Stack>
  );
};

export default SignOutRoutes;
