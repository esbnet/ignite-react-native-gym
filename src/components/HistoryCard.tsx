import { HistoryDTO } from "@/dtos/HistoryDTO";
import { HStack, Heading, Text, VStack } from "native-base";

export type HistoryCardProps = {
  data: HistoryDTO; 
};

export function HistoryCard({ data }: HistoryCardProps) {
  return (
    <HStack
      bg="gray.600"
      w="full"
      px={5}
      py={4}
      mb={3}
      rounded="md"
      justifyContent="space-between"
      alignItems="center"
    >
      <VStack mr={5} flex={1}>
        <Heading
          color="white"
          fontSize="md"
          fontFamily="heading"
          textTransform="capitalize"
          numberOfLines={1}
        >
          {data.group}
        </Heading>

        <Text color="gray.100" fontSize="md" numberOfLines={1}>
          {data.name}
        </Text>
      </VStack>

      <Text color="gray.300" fontSize="md">
        {data.hour}
      </Text>
    </HStack>
  );
}
