import { useAppData } from "@/data/hook/userAppData";
import Titulo from "./titulo";
import ButtonDarkMode from "../ButtonDarkMode";
import AvatarUsuario from "../avatarUsuario";

interface CabecalhoIProps {
  titulo: string;
  subtitulo: string;
}

export default function Cabecalho({ subtitulo, titulo }: CabecalhoIProps) {
  const { alternarTema } = useAppData();
  return (
    <div className="flex">
      <Titulo titulo={titulo} subtitulo={subtitulo} />

      <div className="flex flex-grow justify-end items-center">
        <ButtonDarkMode />
        <AvatarUsuario />
      </div>
    </div>
  );
}
