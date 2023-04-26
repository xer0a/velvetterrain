import { Header } from "./Header";
import { LandingBanner } from "./LandingBanner";

export const Layout = ({
  children,
  maxWidth = true,
}: {
  children: any;
  maxWidth?: boolean;
}) => {
  return (
    <>
      <main className="w-full z-1 primary-background min-h-screen mx-auto">
        <div className="px-4">{children}</div>
      </main>
    </>
  );
};
