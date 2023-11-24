import React from "react";
import { StatusBar } from "react-native";

import {
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Loading } from "@/components/Loading";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "./src/config/gluestack-ui.config";

import SignIn from "@/screens/SignIn";
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  // const [fontsLoaded] = useFonts({
  //   'Roboto-Black': require('./assets/fonts/Roboto-Black.otf'),
  // });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar barStyle="light-content" backgroundColor="#202024" />

      {fontsLoaded 
        ? <SignIn/>
        : <Loading /> 
      }
    </GluestackUIProvider>
  );
}
