import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Kaisei_Tokumin } from "next/font/google";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import "./global.css";
const font = Kaisei_Tokumin({
  subsets: ["latin", "latin-ext"],
  weight: "800",
  style: "normal",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <Component {...pageProps} />
        <motion.div
          className="slide-in"
          initial={{ scaleY: 2 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className="slide-out"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
