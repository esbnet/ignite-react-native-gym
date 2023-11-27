import { Center, Heading, Image, Text, VStack } from "@gluestack-ui/themed";
import BackgroundImage from "../assets/background.png";

import LogoSvg from "../assets/logo.svg";
export default function SignIn() {
  return (
    <VStack flex={1} bg="$gray700">
      <Image
        source={BackgroundImage}
        alt="Pessoas andando em uma bicicleta ergonomica"
        size="full"
        resizeMode="stretch"
        position="absolute"
      />

      <Center my={24}>
        <LogoSvg />

        <Text color="$gray100" fontSize="$sm">
          {" "}
          Treine sua mente e o seu corpo
        </Text>
      </Center>
      <Center>
        <Heading color="$gray100" fontSize="$xl" mb={6} fontFamily="heading">
          Acesse sua conta
        </Heading>
      </Center>
    </VStack>
  );
}
