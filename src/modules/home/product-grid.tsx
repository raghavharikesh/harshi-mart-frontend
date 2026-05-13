import Link from "next/link";

import {
  ArrowRight,
} from "lucide-react";

import ProductCard from "@/components/product/product-card";

import {
  products,
} from "@/constants/products";

export default function ProductGrid() {
  return (
    <section className="py-24 bg-slate-300 mb-10" >
      <div className="container-custom">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">

          <div>

            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-600 mb-3">
              Handpicked Collection
            </p>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              Featured Products
            </h2>

            <p className="mt-4 text-slate-500 max-w-lg leading-7">
              Discover premium curated products
              designed for modern lifestyle and
              everyday performance.
            </p>
          </div>

          <Link
            href="/products"
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            View All

            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Products Wrapper */}
        <div className="bg-white rounded-[32px] p-6 md:p-8 border border-slate-200 shadow-sm">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>

        {/* Mobile Button */}
        <div className="mt-8 flex justify-center md:hidden">

          <Link
            href="/products"
            className="flex items-center gap-2 text-sm font-semibold text-emerald-600"
          >
            View All

            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}