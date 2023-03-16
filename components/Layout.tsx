import { Header } from "./Header";
import { LandingBanner } from "./LandingBanner";

export const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Header />
      <main className="w-full z-1 primary-background min-h-screen mx-auto">
        <LandingBanner />
        <div className="px-4">{children}</div>
      </main>
    </>
  );
};
