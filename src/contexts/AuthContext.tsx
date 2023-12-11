import { UserDTO } from "@/dto/UserDTO";
import { api } from "@/services/api";
import { storageUserGet, storageUserSave } from "@/storage/storageUser";
import { createContext, useEffect, useState } from "react";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  isLoadingUserStorageDate: boolean;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [isLoadingUserStorageDate, setIsLoadingUserStorageDate] =
    useState(true);

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post("/sessions", {
        email,
        password,
      });

      if (data.user) {
        setUser(data.user);
        await storageUserSave(data.user);
      }
    } catch (error) {
      throw error;
    }
  }

  async function loadUserStorageData() {
    try {
      const userLogged = await storageUserGet();

      if (userLogged) {
        setUser(userLogged);
        setIsLoadingUserStorageDate(false);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageDate(false);
    }
  }

  async function signOut() {
    setUser({} as UserDTO);
  }

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signIn, signOut, isLoadingUserStorageDate }} 
    >
      {children}
    </AuthContext.Provider>
  );
}
