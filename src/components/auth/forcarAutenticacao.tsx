import { useAppAuth } from "@/data/hook/useAuth";
import Head from "next/head";
import { useRouter } from "next/router";

interface ForcarAutenticacao {
  children: React.ReactNode;
}

export default function ForcarAutenticacao({ children }: ForcarAutenticacao) {
  const { usuario, carregando } = useAppAuth();

  const router = useRouter();

  function renderizarConteudo() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if(!document.cookie?.includes("admin-puro-auth-token")) {
                window.location.href = "/login"
              }
            `,
            }}
          />
        </Head>
        <div>{children}</div>
      </>
    );
  }

  function renderizarLoading() {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!carregando && usuario?.email) {
    return renderizarConteudo();
  } else if (carregando) {
    return renderizarLoading();
  } else {
    router.push("/login");
    return null;
  }
}
