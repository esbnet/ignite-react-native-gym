import { IPressableProps, Pressable, Text } from "native-base";

type GroupProps = IPressableProps & {
  name: string;
  isActive: boolean;
};

export function Group({ name, isActive = false, ...props }: GroupProps) {

  return (
    <Pressable
      mr={3}
      w={24}
      h={10}
      bg="gray.600"
      rounded="md"
      justifyContent={"center"}
      alignItems={"center"}
      overflow={"hidden"}
      isPressed={isActive}
      _pressed={{
        borderColor: "green.500",
        borderWidth: 1,        
      }}
      {...props}
    >
      <Text
        color={ isActive ? "green.500" : "gray.200"}
        textTransform={"uppercase"}
        fontWeight="bold"
        fontSize="xs"
      >
        {name}
      </Text>
    </Pressable>
  );
}
