import { IInputProps, Input as NativeBaseInput } from "native-base";
import React from "react";


export function Input({...props}: IInputProps) {
  return <NativeBaseInput 
    bg="gray.700"
    h={14}
    px={4}
    fontSize="md"
    borderWidth={0}
    color="white"
    fontFamily="body"
    _focus={{
      bg: "gray.700",
      borderWidth: 1,
      borderColor: "green.500",
    }}
    mb={4}
    placeholderTextColor="gray.300"
    {...props}
  />;
}
