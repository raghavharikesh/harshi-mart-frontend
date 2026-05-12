"use client";

import Link from "next/link";

import {
  Heart,
  ShoppingCart,
  User,
} from "lucide-react";

import { useAppSelector } from "@/hooks/redux";

export default function Navbar() {
  const cartItems = useAppSelector(
    (state) => state.cart.items
  );

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">

      <div className="container-custom h-20 flex items-center justify-between">

        <Link
          href="/"
          className="text-3xl font-bold tracking-tight"
        >
          Harshi Mart
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">

          <Link
            href="/"
            className="hover:text-gray-500 transition"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="hover:text-gray-500 transition"
          >
            Products
          </Link>

          <Link
            href="/categories"
            className="hover:text-gray-500 transition"
          >
            Categories
          </Link>
        </nav>

        <div className="flex items-center gap-6">

          <Link href="/wishlist">
            <Heart className="w-5 h-5" />
          </Link>

          <Link
            href="/cart"
            className="relative"
          >
            <ShoppingCart className="w-5 h-5" />

            {cartItems.length > 0 && (
              <span
                className="
                  absolute -top-2 -right-2
                  bg-black text-white
                  text-[10px]
                  w-5 h-5 rounded-full
                  flex items-center justify-center
                "
              >
                {cartItems.length}
              </span>
            )}
          </Link>

          <Link href="/profile">
            <User className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}