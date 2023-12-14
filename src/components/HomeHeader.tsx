import { useAuth } from "@/hooks/useAuth";
import { MaterialIcons } from "@expo/vector-icons";
import { Heading, HStack, Icon, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { UserPhoto } from "./UserPhoto";

import avatarImg from "@/assets/userPhotoDefault.png";
import { api } from "@/services/api";

export function HomeHeader() {
  const { user, signOut } = useAuth();

  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        size={16}
        mr={2}
        source={
          user.avatar
            ? { uri: `${api.defaults.baseURL}/avatar/${user.avatar}` }
            : avatarImg
        }
      />
      <VStack flex={1} alignItems="left" justifyContent="center">
        <Heading color="gray.100" fontSize="lg" fontFamily="heading">
          {`Olá, ${user.name}!`}
        </Heading>
        <Text color="gray.200" fontSize="sm">
          {`Vamos começar a treinar hoje.`}
        </Text>
      </VStack>
      <TouchableOpacity>
        <Icon
          as={MaterialIcons}
          name="logout"
          color="gray.200"
          size={7}
          onPress={signOut}
        />
      </TouchableOpacity>
    </HStack>
  );
}
