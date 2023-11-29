import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";
import BackgroundImage from "../assets/background.png";

import LogoSvg from "@/assets/logo.svg";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
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
            Criar sua conta
          </Heading>

          <Input placeholder="Nome" />
          <Input
            placeholder="E-mail"
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <Input placeholder="Senha" secureTextEntry autoCapitalize="none" />
          <Button title="Criar e acessar" />
        </Center>

        <Center mt={24}>
          <Button
            title="Voltar para o login"
            variant={"outline"}
            onPress={handleGoBack}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
