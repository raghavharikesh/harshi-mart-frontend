"use client";

import { useMemo, useState } from "react";

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
          product.category ===
          selectedCategory
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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Products
          </h1>

          <p className="mt-4 text-gray-600">
            Discover amazing products.
          </p>
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-10">

          {/* Sidebar */}
          <div className="border rounded-2xl p-6 h-fit">

            <h2 className="text-2xl font-semibold mb-6">
              Filters
            </h2>

            {/* Search */}
            <div className="mb-8">

              <p className="font-medium mb-3">
                Search
              </p>

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="
                  w-full border rounded-xl
                  px-4 py-3 outline-none
                "
              />
            </div>

            {/* Categories */}
            <div className="mb-8">

              <p className="font-medium mb-3">
                Categories
              </p>

              <div className="flex flex-col gap-3">

                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() =>
                      setSelectedCategory(
                        category
                      )
                    }
                    className={`
                      text-left px-4 py-2
                      rounded-lg border
                      ${
                        selectedCategory ===
                        category
                          ? "bg-black text-white"
                          : ""
                      }
                    `}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>

              <p className="font-medium mb-3">
                Sort By Price
              </p>

              <select
                value={sort}
                onChange={(e) =>
                  setSort(e.target.value)
                }
                className="
                  w-full border rounded-xl
                  px-4 py-3 outline-none
                "
              >
                <option value="">
                  Default
                </option>

                <option value="low">
                  Low to High
                </option>

                <option value="high">
                  High to Low
                </option>
              </select>
            </div>
          </div>

          {/* Products */}
          <div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <h2 className="text-3xl font-bold">
                  No Products Found
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}