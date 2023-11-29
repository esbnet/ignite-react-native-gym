import { Text } from "native-base";

type GroupProps = {
  name: string;
};

export function Group({ name }: GroupProps) {
  return (
    <Text
      color="gray.200"
      textTransform={"uppercase"}
      fontWeight="bold"
      fontSize="xs"
    >
      {name}
    </Text>
  );
}
