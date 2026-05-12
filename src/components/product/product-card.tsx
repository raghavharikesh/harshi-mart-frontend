"use client";

import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { Product } from "@/types/product";
import { useAppDispatch } from "@/hooks/redux";
import { addToCart } from "@/redux/features/cart-slice";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const [wished, setWished] = useState(false);
  const [adding, setAdding] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    setAdding(true);
    dispatch(addToCart({ id: product.id, title: product.title, price: product.price, image: product.image }));
    toast.success("Added to cart!", {
      style: {
        background: "#0d9166",
        color: "#fff",
        borderRadius: "12px",
        fontSize: "14px",
        fontWeight: "600",
      },
    });
    setTimeout(() => setAdding(false), 800);
  };

  const toggleWish = (e: React.MouseEvent) => {
    e.preventDefault();
    setWished((prev) => !prev);
    toast(wished ? "Removed from wishlist" : "Added to wishlist ❤️", {
      style: { borderRadius: "12px", fontSize: "14px" },
    });
  };

  // Category color map
  const catColors: Record<string, string> = {
    Electronics: "#3b82f6",
    Fashion: "#ec4899",
    Gaming: "#8b5cf6",
    Accessories: "#f59e0b",
    Shoes: "#0d9166",
    Mobile: "#ef4444",
  };
  const catColor = catColors[product.category] || "#0d9166";

  return (
    <Link
      href={`/products/${product.id}`}
      className="group bg-white rounded-2xl overflow-hidden block hover-lift"
      style={{ border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(12,17,23,0.06)" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "260px", background: "#f8fafc" }}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Wishlist btn */}
        <button
          onClick={toggleWish}
          className="absolute top-3 right-3 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 z-10"
          style={{
            background: wished ? "#fef2f2" : "rgba(255,255,255,0.9)",
            border: `1px solid ${wished ? "#fca5a5" : "rgba(0,0,0,0.08)"}`,
            backdropFilter: "blur(8px)",
          }}
        >
          <Heart
            className="w-4 h-4 transition-all"
            style={{ color: wished ? "#ef4444" : "#94a3b8", fill: wished ? "#ef4444" : "none" }}
          />
        </button>
        {/* Category pill */}
        <div
          className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
          style={{ background: `${catColor}18`, color: catColor, border: `1px solid ${catColor}25` }}
        >
          {product.category}
        </div>
      </div>

      {/* Details */}
      <div className="p-5">
        <h2 className="font-semibold text-[#1e293b] text-base leading-snug mb-3 group-hover:text-[#0d9166] transition-colors">
          {product.title}
        </h2>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-[#0c1117]">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5" style={{ color: "#f59e0b", fill: "#f59e0b" }} />
            <span className="text-sm font-medium text-[#475569]">{product.rating}</span>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
          style={{
            background: adding ? "#0a7a56" : "#0d9166",
            color: "white",
            boxShadow: "0 4px 12px rgba(13,145,102,0.25)",
          }}
        >
          <ShoppingCart className="w-4 h-4" />
          {adding ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </Link>
  );
}