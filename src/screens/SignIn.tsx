import { Image, VStack } from "@gluestack-ui/themed";

import BackgroundImage from "../assets/background.png";

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
    </VStack>
  );
}
