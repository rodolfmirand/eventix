import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { currentUser } from "../../data/users";
import type { User } from "../../types/domain";
import { persistUser, readPersistedUser } from "../../utils/storage";

type AuthContextValue = {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  user: User | null;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => readPersistedUser());
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    persistUser(user);
  }, [user]);

  async function login(email: string, password: string) {
    setIsLoading(true);
    await new Promise((resolve) => window.setTimeout(resolve, 500));
    setIsLoading(false);

    const isValidEmail = email.trim().toLowerCase() === currentUser.email;
    const isValidPassword = password === "eventix";

    if (!isValidEmail || !isValidPassword) {
      throw new Error("Email ou senha invalidos. Use aluno@eventix.com e senha eventix.");
    }

    setUser(currentUser);
  }

  function logout() {
    setUser(null);
  }

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated: Boolean(user),
      isLoading,
      login,
      logout,
      user,
    }),
    [isLoading, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider.");
  }

  return context;
}
