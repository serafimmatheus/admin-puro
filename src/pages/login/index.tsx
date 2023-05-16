import AunthInput from "@/components/auth/authInput";
import { IconeGoogle } from "@/components/icons";
import { useAppAuth } from "@/data/hook/useAuth";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const { loginGoogle, login, cadastro } = useAppAuth();
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function enviarFormulario() {
    if (modo === "login") {
      login(email, senha);
    } else {
      cadastro(email, senha);
    }
  }

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="hidden md:flex w-1/2 lg:w-3/4">
        <img
          className="w-screen h-screen object-cover"
          src={"https://picsum.photos/1200/700"}
          alt="Imagem da tela de Autenticação"
        />
      </div>
      <div className=" w-full sm:w-5/6 md:w-1/2 p-10">
        <h1
          className={`
        flex text-3xl font-bold    
        mb-5  
      `}
        >
          {modo === "login"
            ? "Entre com a sua conta"
            : "Cadastre-se na plataforma"}
        </h1>

        <AunthInput
          label="E-mail"
          placeHolder="E-mail"
          type="email"
          valor={email}
          onChange={(e) => setEmail(e)}
          required
          className="h-10 px-2 placeholder:text-indigo-400 border-2 rounded-xl border-indigo-400 focus:outline-none focus:border-green-500 focus:placeholder:text-green-500 mb-5"
        />

        <AunthInput
          label="Senha"
          placeHolder="Senha"
          valor={senha}
          onChange={(e) => setSenha(e)}
          type="password"
          required
          className="h-10 px-2 placeholder:text-indigo-400 border-2 rounded-xl border-indigo-400 focus:outline-none focus:border-green-500 focus:placeholder:text-green-500 mb-5"
        />

        <button
          onClick={enviarFormulario}
          className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}
        >
          {modo === "login" ? "Entrar" : "Cadastrar"}
        </button>

        <hr className="my-6 border-gray-300" />

        <button
          onClick={loginGoogle}
          className="flex gap-2 items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 border-gray-900 rounded-lg font-medium relative"
        >
          <span className="">{IconeGoogle}</span>
          <span className="">Sign in with Google</span>
        </button>

        {modo === "login" ? (
          <p className="mt-4" onClick={() => setModo("cadastro")}>
            Novo por aqui
            <a>
              <strong className="ml-2 cursor-pointer text-blue-500">
                Cadastre-se
              </strong>
            </a>
          </p>
        ) : (
          <p className="mt-4" onClick={() => setModo("login")}>
            Faça seu login
            <a>
              <strong className="ml-1 cursor-pointer text-blue-500">
                aqui
              </strong>
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
