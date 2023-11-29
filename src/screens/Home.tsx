import { Group } from "@/components/Group";
import { HomeHeader } from "@/components/HomeHeader";
import { HStack, VStack } from "native-base";
import { useState } from "react";

export function Home() {
  const [groupSelected, setGroupSelected] = useState("costa");

  return (
    <VStack flex={1}>
      <HomeHeader />
      <HStack px={8} mt={8} justifyContent="space-between" alignItems="center">
        <Group
          name="ombro"
          isActive={groupSelected === "ombro"}
          onPress={() => setGroupSelected("ombro")}
        />
        <Group
          name="costa"
          isActive={groupSelected === "costa"}
          onPress={() => setGroupSelected("costa")}
        />
      </HStack>
    </VStack>
  );
}
