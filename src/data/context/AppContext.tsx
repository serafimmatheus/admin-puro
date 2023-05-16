import React, { createContext, useEffect, useState } from "react";

type Tema = "dark" | "";

interface AppProviderIProps {
  children: React.ReactNode;
}

interface AppContextIProps {
  tema: Tema;
  alternarTema: () => void;
}

const AppContext = createContext<AppContextIProps>({} as AppContextIProps);

export function AppProvider({ children }: AppProviderIProps) {
  const [tema, setTema] = useState<any>("");
  function alternarTema() {
    const novoTema = tema === "" ? "dark" : "";
    setTema(novoTema);
    localStorage.setItem("tema-dashboard-puro", novoTema);
  }

  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema-dashboard-puro");
    setTema(temaSalvo);
  }, []);

  return (
    <AppContext.Provider value={{ tema, alternarTema }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
