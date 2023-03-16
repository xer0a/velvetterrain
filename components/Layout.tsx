import { Header } from "./Header";

export const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Header />
      <main className="w-full primary-background min-h-screen mx-auto px-4">
        {children}
      </main>
    </>
  );
};
