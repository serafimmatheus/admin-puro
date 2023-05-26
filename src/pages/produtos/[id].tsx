import Spinner from "@/components/spinner";
import Layout from "@/components/template/layout";
import { useProducts } from "@/data/hook/useProducts";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function PageProdutos() {
  const { produtoPorId, produto, ListaTodosProdutos, isLoadingProduct } =
    useProducts();

  const route = useRouter();
  const { id } = route.query;

  useEffect(() => {
    produtoPorId(parseInt(id));
  }, []);

  return (
    <div className="flex w-screen h-screen bg-white">
      <Layout
        titulo="Meus Produtos"
        subtitulo="Gerenciar aqui as informaçoes dos seus produtos."
      >
        {isLoadingProduct ? (
          <Spinner />
        ) : (
          <>
            <div className="flex">
              <div>
                <Link href={"/"}>
                  <span>Home / </span>
                </Link>
              </div>

              <div>
                <Link href={"/produtos"}>
                  <span>Produtos / </span>
                </Link>
              </div>

              <div>
                <Link href={`/produtos/${produto.id}`}>
                  <span>{produto.nome} </span>
                </Link>
              </div>
            </div>

            <div className="w-52 bg-gray-400 p-4">
              <div className="w-full object-cover flex">
                <img
                  className="w-full"
                  src={`https://cdn.awsli.com.br/${produto?.imagem_principal?.caminho}`}
                  alt="teste"
                />
              </div>

              <p>{produto.nome}</p>
            </div>
          </>
        )}
      </Layout>
    </div>
  );
}
