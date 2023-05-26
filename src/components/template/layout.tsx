import { useAppData } from "@/data/hook/userAppData";
import Cabecalho from "./cabecalho";
import Conteudo from "./conteudo";
import MenuLaretal from "./menuLateral";
import ForcarAutenticacao from "../auth/forcarAutenticacao";

interface LayoutIProps {
  children: React.ReactNode;
  titulo: string;
  subtitulo: string;
  isSearch?: boolean;
  paginacao?: (limit: any, offset: any) => void;
}

export default function Layout({
  children,
  titulo,
  subtitulo,
  isSearch = false,
  paginacao,
}: LayoutIProps) {
  const { tema } = useAppData();
  return (
    <ForcarAutenticacao>
      <div className={`flex h-screen w-screen ${tema} `}>
        <MenuLaretal />
        <div
          className={`flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800`}
        >
          <Cabecalho titulo={titulo} subtitulo={subtitulo} />
          <Conteudo isSearch={isSearch} paginacao={paginacao}>
            {children}
          </Conteudo>
        </div>
      </div>
    </ForcarAutenticacao>
  );
}
