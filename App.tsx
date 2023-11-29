import { Loading } from "@/components/Loading";
import SignIn from "@/screens/SignIn";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { StatusBar } from "react-native";
import { THEME } from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME} isSSR={false}>
      <StatusBar barStyle="light-content" backgroundColor="#202024" />

      {fontsLoaded ? <SignIn /> : <Loading />}
      
    </NativeBaseProvider>
  );
}
