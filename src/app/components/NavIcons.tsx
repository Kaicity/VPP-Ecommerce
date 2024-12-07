'use client';

import Image from 'next/image';
import Profile from '../../../public/profile.png';
import Notification from '../../../public/notification.png';
import Cart from '../../../public/cart.png';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CartModal from './CartModal';
import { useApp } from '../context/AppContext';

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { isCartOpen, toggleCart, closeCart } = useApp();

  const router = useRouter();

  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push('/login');
    }
    setIsProfileOpen((prev) => !prev);
  };

  const goToCheckoutCart = () => {
    router.push('/checkout-cart');
    closeCart();
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image src={Profile} alt="" width={22} height={22} className="cursor-pointer" onClick={handleProfile} />

      {isProfileOpen && (
        <div className="absolute p-4 top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/">Thông tin</Link>
          <div className="mt-2 cursor-pointer">Đăng xuất</div>
        </div>
      )}

      <Image src={Notification} alt="" width={22} height={22} className="cursor-pointer" />

      <div className="relative cursor-pointer">
        <Image src={Cart} alt="" width={22} height={22} className="cursor-pointer" onClick={toggleCart} />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center">
          2
        </div>
      </div>

      {isCartOpen && <CartModal handleGoToCheckoutCart={goToCheckoutCart} />}
    </div>
  );
};

export default NavIcons;
