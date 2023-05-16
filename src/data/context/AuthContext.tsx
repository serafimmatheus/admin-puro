import React, { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import Usuario from "@/model/usuario";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

interface AuthContextIProps {
  usuario: Usuario;
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

async function usuarioNormalizado(usuarioFirabase: any): Promise<Usuario> {
  const token = await usuarioFirabase.getIdToken();

  return {
    uid: usuarioFirabase.uid,
    nome: usuarioFirabase.displayName,
    email: usuarioFirabase.email,
    token,
    provedor: usuarioFirabase.providerData[0].providerId,
    imagemUrl: usuarioFirabase.photoURL,
  };
}

function gerenciarCookies(logado: string) {
  if (logado) {
    Cookies.set("admin-puro-auth-token", logado, {
      expires: 1,
    });
  } else {
    Cookies.remove("admin-puro-auth-token");
  }
}

export function AuthProvider({ children }: AuthProviderIProps) {
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
  const [carregando, setCarregando] = useState(true);

  const route = useRouter();

  async function configuraSessao(usuarioFirebase: any) {
    if (usuarioFirebase?.email) {
      const usuario = await usuarioNormalizado(usuarioFirebase);
      setUsuario(usuario);
      gerenciarCookies("true");
      setCarregando(false);
      return usuario.email;
    } else {
      setUsuario({} as Usuario);
      gerenciarCookies("false");
      setCarregando(false);
      return false;
    }
  }

  async function cadastro(email: string, senha: string) {
    try {
      setCarregando(true);
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha);

      await configuraSessao(resp.user);
      route.push("/");
    } catch (error) {
    } finally {
      setCarregando(false);
    }
  }

  async function login(email: string, senha: string) {
    try {
      setCarregando(true);
      const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, senha);
      await configuraSessao(resp.user);
      route.push("/");
    } catch (err) {
      console.log(err);
      alert("Erro de login");
    } finally {
      setCarregando(false);
    }
  }

  async function loginGoogle() {
    try {
      setCarregando(true);

      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      configuraSessao(resp.user);
      route.push("/");
    } finally {
      setCarregando(false);
    }
  }

  async function sairDaAplicacao() {
    try {
      setCarregando(true);
      await firebase.auth().signOut();
      await configuraSessao(null);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    if (Cookies.get("admin-puro-auth-token")) {
      const cancelar = firebase.auth().onIdTokenChanged(configuraSessao);
      return () => cancelar();
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
