// src/app/products/[id]/page.tsx

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import AddToCartButton from "@/modules/products/add-to-cart-button";
import { products } from "@/constants/products";
import { Star, Shield, Truck, RotateCcw, ChevronLeft } from "lucide-react";

const catColors: Record<string, { text: string; bg: string }> = {
  Electronics: { text: "#2563eb", bg: "#dbeafe" },
  Fashion:     { text: "#db2777", bg: "#fce7f3" },
  Gaming:      { text: "#7c3aed", bg: "#ede9fe" },
  Accessories: { text: "#d97706", bg: "#fef3c7" },
  Shoes:       { text: "#059669", bg: "#d1fae5" },
  Mobile:      { text: "#dc2626", bg: "#fee2e2" },
};

interface Props { params: Promise<{ id: string }> }

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="container-custom py-32 text-center">
          <p className="text-2xl font-bold" style={{ color: "#0c1117" }}>Product not found</p>
          <Link href="/products" className="text-sm mt-4 inline-block" style={{ color: "#0d9166" }}>← Back to products</Link>
        </main>
        <Footer />
      </>
    );
  }

  const cat = catColors[product.category] ?? { text: "#0d9166", bg: "#d1fae5" };

  return (
    <>
      <Navbar />

      <main style={{ background: "#f8fafc", minHeight: "80vh" }}>
        <div className="container-custom py-10">

          {/* Breadcrumb */}
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-sm mb-8 transition-colors"
            style={{ color: "#94a3b8" }}
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Products
          </Link>

          {/* Main grid */}
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* Image */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ height: "480px", background: "#f1f5f9", border: "1px solid #e2e8f0" }}
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div
              className="rounded-3xl p-8"
              style={{ background: "white", border: "1px solid #e2e8f0", boxShadow: "0 2px 16px rgba(12,17,23,0.06)" }}
            >
              {/* Category badge */}
              <span
                className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
                style={{ background: cat.bg, color: cat.text }}
              >
                {product.category}
              </span>

              {/* Title */}
              <h1
                className="text-4xl font-bold leading-tight mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#0c1117" }}
              >
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4,5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4"
                      style={{
                        color: "#f59e0b",
                        fill: star <= Math.round(product.rating) ? "#f59e0b" : "none",
                      }}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold" style={{ color: "#0c1117" }}>{product.rating}</span>
                <span className="text-sm" style={{ color: "#94a3b8" }}>· 128 reviews</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold" style={{ color: "#0c1117" }}>
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                <span className="text-lg line-through" style={{ color: "#cbd5e1" }}>
                  ₹{Math.round(product.price * 1.2).toLocaleString("en-IN")}
                </span>
                <span
                  className="text-sm font-bold px-2 py-0.5 rounded-lg"
                  style={{ background: "#dcfce7", color: "#16a34a" }}
                >
                  20% off
                </span>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#64748b" }}>
                Premium quality {product.title.toLowerCase()} with excellent features and modern design.
                Built for performance and style — perfect for the modern Indian consumer.
              </p>

              {/* Perks */}
              <div
                className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-2xl"
                style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
              >
                {[
                  { icon: Truck,      label: "Free Delivery", sub: "Orders ₹499+" },
                  { icon: Shield,     label: "1 Year Warranty", sub: "Manufacturer" },
                  { icon: RotateCcw,  label: "Easy Returns", sub: "7-day policy" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-1">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center mb-1"
                      style={{ background: "rgba(13,145,102,0.1)" }}
                    >
                      <Icon className="w-4 h-4" style={{ color: "#0d9166" }} />
                    </div>
                    <span className="text-xs font-semibold" style={{ color: "#0c1117" }}>{label}</span>
                    <span className="text-xs" style={{ color: "#94a3b8" }}>{sub}</span>
                  </div>
                ))}
              </div>

              {/* CTA buttons — client component for cart dispatch */}
              <AddToCartButton product={product} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}