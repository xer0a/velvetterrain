import Image from "next/image";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
interface INavItem {
  name: string;
  href: string;
}

const navigationItems: INavItem[] = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
  {
    name: "AI",
    href: "/ai",
  },

  {
    name: "Contact",
    href: "/contact",
  },
];

export const Header = () => {
  const router = useRouter();
  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-20 bg-green">
        <div className="flex justify-between px-2 sm:px-4 md:px-12 py-2 lg:hidden bg-dark-green">
          <div
            className="relative h-16 aspect-square cursor-pointer "
            onClick={() => router.push("/")}
          >
            <Image
              src="/images/velvet-terrain.png"
              alt="Logo for Velvet Terrain"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-wrap gap-x-8 justify-center max-w-[224px] items-center text-lg text-pearl">
            {navigationItems.map((item: INavItem) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:underline"
              >
                <p className="">{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
        {/*  */}
        <div className="hidden lg:grid grid-cols-3 py-4 items-center mx-auto">
          <div className="text-pearl mx-auto flex w-80 justify-between border-2 items-center">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-2 py-1 focus-within:outline-none focus:text-brown"
            />
            <MagnifyingGlassIcon className="w-6 h-6 mx-2" />
          </div>

          <div
            className="relative h-24 aspect-square cursor-pointer mx-auto"
            onClick={() => router.push("/")}
          >
            <Image
              src="/images/velvet-terrain.png"
              alt="Logo for Velvet Terrain"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="">
            <div className="flex justify-between z-99 w-20 px-2 mx-auto text-pearl">
              <ShoppingCartIcon className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-evenly bg-dark-green text-pearl ">
          <div>
            <ul className="hidden md:flex gap-10 p-2 text-2xl">
              {navigationItems.map((item: INavItem) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:underline"
                >
                  <p className="">{item.name}</p>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
