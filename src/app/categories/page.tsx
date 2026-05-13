// src/app/categories/page.tsx
// REPLACE the entire file with this

import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const categories = [
  { name: "Electronics", icon: "💻", bg: "#eff6ff", iconBg: "#dbeafe", color: "#2563eb" },
  { name: "Fashion",     icon: "👗", bg: "#fdf2f8", iconBg: "#fce7f3", color: "#db2777" },
  { name: "Gaming",      icon: "🎮", bg: "#f5f3ff", iconBg: "#ede9fe", color: "#7c3aed" },
  { name: "Accessories", icon: "⌚", bg: "#fffbeb", iconBg: "#fef3c7", color: "#d97706" },
  { name: "Shoes",       icon: "👟", bg: "#ecfdf5", iconBg: "#d1fae5", color: "#059669" },
  { name: "Mobile",      icon: "📱", bg: "#fef2f2", iconBg: "#fee2e2", color: "#dc2626" },
];

export default function CategoriesPage() {
  return (
    <>
      <Navbar />

      <main className="py-20" style={{ background: "#f8fafc", minHeight: "80vh" }}>
        <div className="container-custom">

          {/* Heading */}
          <div className="mb-14">
            <p
              className="text-xs font-bold uppercase mb-3"
              style={{ color: "#0d9166", letterSpacing: "3px" }}
            >
              Browse
            </p>
            <h1
              className="text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#0c1117" }}
            >
              All Categories
            </h1>
          </div>

          {/* Grid — hover via CSS class, no JS handlers */}
          <style>{`
            .cat-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
            .cat-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(12,17,23,0.10); }
          `}</style>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/categories/${cat.name.toLowerCase()}`}
                className="cat-card flex flex-col items-center justify-center gap-4 rounded-2xl h-48 font-semibold text-base"
                style={{
                  background: cat.bg,
                  border: `1px solid ${cat.color}20`,
                  color: "#1e293b",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ background: cat.iconBg }}
                >
                  {cat.icon}
                </div>
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}