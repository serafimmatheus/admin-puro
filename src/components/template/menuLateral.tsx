import {
  BoxProduto,
  IconeAjustes,
  IconeCasa,
  IconeSair,
  IconeSino,
} from "../icons";
import logoPrincipal from "../../assets/logo/logoPrincipal.png";
import MenuItem from "./MenuItem";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAppAuth } from "@/data/hook/useAuth";

export default function MenuLaretal() {
  const router = useRouter();
  const { sairDaAplicacao } = useAppAuth();
  function logOut() {
    sairDaAplicacao();
    router.push("/login");
  }
  return (
    <aside
      className={`
      flex flex-col
      dark:bg-gray-900
    `}
    >
      <div
        className={`
        flex justify-center items-center
        h-20 w-20
        pl-2
      `}
      >
        <Image src={logoPrincipal} alt="Logo PURO" />
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url="/" texto="Início" icone={IconeCasa} />
        <MenuItem url="/produtos" texto="Produtos" icone={BoxProduto} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>

      <ul>
        <MenuItem
          texto="Sair"
          icone={IconeSair}
          onClick={logOut}
          className="text-red-400 hover:text-white hover:bg-red-400"
        />
      </ul>
    </aside>
  );
}
