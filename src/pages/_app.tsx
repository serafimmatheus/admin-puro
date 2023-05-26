import { AppProvider } from "@/data/context/AppContext";
import { AuthProvider } from "@/data/context/AuthContext";
import { ProductProvider } from "@/data/context/ProductsContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <ProductProvider>
          <Component {...pageProps} />
        </ProductProvider>
      </AppProvider>
    </AuthProvider>
  );
}
