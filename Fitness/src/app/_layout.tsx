import SignInRoutes from "@/routes/signIn";
import SignOutRoutes from "@/routes/signOut";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { isSigned } from "./";

export default function Layout() {
  return <>{isSigned ? <SignInRoutes /> : <SignOutRoutes />}</>;
}
