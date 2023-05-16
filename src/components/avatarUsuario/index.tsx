import { useAppAuth } from "@/data/hook/useAuth";
import Link from "next/link";

export default function AvatarUsuario() {
  const { usuario } = useAppAuth();
  return (
    <Link href={"/perfil"} className="w-10 h-10 ml-4">
      <img
        src={usuario?.imagemUrl ?? "/semusuario.png"}
        alt="Avatar do usuário"
        className="rounded-full border-2 border-gray-950 object-contain cursor-pointer"
      />
    </Link>
  );
}
