// src/modules/home/categories-section.tsx
// REPLACE the entire file with this

import Link from "next/link";

const categories = [
  { name: "Electronics", icon: "💻", bg: "#eff6ff", iconBg: "#dbeafe", color: "#2563eb" },
  { name: "Fashion",     icon: "👗", bg: "#fdf2f8", iconBg: "#fce7f3", color: "#db2777" },
  { name: "Gaming",      icon: "🎮", bg: "#f5f3ff", iconBg: "#ede9fe", color: "#7c3aed" },
  { name: "Accessories", icon: "⌚", bg: "#fffbeb", iconBg: "#fef3c7", color: "#d97706" },
  { name: "Shoes",       icon: "👟", bg: "#ecfdf5", iconBg: "#d1fae5", color: "#059669" },
  { name: "Mobile",      icon: "📱", bg: "#fef2f2", iconBg: "#fee2e2", color: "#dc2626" },
];

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-slate-500">
      <style>{`
        .cat-tile { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .cat-tile:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(12,17,23,0.08); }
      `}</style>

      <div className="container-custom">

        {/* Section heading */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p
              className="text-xs font-bold uppercase mb-2"
              style={{ color: "#0d9166", letterSpacing: "3px" }}
            >
              Browse
            </p>
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#0c1117" }}
            >
              Shop by Category
            </h2>
          </div>
          <Link
            href="/categories"
            className="text-sm font-semibold"
            style={{ color: "#0d9166" }}
          >
            View All →
          </Link>
        </div>

        {/* 6-col grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/categories/${cat.name.toLowerCase()}`}
              className="cat-tile flex flex-col items-center justify-center gap-2 h-24 rounded-2xl text-sm font-semibold"
              style={{
                background: cat.bg,
                border: `1px solid ${cat.color}18`,
                color: "#1e293b",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{ background: cat.iconBg }}
              >
                {cat.icon}
              </div>
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}