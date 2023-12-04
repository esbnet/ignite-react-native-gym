import { IImageProps, Image } from "native-base";

type UserPhotoProps = IImageProps & {
  size: number;
}

export function UserPhoto({ size, ...props }: UserPhotoProps) {
  return (
    <Image
      size={size}
      alt="Imagem do Usuário"
      borderRadius="full"
      overflow="hidden"
      {...props}
    />
  );
}