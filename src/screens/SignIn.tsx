import { Center, Heading, Image, Text, VStack } from "native-base";
import BackgroundImage from "../assets/background.png";

import { Input } from "@/components/Input";
import LogoSvg from "../assets/logo.svg";
export default function SignIn() {
  return (
    <VStack flex={1} >
      <Image
        source={BackgroundImage}
        alt="Pessoas andando em uma bicicleta ergonomica"
        size="full"
        resizeMode="stretch"
        position="absolute"
      />

      <Center my={24}>
        <LogoSvg />

        <Text>
          Treine sua mente e o seu corpo
        </Text>
      </Center>
      <Center>
        <Heading  fontFamily="heading">
          Acesse sua conta
        </Heading>

        <Input />
      </Center>
    </VStack>
  );
}
