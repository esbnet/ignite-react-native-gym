import { MaterialIcons } from "@expo/vector-icons";
import { Heading, HStack, Icon, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        size={16}
        mr={4}
        source={{ uri: "https://github.com/esbnet.png" }}
      />
      <VStack flex={1} alignItems="center" justifyContent="center">
        <Heading color="gray.100" fontSize="lg" fontFamily="heading">
          {`Welcome, ${"Rodrigo"}!`}
        </Heading>
        <Text color="gray.200" fontSize="sm">
          {`Get fit and healthy with us!`}
        </Text>
      </VStack>
      <TouchableOpacity>
        <Icon
          as={MaterialIcons}
          name="logout"
          color="gray.200"
          size={7}
          onPress={() => { alert("Logout"); }}
        />
      </TouchableOpacity>
    </HStack>
  );
}
