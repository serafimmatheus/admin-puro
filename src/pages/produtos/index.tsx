import Spinner from "@/components/spinner";
import Layout from "@/components/template/layout";
import { useProducts } from "@/data/hook/useProducts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PageProdutos() {
  const { allProducts, ListaTodosProdutos, isLoadingProduct } = useProducts();
  //   const [imagens, setImagens] = useState([]);
  const ListaProdutos: any = ListaTodosProdutos;
  useEffect(() => {
    allProducts(20, 0);
  }, []);

  const paginacao = (limit: any, offset: any) => {
    allProducts(limit, offset);
  };

  return (
    <div className="flex w-screen h-screen bg-white overflow-hidden">
      <Layout
        titulo="Meus Produtos"
        subtitulo="Gerenciar aqui as informaçoes dos seus produtos."
        isSearch={true}
        paginacao={paginacao}
      >
        <h3>Lista produtos</h3>

        {isLoadingProduct ? (
          <div className="w-full h-full flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <div className="w-full h-full">
            <ul className=" w-full h-full flex flex-wrap gap-4">
              {ListaProdutos.map((produto: any) =>
                produto.filho || !produto.nome || !produto.apelido ? (
                  ""
                ) : (
                  <Link key={produto.id} href={`/produtos/${produto.id}`}>
                    <li className="flex items-center justify-center w-56 h-80 bg-green-700 dark:bg-gray-700 px-10 py-10 rounded-lg text-white">
                      <div>
                        <p>{produto.nome ? produto.nome : produto.apelido}</p>
                      </div>
                    </li>
                  </Link>
                )
              )}
            </ul>
          </div>
        )}
      </Layout>
    </div>
  );
}
