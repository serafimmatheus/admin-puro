interface TituloIProps {
  titulo: string;
  subtitulo: string;
}

export default function Titulo({ subtitulo, titulo }: TituloIProps) {
  return (
    <div>
      <h1
        className={`
        flex flex-col
        font-black
        text-3xl
        text-gray-900
        dark:text-gray-200
        
      `}
      >
        {titulo}
      </h1>
      <h2
        className={`
        font-light text-sm text-gray-600 dark:text-gray-300
      `}
      >
        {subtitulo}
      </h2>
    </div>
  );
}
