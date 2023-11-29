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
  const [exercises, setExercises] = useState([
    {
      name: "Remada unilateral",
      series: 3,
      repetitions: 12,
    },
    {
      name: "Remada curvada",
      series: 5,
      repetitions: 15,
    },
    {
      name: "Remada biceps",
      series: 10,
      repetitions: 20,
    },
    {
      name: "Remada triceps",
      series: 3,
      repetitions: 12,
    },
    {
      name: "Cadeira extensora",
      series: 3,
      repetitions: 12,
    },
    {
      name: "Cadeira flexora",
      series: 3,
      repetitions: 12,
    },
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
            isActive={
              groupSelected.toLocaleUpperCase() ===
              item.name.toLocaleUpperCase()
            }
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
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <ExcerciseCard
              name={item.name}
              series={item.series}
              repetitions={item.repetitions}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ pb: 10 }}
          ListEmptyComponent={() => (
            <Text color="gray.200" fontSize="lg">
              Não há exercícios registrados ainda. {"\n"}
              Vamos fazer exercícios hoje?
            </Text>
          )}
        />
      </VStack>
    </VStack>
  );
}
