"use client";

import { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import ProductCard from "@/components/product/product-card";
import { products } from "@/constants/products";
export default function ProductListing() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [sort, setSort] = useState("");

  const categories = [
    "All",
    "Electronics",
    "Accessories",
    "Fashion",
    "Gaming",
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    filtered = filtered.filter((product) =>
      product.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) =>
          product.category === selectedCategory
      );
    }

    if (sort === "low") {
      filtered.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "high") {
      filtered.sort(
        (a, b) => b.price - a.price
      );
    }

    return filtered;
  }, [search, selectedCategory, sort]);

  return (
    <main className="bg-slate-50 min-h-screen">

      <section className="py-24">

        <div className="container-custom">

          {/* Header */}
          <div className="mb-16">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-11 h-11 rounded-2xl bg-emerald-50 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-600" />
              </div>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">
                Premium Collection
              </p>
            </div>

            <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-10">

              <div>

                <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-none">
                  Explore Products
                </h1>

                <p className="mt-6 text-lg text-slate-500 leading-8 max-w-2xl">
                  Discover premium curated products
                  designed for modern lifestyle,
                  everyday performance, and
                  exceptional shopping experience.
                </p>
              </div>

              {/* Search */}
              <div className="relative w-full xl:w-[380px]">

                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

                <input
                  type="text"
                  placeholder="Search premium products..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  className="
                    w-full h-14
                    pl-14 pr-5
                    rounded-[24px]
                    border border-slate-200
                    bg-white
                    text-sm
                    outline-none
                    shadow-sm
                    focus:ring-4
                    focus:ring-emerald-500/10
                    focus:border-emerald-500
                    transition-all duration-300
                  "
                />
              </div>
            </div>
          </div>

          {/* Layout */}
          <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-start">

            {/* Sidebar */}
            <aside className="sticky top-24">

              <div className="space-y-6">

                {/* Categories */}
                <div className="bg-white/90 backdrop-blur-xl rounded-[32px] border border-white/60 shadow-[0_10px_40px_rgba(15,23,42,0.06)] p-8">

                  <div className="flex items-center justify-between mb-8">

                    <div>

                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 mb-3">
                        Browse
                      </p>

                      <h2 className="text-3xl font-black tracking-tight text-slate-900">
                        Categories
                      </h2>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
                      <SlidersHorizontal className="w-5 h-5 text-emerald-600" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">

                    {categories.map((category) => {

                      const active =
                        selectedCategory === category;

                      return (
                        <button
                          key={category}
                          onClick={() =>
                            setSelectedCategory(category)
                          }
                          className={`
                            h-14 rounded-2xl
                            text-sm font-semibold
                            transition-all duration-300

                            ${
                              active
                                ? "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-[0_12px_30px_rgba(16,185,129,0.35)] scale-[1.02]"
                                : "bg-slate-100 text-slate-700 hover:bg-white hover:shadow-md"
                            }
                          `}
                        >
                          {category}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sort */}
                <div className="bg-white/90 backdrop-blur-xl rounded-[32px] border border-white/60 shadow-[0_10px_40px_rgba(15,23,42,0.06)] p-8">

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 mb-3">
                    Pricing
                  </p>

                  <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8">
                    Sort Products
                  </h2>

                  <div className="space-y-4">

                    <button
                      onClick={() => setSort("low")}
                      className={`
                        w-full h-14 rounded-2xl
                        text-sm font-semibold
                        transition-all duration-300

                        ${
                          sort === "low"
                            ? "bg-slate-900 text-white shadow-xl"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }
                      `}
                    >
                      Price: Low to High
                    </button>

                    <button
                      onClick={() => setSort("high")}
                      className={`
                        w-full h-14 rounded-2xl
                        text-sm font-semibold
                        transition-all duration-300

                        ${
                          sort === "high"
                            ? "bg-slate-900 text-white shadow-xl"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }
                      `}
                    >
                      Price: High to Low
                    </button>
                  </div>

                  {/* Reset */}
                  <button
                    onClick={() => {
                      setSort("");
                      setSelectedCategory("All");
                      setSearch("");
                    }}
                    className="
                      mt-6
                      w-full h-12
                      rounded-2xl
                      border border-slate-200
                      bg-white
                      text-sm font-semibold
                      text-slate-600
                      hover:bg-slate-50
                      transition-all duration-300
                    "
                  >
                    Reset Filters
                  </button>
                </div>

                {/* Promo 
                <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-emerald-500 to-emerald-700 p-8 text-white shadow-[0_20px_50px_rgba(16,185,129,0.35)]">

                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" />

                  <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3">
                    Limited Deal
                  </p>

                  <h3 className="text-4xl font-black leading-tight">
                    Save Up To 40%
                  </h3>

                  <p className="mt-5 text-emerald-50 leading-7 text-sm">
                    Premium offers on electronics,
                    fashion, accessories and gaming.
                  </p>

                  <button className="mt-8 h-12 px-6 rounded-2xl bg-white text-emerald-700 text-sm font-bold hover:bg-emerald-50 transition-all duration-300">
                    Explore Deals
                  </button>
                </div>*/}
              </div>
            </aside>

            {/* Products */}
            <div>

              {/* Results */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">

                <div>

                  <h2 className="text-3xl font-black tracking-tight text-slate-900">
                    Featured Products
                  </h2>

                  <p className="mt-2 text-slate-500">
                    Showing
                    <span className="font-semibold text-slate-900 mx-2">
                      {filteredProducts.length}
                    </span>
                    products
                  </p>
                </div>
              </div>

              {/* Grid */}
              {filteredProducts.length > 0 ? (

                <div className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-7">

                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  ))}
                </div>

              ) : (

                <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm p-20 text-center">

                  <h2 className="text-4xl font-black tracking-tight text-slate-900">
                    No Products Found
                  </h2>

                  <p className="mt-4 text-slate-500 leading-7">
                    Try changing your filters
                    or search keywords.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}