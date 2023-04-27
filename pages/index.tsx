// import { Header } from "@/components/Header";
import { Header } from "@/components/Header";
import { LandingBanner } from "@/components/LandingBanner";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { NextPage } from "next";

export interface ProductInfo {
  name: string;
  image?: string;
  price: number;
  href: string;
  isStocked: boolean;
}

const mockProductGrid = [
  {
    name: "SMOG Jacket",
    image: "https://www.bit.ly/placeholder-img",
    price: 60,
    href: "#",
    isStocked: true,
  },
  {
    name: "SMOG Hat",
    image: "https://www.bit.ly/placeholder-img",
    price: 35,
    href: "#",
    isStocked: true,
  },
  {
    name: "Zip tag Hoodie",
    image: "https://www.bit.ly/placeholder-img",
    price: 50,
    href: "#",
    isStocked: true,
  },
  {
    name: "Bandana",
    image: "https://www.bit.ly/placeholder-img",
    price: 15,
    href: "#",
    isStocked: true,
  },
  {
    name: "Satchel Carry Strap Bag",
    image: "https://www.bit.ly/placeholder-img",
    price: 35,
    href: "#",
    isStocked: true,
  },
  {
    name: "White Wifebeater in a Black Tank",
    image: "https://www.bit.ly/placeholder-img",
    price: 20,
    href: "#",
    isStocked: true,
  },
];

const LandingPage: NextPage = () => {
  return (
    <>
      <div className="sticky top-0 w-full">
        <Header />
      </div>
      <div className="absolute h-96 w-full top-0">
        <LandingBanner />
      </div>

      <Layout>
        <div className="flex h-full justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:p-4">
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
