import { IImageProps, Image } from "native-base";

type UserPhotoProps = IImageProps & {
  size: number;
}

export function UserPhoto({ size, ...props }: UserPhotoProps) {
  return (
    <Image
      alt="Imagem do Usuário"
      size="md"
      borderRadius="full"
      overflow="hidden"
      {...props}
    />
  );
}