import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { ScreenHeader } from "@/components/ScreenHeader";
import { UserPhoto } from "@/components/UserPhoto";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import {
  Center,
  Heading,
  ScrollView,
  Skeleton,
  Text,
  VStack,
  useToast
} from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const AVATAR_URL = "https://github.com/esbnet.png";
const IMAGE_SIZE = 33;
const BG_INPUT = "gray.600";

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState(AVATAR_URL);

  const toast = useToast()

  async function handleUserPhotoSelect() {
    try {
      setPhotoIsLoading(true);
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) {
        setPhotoIsLoading(false);
        return;
      }

      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(
          photoSelected.assets[0].uri
        )

        if (photoInfo.exists && photoInfo.size && photoInfo.size / 1024 / 1024 > 5
        ) {
          return toast.show(
            {
              title: "Essa imagem é muito grande. Escolha uma de até 5MB",
              placement: "top",
              bgColor: "red.500",
            }
          );
        }

        setUserPhoto(photoSelected.assets[0].uri);
      }

      setPhotoIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsLoading(false);
    }
  }

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
              source={{ uri: userPhoto }}
            />
          )}

          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text
              color="green.500"
              fontSize="md"
              fontFamily="heading"
              fontWeight={"bold"}
              mt={2}
              mb={8}
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
