"use client";

import Image from "next/image";
import { useState } from "react";
import MenuOption from "../../../public/menu.png";
import Link from "next/link";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <Image
        src={MenuOption}
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/">Trang chủ</Link>
          <Link href="/">Cửa hàng</Link>
          <Link href="/">Giảm giá</Link>
          <Link href="/">Thông tin</Link>
          <Link href="/">Đăng xuất</Link>
          <Link href="/">Liên hệ</Link>
          <Link href="/">Giỏ hàng</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
