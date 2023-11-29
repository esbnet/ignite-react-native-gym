import { IButtonProps, Button as NativeBaseButton, Text } from "native-base";
import React from "react";

type ButtonProps = IButtonProps & {
  title: string;
};

export function Button({ title, ...props }: ButtonProps) {
  return (
    <NativeBaseButton
      w={"full"}
      h={14}
      rounded="sm"
      bg="green.700"
      _pressed={ { bg: "green.500" }}
      {...props}
    >
      <Text fontSize="sm" fontFamily="heading" color="white">
        {title}
      </Text>
    </NativeBaseButton>
  );
}
