"use client";

import Image from "next/image";
import Link from "next/link";
import ProductFeatureOne from "../../../public/productFeature_1.webp";
import ProductFeatureTwo from "../../../public/productFeature_2.webp";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {/* PRODUCT_1 */}
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src={ProductFeatureOne}
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover z-10 hover:opacity-0 transition-opacity easy duration-500"
          />

          <Image
            src={ProductFeatureTwo}
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Combo 5 Ream giấy A3 80</span>
          <span className="font-medium">70.000 đ</span>
        </div>
        <div className="text-sm text-gray-500">
          Giấy ghi chú Pastel Thiên Long gồm 100 tờ trong 1 xấp với định lượng
        </div>
        <button className="w-max ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Thêm vào giỏ
        </button>
      </Link>

       {/* PRODUCT_2 */}
       <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src={ProductFeatureOne}
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover z-10 hover:opacity-0 transition-opacity easy duration-500"
          />

          <Image
            src={ProductFeatureTwo}
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Combo 5 Ream giấy A3 80</span>
          <span className="font-semibold">70.000 đ</span>
        </div>
        <div className="text-sm text-gray-500">
          Giấy ghi chú Pastel Thiên Long gồm 100 tờ trong 1 xấp với định lượng
        </div>
        <button className="w-max ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Thêm vào giỏ
        </button>
      </Link>

       {/* PRODUCT_3 */}
       <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src={ProductFeatureOne}
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover z-10 hover:opacity-0 transition-opacity easy duration-500"
          />

          <Image
            src={ProductFeatureTwo}
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Combo 5 Ream giấy A3 80</span>
          <span className="font-medium">70.000 đ</span>
        </div>
        <div className="text-sm text-gray-500">
          Giấy ghi chú Pastel Thiên Long gồm 100 tờ trong 1 xấp với định lượng
        </div>
        <button className="w-max ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Thêm vào giỏ
        </button>
      </Link>

       {/* PRODUCT_4 */}
       <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src={ProductFeatureOne}
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover z-10 hover:opacity-0 transition-opacity easy duration-500"
          />

          <Image
            src={ProductFeatureTwo}
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Combo 5 Ream giấy A3 80</span>
          <span className="font-medium">70.000 đ</span>
        </div>
        <div className="text-sm text-gray-500">
          Giấy ghi chú Pastel Thiên Long gồm 100 tờ trong 1 xấp với định lượng
        </div>
        <button className="w-max ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white">
          Thêm vào giỏ
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
