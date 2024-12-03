import Add from "../components/Add";
import CustomizeProduct from "../components/CustomizeProduct";
import ProductImage from "../components/ProductImages";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-6 xl:32 2xl:px-32 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImage />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Sổ ghi nhật ký</h1>
        <p className="text-gray-500">
          Hãy để quyển nhật ký này trở thành người bạn lưu giữ mọi cảm xúc, ý
          tưởng và kế hoạch của bạn. Với thiết kế tinh tế, bìa cứng sang trọng
          hoặc bìa da mềm mại, sản phẩm mang lại cảm giác chắc chắn và dễ chịu
          khi sử dụng
        </p>
        <div className="h-[2px] bg-gray-100"></div>
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">180.000 đ</h3>
          <h1 className="text-2xl font-medium">100.000 đ</h1>
        </div>
        <div className="h-[2px] bg-gray-100"></div>
        {/* Đối với thương mại điện tử quần áo thì thêm sizes và colors */}

        <Add />
        
        <div className="h-[2px] bg-gray-100"></div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Nội dung</h4>
          <p>
            Hãy để quyển nhật ký này trở thành người bạn lưu giữ mọi cảm xúc, ý
            tưởng và kế hoạch của bạn. Với thiết kế tinh tế, bìa cứng sang trọng
            hoặc bìa da mềm mại, sản phẩm mang lại cảm giác chắc chắn và dễ chịu
            khi sử dụng
          </p>
        </div>

        <div className="text-sm">
          <h4 className="font-medium mb-4">Nội dung</h4>
          <p>
            Hãy để quyển nhật ký này trở thành người bạn lưu giữ mọi cảm xúc, ý
            tưởng và kế hoạch của bạn. Với thiết kế tinh tế, bìa cứng sang trọng
            hoặc bìa da mềm mại, sản phẩm mang lại cảm giác chắc chắn và dễ chịu
            khi sử dụng
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
