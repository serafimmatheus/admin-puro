import Layout from "@/components/template/layout";

export default function Home() {
  return (
    <div className="flex w-screen h-screen bg-white">
      <Layout
        titulo="Pagina inicial"
        subtitulo="Estamos construindo um template ADM!!"
      >
        <h3>Conteudo</h3>
      </Layout>
    </div>
  );
}

//bg-gradient-to-tr from-purple to-orange
//bg-gradient-to-tr from-purple-500 to-orange-500
