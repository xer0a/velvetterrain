import { Header } from "./Header";
import clsx from "clsx";

export const Layout = ({
  children,
  bgColor,
}: {
  children: any;
  bgColor: "green" | "pearl";
}) => {
  return (
    <>
      <Header />
      <main
        className={clsx(
          bgColor === "green" && "bg-green",
          "bg-pearl w-full z-1 min-h-screen mx-auto"
        )}
      >
        <div className="px-4">{children}</div>
      </main>
    </>
  );
};
