import { UserDTO } from "@/dto/UserDTO";
import { createContext } from "react";

export type AuthContextDataProps = {
  user: UserDTO;
  login: () => void;
  logout: () => void;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  return (
    <AuthContext.Provider
      value={{
        user: {
          id: "1",
          name: "Edmilson Soares",
          email: "esbnet@gmail.com",
          avatar: "image.png",
        },
        login: () => {},
        logout: () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
