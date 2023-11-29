import { IButtonProps, Button as NativeBaseButton, Text } from "native-base";
import React from "react";

type ButtonProps = IButtonProps & {
  title: string;
  variant?: "solid" | "outline";
};

export function Button({ title, variant = "solid", ...props }: ButtonProps) {
  return (
    <NativeBaseButton
      w={"full"}
      h={14}
      rounded="sm"
      bg={variant === "outline" ? "transparent" : "green.700"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="green.500"
      _pressed={{ bg: variant === "outline" ? "gray.500" : "green.500" }}
      {...props}
    >
      <Text
        fontSize="sm"
        fontFamily="heading"
        color={variant === "outline" ? "green.500" : "white"}
      >
        {title}
      </Text>
    </NativeBaseButton>
  );
}
