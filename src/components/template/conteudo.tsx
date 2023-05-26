interface ConteudoIProps {
  children: React.ReactNode;
  isSearch?: boolean;
  paginacao?: (limit: any, offset: any) => void;
}

export default function Conteudo({
  children,
  isSearch,
  paginacao,
}: ConteudoIProps) {
  return (
    <>
      <div
        className={`
    flex flex-col mt-7 dark:text-gray-100 w-full h-full overflow-auto
  `}
      >
        {children}
      </div>

      {isSearch && (
        <div className="flex justify-center items-center py-3 gap-6">
          <span
            onClick={paginacao ? () => paginacao(20, 0) : () => {}}
            className="flex justify-center items-center dark:bg-gray-600 bg-green-700 px-2 py-2 rounded-full w-8 h-8 text-white cursor-pointer dark:hover:bg-gray-700 hover:bg-green-800 transition-all"
          >
            1
          </span>
          <span
            onClick={paginacao ? () => paginacao(20, 20) : () => {}}
            className="flex justify-center items-center dark:bg-gray-600 bg-green-700 px-2 py-2 rounded-full w-8 h-8 text-white cursor-pointer dark:hover:bg-gray-700 hover:bg-green-800 transition-all"
          >
            2
          </span>
          <span
            onClick={paginacao ? () => paginacao(20, 40) : () => {}}
            className="flex justify-center items-center dark:bg-gray-600 bg-green-700 px-2 py-2 rounded-full w-8 h-8 text-white cursor-pointer dark:hover:bg-gray-700 hover:bg-green-800 transition-all"
          >
            3
          </span>
          <span
            onClick={paginacao ? () => paginacao(20, 60) : () => {}}
            className="flex justify-center items-center dark:bg-gray-600 bg-green-700 px-2 py-2 rounded-full w-8 h-8 text-white cursor-pointer dark:hover:bg-gray-700 hover:bg-green-800 transition-all"
          >
            4
          </span>
        </div>
      )}
    </>
  );
}
