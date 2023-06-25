import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { NextPage } from "next";
import Head from "next/head";
export interface ProductInfo {
  name: string;
  image?: string;
  price: number;
  href: string;
  isStocked: boolean;
}

const mockProductGrid = [
  {
    name: "S.M.O.G Hoodie",
    image: "/images/smog-hoodie-complete.jpg",
    price: 60,
    href: "#",
    isStocked: true,
  },
  {
    name: "Uniform Hat",
    image: "/images/uniform-hat.jpg",
    price: 35,
    href: "#",
    isStocked: true,
  },
  {
    name: "S.M.O.G Jacket",
    image: "/images/jacket-hat-front.jpg",
    price: 50,
    href: "#",
    isStocked: true,
  },
  {
    name: "Black Top",
    image: "/images/black-top.jpg",
    price: 15,
    href: "#",
    isStocked: true,
  },
  {
    name: "Sash Carry Bag",
    image: "/images/carry-bag.jpg",
    price: 35,
    href: "#",
    isStocked: true,
  },
  {
    name: "Blue Oversized Jacket Robe",
    image: "/images/quinn-full.jpg",
    price: 50,
    href: "#",
    isStocked: true,
  },
];

const LandingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Velvet Terrain - Home</title>
        <meta
          name="description"
          content="Velvet Terrain is an apparel & clothing retailer based in Auckland, New Zealand."
        />
      </Head>
      <Layout bgColor="pearl">
        <div className="flex h-full justify-center items-center py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-20 md:p-4">
            {mockProductGrid.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LandingPage;
