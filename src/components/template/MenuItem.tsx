import Link from "next/link";

interface MenuItemIProps {
  url?: string;
  texto: string;
  icone: any;
  onClick?: (e: any) => void;
  className?: string;
}

export default function MenuItem({
  icone,
  texto,
  url,
  onClick,
  className,
}: MenuItemIProps) {
  return (
    <li
      className={`hover:bg-gray-200 dark:hover:bg-gray-500 hover:rounded-bl-xl hover:rounded-tl-xl cursor-pointer w-20 h-20`}
      onClick={onClick}
    >
      {url ? (
        <Link href={url}>
          <span className="flex flex-col justify-center items-center h-20 w-20 dark:text-white">
            {icone}
            <span className="text-xs font-light text-gray-600 dark:text-white">
              {texto}
            </span>
          </span>
        </Link>
      ) : (
        <span
          className={`flex flex-col justify-center  text-gray-600 items-center h-20 w-20 ${className} `}
        >
          {icone}
          <span className="text-xs font-light">{texto}</span>
        </span>
      )}
    </li>
  );
}
