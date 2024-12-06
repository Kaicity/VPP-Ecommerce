'use client';

import Image from 'next/image';
import BannerProduct from '../../../public/bannerProduct.png';
import Filter from '../components/Filtrer';
import ProductList from '../components/ProductList';
import { useEffect, useState } from 'react';
import { Product } from '../models/product';
import { getProducts } from '../api/product';
import Spinner from '../components/Spinner';

const ListPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      setTimeout(() => {
        if (data) {
          setProducts(data);
        }
        setLoading(false);
      }, 500);
    } catch (error: any) {
      setError(error.message);
    }
  };

  console.log(products);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      {/* BANNER */}
      <div className="hidden bg-pink-50 p-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Siêu ưu đãi 12.12 Sale 50% các <br /> sản phẩm được yêu thích nhất
          </h1>
          <button className="bg-lama text-white w-max py-3 px-5 text-sm">Mua ngay</button>
        </div>
        <div className="relative w-1/3">
          <Image src={BannerProduct} alt="" className="object-contain"></Image>
        </div>
      </div>
      {/* FILTER FOR PRODUCT */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className="mt-12 text-xl font-semibold">Tiện dụng cho bạn</h1>
      {loading ? (
        <div className="">
          <Spinner />
        </div>
      ) : (
        <div className="">
          <ProductList products={products} />
        </div>
      )}
    </div>
  );
};

export default ListPage;
