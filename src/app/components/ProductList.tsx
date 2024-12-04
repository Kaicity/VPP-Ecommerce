"use client";

import Image from "next/image";
import Link from "next/link";
import ProductFeatureOne from "../../../public/productFeature_1.webp";
import ProductFeatureTwo from "../../../public/productFeature_2.webp";

const products = [
  {
    id: "product-1",
    name: "Combo 5 Ream giấy A3 80",
    price: 70000,
    description:
      "Giấy ghi chú Pastel Thiên Long gồm 100 tờ trong 1 xấp với định lượng",
    image1: ProductFeatureOne,
    image2: ProductFeatureTwo,
  },
  {
    id: "product-2",
    name: "Combo 10 Ream giấy A4 70",
    price: 90000,
    description: "Giấy A4 với chất lượng cao, phù hợp cho văn phòng",
    image1: ProductFeatureOne,
    image2: ProductFeatureTwo,
  },
  {
    id: "product-3",
    name: "Combo 5 Ream giấy A3 100",
    price: 75000,
    description: "Giấy ghi chú cao cấp",
    image1: ProductFeatureOne,
    image2: ProductFeatureTwo,
  },
  {
    id: "product-4",
    name: "Combo 5 Ream giấy A3 120",
    price: 80000,
    description: "Giấy ghi chú cao cấp cho văn phòng",
    image1: ProductFeatureOne,
    image2: ProductFeatureTwo,
  },
];

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {products.map((product) => (
        <Link
          href={`/product/${product.id}`} // Sử dụng id của sản phẩm trong đường dẫn
          key={product.id}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src={product.image1}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            <Image
              src={product.image2}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-medium">
              {product.price.toLocaleString()} đ
            </span>
          </div>
          <div className="text-sm text-gray-500">{product.description}</div>
          <button className="w-max ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Thêm vào giỏ
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
