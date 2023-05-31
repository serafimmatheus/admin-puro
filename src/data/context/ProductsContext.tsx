import { apiLI } from "@/API-LI/api-lojaIntegrada";
import { createContext, useContext, useState } from "react";
import { useAppAuth } from "../hook/useAuth";

interface ProductsContextIProps {
  allProducts: (limit: any, offset: any) => Promise<void>;
  produtoPorId: (id: number) => Promise<void>;
  ListaTodosProdutos: never[];
  produto: {};
  isLoadingProduct: boolean;
}

interface ProductProviderIProps {
  children: React.ReactNode;
}

interface ProdutoIProps {
  id: number;
  imagem_principal: Object;
  nome: string;
}

export const ProductsContext = createContext<ProductsContextIProps>(
  {} as ProductsContextIProps
);

// ?limit=20&offset=40

export const ProductProvider = ({ children }: ProductProviderIProps) => {
  const { usuario } = useAppAuth();
  const [ListaTodosProdutos, setListaTodosProdutos] = useState([]);
  const [produto, setProduto] = useState({});
  const [isLoadingProduct, setIsLoadingProduct] = useState(false);

  const allProducts = async (limit: any, offset: any) => {
    setIsLoadingProduct(true);
    apiLI
      .get(`/produto?limit=${limit}&offset=${offset}`, {
        headers: {
          Authorization: `chave_api ${usuario.chaveApi} aplicacao 9f3a4773-211d-45e2-8a6a-3daf33894f2c`,
        },
      })
      .then((response) => {
        setIsLoadingProduct(false);
        setListaTodosProdutos(response.data.objects);
      })
      .catch((err) => {
        setIsLoadingProduct(false);
        console.log(err);
      });
  };

  const produtoPorId = async (id: number) => {
    setIsLoadingProduct(true);
    apiLI
      .get(`/produto/${id}`, {
        headers: {
          Authorization: `chave_api ${usuario.chaveApi} aplicacao 9f3a4773-211d-45e2-8a6a-3daf33894f2c`,
        },
      })
      .then((response) => {
        setIsLoadingProduct(false);
        setProduto(response.data);
      })
      .catch((err) => {
        setIsLoadingProduct(false);
        console.log(err);
      });
  };
  return (
    <ProductsContext.Provider
      value={{
        allProducts,
        produtoPorId,
        ListaTodosProdutos,
        produto,
        isLoadingProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
