import Image from "next/image";
import Link from "next/link";

interface INavItem {
  name: string;
  href: string;
}

const navigationItems: INavItem[] = [
  {
    name: "Products",
    href: "/products",
  },

  {
    name: "Archive",
    href: "/archive",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const Layout = ({ children }: { children: any }) => {
  console.log();
  return (
    <div className="primary-green relative">
      <div className="sticky top-0 border-2 flex">
        <div></div>
        <ul className="flex gap-4 p-4">
          {navigationItems.map((item: INavItem) => (
            <Link href={item.href}>{item.name}</Link>
          ))}
        </ul>
      </div>
      <main className="w-full min-h-screen mx-auto px-4">{children}</main>
    </div>
  );
};
