interface ConteudoIProps {
  children: React.ReactNode;
}

export default function Conteudo({ children }: ConteudoIProps) {
  return (
    <div
      className={`
    flex flex-col mt-7 dark:text-gray-100
  `}
    >
      {children}
    </div>
  );
}
