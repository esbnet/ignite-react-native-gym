import LogoSvg from "@/assets/logo.svg";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { AuthNavigatorRoutesProps } from "@/routes/auth.routes";
import { useNavigation } from "@react-navigation/native";
import {
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack
} from "native-base";
import BackgroundImage from "../assets/background.png";

export default function SignIn() {
  const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigate("SignUp");
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      bg={"gray.700"}
      backgroundColor={"gray.700"}
    >
      <VStack flex={1} px={8} pb={16}>
        <Image
          source={BackgroundImage}
          defaultSource={BackgroundImage}
          alt="Pessoas andando em uma bicicleta ergonomica"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>
        <Center>
          <Heading fontFamily="heading" color="gray.100" fontSize="xl" mb={6}>
            Acesse sua conta
          </Heading>

          <Input
            placeholder="E-mail"
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <Input placeholder="Senha" secureTextEntry autoCapitalize="none" />
          <Button title="Acessar" />
        </Center>

        <Center mt={24}>
          <Text color="gray.100" mb={3} fontFamily={"body"}>
            Ainda não tem acesso?
          </Text>
          <Button
            title="Criar conta"
            variant={"outline"}
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
