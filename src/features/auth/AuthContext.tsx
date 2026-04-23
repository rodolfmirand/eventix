import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
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

  function buildUser(email: string): User {
    const normalizedEmail = email.trim().toLowerCase();
    const [rawName = "cliente"] = normalizedEmail.split("@");
    const formattedName = rawName
      .split(/[.\-_]/)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");

    return {
      email: normalizedEmail,
      id: `user-${normalizedEmail.replace(/[^a-z0-9]/g, "-")}`,
      name: formattedName || "Cliente",
    };
  }

  useEffect(() => {
    persistUser(user);
  }, [user]);

  async function login(email: string, password: string) {
    setIsLoading(true);
    await new Promise((resolve) => window.setTimeout(resolve, 500));
    setIsLoading(false);

    const normalizedEmail = email.trim();
    const isValidEmail = /^\S+@\S+\.\S+$/.test(normalizedEmail);
    const isValidPassword = password.trim().length >= 6;

    if (!isValidEmail || !isValidPassword) {
      throw new Error("Confira o email e a senha informados.");
    }

    setUser(buildUser(normalizedEmail));
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
