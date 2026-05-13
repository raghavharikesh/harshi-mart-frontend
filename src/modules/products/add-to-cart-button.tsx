// src/modules/products/add-to-cart-button.tsx
"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useAppDispatch } from "@/hooks/redux";
import { addToCart } from "@/redux/features/cart-slice";
import { Product } from "@/types/product";

export default function AddToCartButton({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const [adding, setAdding] = useState(false);

  const handleAddToCart = () => {
    setAdding(true);
    dispatch(addToCart({ id: product.id, title: product.title, price: product.price, image: product.image }));
    toast.success("Added to cart!", {
      style: { background: "#0d9166", color: "#fff", borderRadius: "12px", fontSize: "14px", fontWeight: "600" },
    });
    setTimeout(() => setAdding(false), 800);
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={handleAddToCart}
        className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-semibold text-white transition-all"
        style={{
          background: adding ? "#0a7a56" : "#0d9166",
          boxShadow: "0 4px 16px rgba(13,145,102,0.3)",
        }}
      >
        <ShoppingCart className="w-4 h-4" />
        {adding ? "Adding..." : "Add to Cart"}
      </button>

      <Link
        href="/cart"
        className="flex-1 flex items-center justify-center py-4 rounded-2xl text-sm font-semibold transition-all"
        style={{ border: "2px solid #0d9166", color: "#0d9166" }}
      >
        Buy Now
      </Link>
    </div>
  );
}