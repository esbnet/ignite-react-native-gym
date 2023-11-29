import { Entypo } from "@expo/vector-icons";
import { HStack, Heading, Icon, Image, Text, VStack } from "native-base";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type ExerciseCardProps = TouchableOpacityProps & {
  name: string;
  series: number;
  repetitions: number;
};

export function ExcerciseCard({ ...props }: ExerciseCardProps) {
  return (
    <TouchableOpacity {...props}>
      <HStack bg="gray.500" alignItems="center" p={2} rounded="md" mb={3}>
        <Image
          source={{ uri: "https://i.ibb.co/0jqHpnp/smartwatch.png" }}
          alt="Imagem do exercício"
          w={16}
          h={16}
          rounded="md"
          mr={4}
          resizeMode="center"
        />
        <VStack flex={1}>
          <Heading color="white" fontSize="lg">
            {props.name}
          </Heading>
          <Text color="gray.200" fontSize="sm" mt={1} numberOfLines={2}>
            {props.series} séries x {props.repetitions} repetições
          </Text>
        </VStack>
        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  );
}
