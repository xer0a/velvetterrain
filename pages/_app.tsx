import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Kaisei_Tokumin } from "next/font/google";

const font = Kaisei_Tokumin({
  subsets: ["latin", "latin-ext"],
  weight: "800",
  style: "normal",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${font.className}`}>
      <Component {...pageProps} />;
    </main>
  );
}
