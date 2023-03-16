import { ProductInfo } from "@/pages";
import Image from "next/image";

export const ProductCard = ({ product }: { product: ProductInfo }) => {
  return (
    <>
      <div className="border bg-slate-700 w-72 h-72 flex flex-col justify-center items-center space-y-4 text-white">
        <div className="relative w-20 h-20">
          {product.image && (
            <Image
              alt="todo make dynamic"
              fill
              style={{ objectFit: "cover" }}
              src={product.image}
            />
          )}
        </div>
        <p>{product.name}</p>
        <p>{`$${product.price}`}</p>
      </div>
    </>
  );
};
