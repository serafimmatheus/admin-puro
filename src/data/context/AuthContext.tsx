import React, { createContext, useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { apiPuro } from "@/API-PURO";

interface UserIProps {
  name: string;
  email: string;
  chaveApi: string;
  isActive: boolean;
  isAdm: boolean;
}
interface AuthContextIProps {
  usuario: UserIProps;
  login: (email: string, senha: string) => Promise<void>;
  loginGoogle: () => Promise<void>;
  cadastro: (email: string, senha: string) => Promise<void>;
  sairDaAplicacao: () => Promise<void>;
  carregando: boolean;
}

interface AuthProviderIProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextIProps>({} as AuthContextIProps);

export function AuthProvider({ children }: AuthProviderIProps) {
  const [usuario, setUsuario] = useState<UserIProps>({} as UserIProps);
  const [carregando, setCarregando] = useState(true);
  const [islogado, setIsLogado] = useState(false);

  const route = useRouter();

  async function cadastro(email: string, senha: string) {
    try {
      setCarregando(true);

      route.push("/");
    } catch (error) {
    } finally {
      setCarregando(false);
    }
  }

  async function login(email: string, senha: string) {
    setCarregando(true);
    await apiPuro
      .post("/api/v1/users/login", {
        email,
        password: senha,
      })
      .then((response) => {
        setIsLogado(true);
        setCarregando(false);
        setUsuario(response.data.user);
        Cookies.set("admin-puro-auth-token", response.data.token, {
          expires: 1,
        });

        route.push("/");
      })
      .catch((err) => {
        setCarregando(false);
        setIsLogado(false);
      })
      .finally(() => {
        setCarregando(false);
      });
    // route.push("/");
    // alert("Erro de login");
  }

  async function loginGoogle() {
    try {
      route.push("/");
    } finally {
      setCarregando(false);
    }
  }

  async function sairDaAplicacao() {
    Cookies.remove("admin-puro-auth-token");
  }

  useEffect(() => {
    if (Cookies.get("admin-puro-auth-token")) {
      const token: any = Cookies.get("admin-puro-auth-token");

      const { sub }: any = jwt.decode(token);

      apiPuro
        .get(`/api/v1/users/${sub}`)
        .then((response) => {
          setUsuario(response.data);
          setCarregando(false);
        })
        .catch((err) => console.error(err));
    } else {
      setCarregando(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        usuario,
        loginGoogle,
        sairDaAplicacao,
        login,
        cadastro,
        carregando,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
