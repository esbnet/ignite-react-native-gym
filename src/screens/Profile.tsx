import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { ScreenHeader } from "@/components/ScreenHeader";
import { UserPhoto } from "@/components/UserPhoto";
import {
  Center,
  Heading,
  ScrollView,
  Skeleton,
  Text,
  VStack,
} from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const AVATAR_URL = "https://github.com/esbnet.png";
const IMAGE_SIZE = 33;
const BG_INPUT = "gray.600";

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              isLoaded={false}
              size={IMAGE_SIZE}
              rounded="full"
              startColor={"gray.500"}
              endColor={"gray.400"}
            />
          ) : (
            <UserPhoto
              size={IMAGE_SIZE}
              alt="Imagem do Usuário"
              source={{ uri: AVATAR_URL }}
            />
          )}

          <TouchableOpacity>
            <Text
              color="green.500"
              fontSize="md"
              fontFamily="heading"
              fontWeight={"bold"}
              mt={2}
              mb={8}
              onPress={() => setPhotoIsLoading(!photoIsLoading)}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>
          <Input placeholder="Nome" bg={BG_INPUT} />
          <Input placeholder="esbnet@gmail.com" bg={BG_INPUT} isDisabled />

          <Heading
            color="gray.200"
            fontSize="md"
            mb={2}
            mt={12}
            fontFamily="heading"
            alignSelf={"flex-start"}
          >
            Alterar senha
          </Heading>
          <Input placeholder="Senha antiga" bg={BG_INPUT} secureTextEntry />
          <Input placeholder="Nova senha" bg={BG_INPUT} secureTextEntry />
          <Input
            placeholder="Confirme a nova senha"
            bg={BG_INPUT}
            secureTextEntry
          />
          <Button title="Atualizar" mt={4} />
        </Center>
      </ScrollView>
    </VStack>
  );
}
