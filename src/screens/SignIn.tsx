import { Center, Heading, Image, Text, VStack } from "native-base";
import BackgroundImage from "../assets/background.png";

import LogoSvg from "@/assets/logo.svg";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export default function SignIn() {
  return (
    <VStack flex={1} bg={"gray.700"} px={8}>
      <Image
        source={BackgroundImage}
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
      <Button title="Criar conta" variant={"outline"}/>
    </VStack>
  );
}
