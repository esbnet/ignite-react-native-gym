import { useAuth } from "@/hooks/useAuth";
import { MaterialIcons } from "@expo/vector-icons";
import { Heading, HStack, Icon, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { UserPhoto } from "./UserPhoto";

import avatarImg from "@/assets/userPhotoDefault.png";

export function HomeHeader() {
  const { user } = useAuth();
  const { signOut } = useAuth();
  function handleLogout() {
    signOut();
  }

  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        size={16}
        mr={4}
        source={user.avatar ? { uri: user.avatar } : avatarImg}
      />
      <VStack flex={1} alignItems="center" justifyContent="center">
        <Heading color="gray.100" fontSize="lg" fontFamily="heading">
          {`Bem vindo, ${user.name}!`}
        </Heading>
        <Text color="gray.200" fontSize="sm">
          {`Fique em forma e saudável conosco.`}
        </Text>
      </VStack>
      <TouchableOpacity>
        <Icon
          as={MaterialIcons}
          name="logout"
          color="gray.200"
          size={7}
          onPress={handleLogout}
        />
      </TouchableOpacity>
    </HStack>
  );
}
