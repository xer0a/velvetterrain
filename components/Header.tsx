import Head from "next/head";
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

export const Header = () => {
  return (
    <>
      <Head>
        <title>Velvet Terrain</title>
      </Head>
      <div className="bg-[#5a8163] sticky top-0 flex p-4 text-[#f0e4cc] items-center">
        <div>
          <Image
            src="/images/velvet-terrain.png"
            alt="shouldnt have smoked that shit"
            width={100}
            height={100}
          />
        </div>
        <div className="text-center text-2xl px-4 flex flex-col justify-center items-center">
          <p>Velvet</p>
          <p>Terrain</p>
        </div>
        <ul className="flex gap-4 p-4">
          {navigationItems.map((item: INavItem) => (
            <Link key={item.href} href={item.href}>
              <p className="hover:underline hover:transition hover:duration-100 hover:ease-in-out">
                {item.name}
              </p>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};
