'use client';

import Image from 'next/image';
import Link from 'next/link';
import ProductFeatureTwo from '../../../public/productFeature_2.webp';
import type { Product } from '../models/product';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {products.map((product) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src={product?.imageUrl}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            <Image src={ProductFeatureTwo} alt="" fill sizes="25vw" className="absolute object-cover" />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product?.name}</span>
            <span className="font-medium">{product?.price.toLocaleString()} đ</span>
          </div>
          <div className="text-sm text-gray-500">{product?.description}</div>
          <button className="w-max ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Thêm vào giỏ
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
