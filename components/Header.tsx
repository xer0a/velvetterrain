import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
interface INavItem {
  name: string;
  href: string;
}

const navigationItems: INavItem[] = [
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Archive",
    href: "/archive",
  },
  {
    name: "AI",
    href: "/ai",
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

export const Header = () => {
  return (
    <>
      <Head>
        <title>Velvet Terrain | Welcome</title>
      </Head>
      <div className="bg-black sticky z-10 top-0 flex justify-between p-6 text-[#f0e4cc] items-center">
        <div className="flex justify-evenly items-center max-w-2xl w-full">
          <Image
            src="/images/velvet-terrain.png"
            alt="Logo for Velvet Terrain"
            width={100}
            height={100}
          />
          <ul className="hidden md:flex gap-4 p-4 text-2xl">
            {navigationItems.map((item: INavItem) => (
              <Link key={item.href} href={item.href}>
                <p className="transition-all duration-450 ease-in-out border-t-0 hover:border-b-2">
                  {item.name}
                </p>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex justify-between w-20 px-2">
          <MagnifyingGlassIcon className="w-6 h-6" />
          <ShoppingCartIcon className="w-6 h-6" />
        </div>
      </div>
    </>
  );
};
