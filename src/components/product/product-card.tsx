"use client";

import Link from "next/link";

import Image from "next/image";

import toast from "react-hot-toast";

import Button from "@/components/ui/button";

import { Product } from "@/types/product";

import { useAppDispatch } from "@/hooks/redux";

import { addToCart } from "@/redux/features/cart-slice";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = (
    e: React.MouseEvent
  ) => {
    e.preventDefault();

    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      })
    );

    toast.success("Added to cart");
  };

  return (
    <Link
      href={`/products/${product.id}`}
      className="
        bg-white rounded-3xl overflow-hidden
        border hover:shadow-2xl
        transition-all duration-300 block
      "
    >

      <div className="relative h-[320px]">

        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">

        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <h2 className="text-2xl font-semibold mt-3">
          {product.title}
        </h2>

        <div className="flex items-center justify-between mt-6">

          <p className="text-3xl font-bold">
            ₹{product.price}
          </p>

          <span className="text-yellow-500 font-medium">
            ⭐ {product.rating}
          </span>
        </div>

        <Button
          className="w-full mt-6"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </div>
    </Link>
  );
}