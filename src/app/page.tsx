"use client";

import Image from "next/image";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Slider from "./components/Slider";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-6 xl:32 2xl:px-32">
        <h1 className="text-2xl">Sản phẩm đặc trưng</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-6 xl:32 2xl:px-32 mb-12">
          Loại sản phẩm
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-6 xl:32 2xl:px-32">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <Image
            src="https://images.pexels.com/photos/983830/pexels-photo-983830.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Descriptive Alt Text"
            width={810}
            height={810}
            className="object-cover"
          />
          <Image
            src="https://images.pexels.com/photos/35202/eraser-office-supplies-office-office-accessories.jpg?auto=compress&cs=tinysrgb&w=600"
            alt="Descriptive Alt Text"
            width={810}
            height={810}
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-6 xl:32 2xl:px-32">
        <h1 className="text-2xl">Sản phẩm mới nhất</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
