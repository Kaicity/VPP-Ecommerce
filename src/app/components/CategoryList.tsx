import Image from "next/image";
import Link from "next/link";
import ProductFeatureTwo from "../../../public/productFeature_2.webp";

const CategoryList = () => {
  return (
    <div className="px-4">
      <div className="flex gap-4 md:gap-8">
        <Link
          href={`list?cat=tes   t`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={ProductFeatureTwo}
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Văn phòng</h1>
        </Link>

        <Link
          href={`list?cat=test`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={ProductFeatureTwo}
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Văn phòng</h1>
        </Link>

        <Link
          href={`list?cat=test`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={ProductFeatureTwo}
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Văn phòng</h1>
        </Link>

        <Link
          href={`list?cat=test`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={ProductFeatureTwo}
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Văn phòng</h1>
        </Link>

        <Link
          href={`list?cat=test`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={ProductFeatureTwo}
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Văn phòng</h1>
        </Link>

        <Link
          href={`list?cat=test`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src={ProductFeatureTwo}
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Văn phòng</h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;