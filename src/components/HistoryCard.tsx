import { HStack, Heading, Text, VStack } from "native-base";

export type HistoryCardProps = {
  title: string;
  exercises: string[];
  hour: string;
};

export function HistoryCard({ title, exercises, hour }: HistoryCardProps) {
  return (
    <HStack
      bg="gray.600"
      w="full"
      px={5}
      py={4}
      mb={3}
      rounded="md"
      justifyContent="space-between"
    >
      <VStack mr={5} flex={1}>
        <Heading
          color="white"
          fontSize="md"
          fontFamily="heading"
          textTransform="capitalize"
          numberOfLines={1}
        >
          {title}
        </Heading>

        <Text color="gray.100" fontSize="md" numberOfLines={1}>
          {exercises.join(", ")}
        </Text>
      </VStack>

      <Text color="gray.300" fontSize="md">
        {hour}
      </Text>
    </HStack>
  );
}
