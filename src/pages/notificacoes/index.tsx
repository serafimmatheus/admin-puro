import Layout from "@/components/template/layout";
import { useAppData } from "@/data/hook/userAppData";

export default function Notificacoes() {
  const { tema } = useAppData();
  return (
    <div className="flex w-screen h-screen bg-white">
      <Layout
        titulo="Pagina Notificações"
        subtitulo="Gerenciar as notificações aqui"
      >
        <h3>{tema}</h3>
      </Layout>
    </div>
  );
}

//bg-gradient-to-tr from-purple to-orange
//bg-gradient-to-tr from-purple-500 to-orange-500
