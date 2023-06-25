import { Header } from "./Header";
import clsx from "clsx";

export const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Header />
      <main className={clsx("bg-pearl w-full z-1 mx-auto")}>
        <div className="px-4">{children}</div>
      </main>
    </>
  );
};
