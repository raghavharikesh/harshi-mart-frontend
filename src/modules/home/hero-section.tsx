"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import { ArrowRight, Shield, Truck, Star } from "lucide-react";

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "4.9★", label: "Avg Rating" },
  { value: "Free", label: "Delivery ₹499+" },
];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0c1117 0%, #1e293b 60%, #0a3d2b 100%)",
        minHeight: "88vh",
      }}
    >
      {/* Decorative background circles */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #10b981, transparent)", transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0d9166, transparent)", transform: "translate(-40%, 40%)" }}
      />

      <div className="container-custom relative z-10 flex items-center" style={{ minHeight: "88vh" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full py-16">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest"
              style={{ background: "rgba(13,145,102,0.15)", color: "#10b981", border: "1px solid rgba(16,185,129,0.2)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              New arrivals every week
            </div>

            <h1
              className="text-5xl lg:text-6xl xl:text-7xl leading-[1.05] font-bold text-white mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Discover
              <span
                className="block"
                style={{
                  background: "linear-gradient(135deg, #10b981, #34d399)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Premium
              </span>
              Lifestyle
            </h1>

            <p className="text-lg leading-relaxed mb-10" style={{ color: "#94a3b8", maxWidth: "440px" }}>
              Electronics, fashion, and accessories — curated for the modern Indian consumer. Fast delivery, easy returns, secure payments.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <Link href="/products">
                <Button size="lg" className="gap-2">
                  Shop Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/categories">
                <button
                  className="px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{ border: "2px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.5)";
                    (e.currentTarget as HTMLElement).style.color = "#10b981";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)";
                  }}
                >
                  Browse Categories
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs mt-1" style={{ color: "#64748b" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="relative h-[520px] hidden lg:block"
          >
            <div
              className="relative h-full rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                alt="Premium products"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(12,17,23,0.4) 0%, transparent 60%)" }}
              />
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -left-8 top-20 px-4 py-3 rounded-2xl flex items-center gap-3"
              style={{ background: "white", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(13,145,102,0.1)" }}>
                <Truck className="w-5 h-5" style={{ color: "#0d9166" }} />
              </div>
              <div>
                <div className="text-xs font-bold text-[#0c1117]">Free Delivery</div>
                <div className="text-xs text-[#94a3b8]">On orders ₹499+</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -right-8 bottom-28 px-4 py-3 rounded-2xl flex items-center gap-3"
              style={{ background: "white", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(245,158,11,0.1)" }}>
                <Star className="w-5 h-5" style={{ color: "#f59e0b" }} />
              </div>
              <div>
                <div className="text-xs font-bold text-[#0c1117]">4.9/5 Rating</div>
                <div className="text-xs text-[#94a3b8]">50K+ reviews</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}