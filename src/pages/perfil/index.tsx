import Layout from "@/components/template/layout";
import { useAppData } from "@/data/hook/userAppData";

export default function PerfilUsuario() {
  const { tema } = useAppData();
  return (
    <div className="flex w-screen h-screen bg-white">
      <Layout
        titulo="Pagina Perfil do usuário"
        subtitulo="Gerenciar aqui suas informações"
      >
        <h3>Conteudo</h3>
      </Layout>
    </div>
  );
}

//bg-gradient-to-tr from-purple to-orange
//bg-gradient-to-tr from-purple-500 to-orange-500
