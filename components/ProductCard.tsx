import { ProductInfo } from "@/pages";
import Image from "next/image";

export const ProductCard = ({ product }: { product: ProductInfo }) => {
  return (
    <>
      <div className="w-64">
        <div className="bg-green flex h-64 justify-center items-center space-y-4 text-white">
          <div className="relative w-20 h-20">
            {product.image && (
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
            )}
          </div>
        </div>
        <div className="text-center uppercase text-brown">
          <p>{product.name}</p>
          <p className="opacity-75">{`$${product.price}`}</p>
        </div>
      </div>
    </>
  );
};
