import { ExcerciseCard } from "@/components/ExcerciseCard";
import { Group } from "@/components/Group";
import { HomeHeader } from "@/components/HomeHeader";
import { FlatList, HStack, Heading, Text, VStack } from "native-base";
import { useState } from "react";

export function Home() {
  const [groupSelected, setGroupSelected] = useState("costa");
  const [groups, setGroups] = useState([
    { name: "costa", isMember: true },
    { name: "ombro", isMember: true },
    { name: "bíceps", isMember: true },
    { name: "treíceps", isMember: true },
    { name: "outros", isMember: true },
  ]);

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Group
            name={item.name}
            isActive={groupSelected === item.name}
            onPress={() => setGroupSelected(item.name)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 6 }}
        my={8}
        maxHeight={10}
      />

      <VStack flex={1} px={6}>
        <HStack justifyContent={"space-between"} alignItems="center" mb={5}>
          <Heading color="gray.200" fontSize="md" fontFamily="heading">
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {groups.length}
          </Text>
        </HStack>

        <ExcerciseCard />
        <ExcerciseCard />
      </VStack>
    </VStack>
  );
}
