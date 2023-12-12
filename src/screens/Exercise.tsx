import { AppNavigatorRoutesProps } from "@/routes/app.routes";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { TouchableOpacity } from "react-native";

import BodySvg from "@/assets/body.svg";
import RepetitionsSvg from "@/assets/repetitions.svg";
import SeriesSvg from "@/assets/series.svg";

import { Button } from "@/components/Button";
import React from "react";

type RouteParamsProps = {
  exerciseId: string;
};


export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const route = useRoute();

  const { exerciseId } = route.params as RouteParamsProps;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" size={6} color={"green.500"}>
            <Text>Exercício</Text>
          </Icon>
        </TouchableOpacity>
        <HStack
          mt={4}
          mb={8}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading
            color="gray.100"
            fontSize="lg"
            fontFamily="heading"
            flexShrink={1}
          >
            Costas
          </Heading>
          <HStack alignItems="center">
            <BodySvg />
            <Text
              color="gray.200"
              ml={1}
              fontSize="sm"
              textTransform="capitalize"
            >
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack p={8}>
          <Image
            w="full"
            h={80}
            source={{ uri: "https://i.ibb.co/0jqHpnp/smartwatch.png" }}
            alt="Nome do exercício"
            mb={3}
            resizeMode="cover"
            rounded="lg"
          />
          <Box bg="gray.600" rounded="md" pb={4} px={4}>
            <HStack
              alignItems="center"
              justifyContent="space-around"
              mb={6}
              mt={5}
            >
              <HStack alignItems="center">
                <SeriesSvg />
                <Text color="gray.200" ml={2}>
                  3 séries
                </Text>
              </HStack>
              <HStack alignItems="center">
                <RepetitionsSvg />
                <Text color="gray.200" ml={2}>
                  12 repetições
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>

        </VStack>
      </ScrollView>
    </VStack>
  );
}
