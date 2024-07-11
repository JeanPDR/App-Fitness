import { Stack } from "expo-router";

const SignInRoutes = () => {
  return (
    <Stack
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="home"
        options={{ title: "home", headerShown: false }}
      />
    </Stack>
  );
};

export default SignInRoutes;
