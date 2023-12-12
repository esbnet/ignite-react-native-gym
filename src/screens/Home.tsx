import { ExerciseCard } from "@/components/ExerciseCard";
import { Group } from "@/components/Group";
import { HomeHeader } from "@/components/HomeHeader";
import { ExerciseDTO } from "@/dtos/ExerciseDTO";
import { AppNavigatorRoutesProps } from "@/routes/app.routes";
import { api } from "@/services/api";
import { AppError } from "@/utils/AppErros";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { FlatList, HStack, Heading, Text, VStack, useToast } from "native-base";
import { useCallback, useEffect, useState } from "react";

export function Home() {
  const [groups, setGroups] = useState<string[]>([]);
  const [exercises, setExercises] = useState<ExerciseDTO[]>([]);
  const [groupSelected, setGroupSelected] = useState("");

  const toast = useToast();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciseDetails() {
    navigation.navigate("exercise");
  }

  async function fetchGroups() {
    try {
      const response = await api.get("/groups");
      setGroups(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possivel carregar os grupos";

      toast.show({
        title,
        placement: "top",
        bgColor: "red.500",
      });
    }
  }

  async function fetchExercisesByGroup() {
    try {
      const response = await api.get(
        `/exercises/bygroup/${groupSelected.toLowerCase()}`
      );
      setExercises(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possivel carregar os exercícios";

      toast.show({
        title,
        placement: "top",
        bgColor: "red.500",
      });
    }
  }

  useEffect(() => {
    fetchGroups();
    fetchExercisesByGroup();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchExercisesByGroup();
    }, [groupSelected])
  );

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={
              groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()
            }
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 6 }}
        my={8}
        maxHeight={10}
        minHeight={10}
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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ExerciseCard data={item} onPress={handleOpenExerciseDetails} />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{
            paddingBottom: 20,
          }}
        />
      </VStack>
    </VStack>
  );
}
