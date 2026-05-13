"use client";

import Link from "next/link";
import { Heart, ShoppingCart, User, Search, Menu } from "lucide-react";
import { useAppSelector } from "@/hooks/redux";
import { useState, useEffect } from "react";

export default function Navbar() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/categories", label: "Categories" },
  ];

  return (
    <>
      <header
        className="sticky top-0 z-50"
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid #e2e8f0",
          boxShadow: "0 1px 12px rgba(12,17,23,0.06)",
        }}
      >
        <div className="container-custom h-18 flex items-center justify-between py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
              style={{ background: "linear-gradient(135deg, #0d9166, #10b981)" }}
            >
              H
            </div>
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#0c1117" }}
            >
              Harshi<span style={{ color: "#0d9166" }}>Mart</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-[#475569] hover:text-[#0c1117] hover:bg-[#f1f5f9] transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <Link
              href="/products"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-[#475569] hover:text-[#0c1117] hover:bg-[#f1f5f9] transition-all duration-150"
            >
              <Search className="w-4.5 h-4.5" strokeWidth={2} />
            </Link>

            <Link
              href="/wishlist"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-[#475569] hover:text-[#0c1117] hover:bg-[#f1f5f9] transition-all duration-150"
            >
              <Heart className="w-4.5 h-4.5" strokeWidth={2} />
            </Link>

            <Link
              href="/cart"
              className="relative w-10 h-10 rounded-xl flex items-center justify-center text-[#475569] hover:text-[#0c1117] hover:bg-[#f1f5f9] transition-all duration-150"
            >
              <ShoppingCart className="w-4.5 h-4.5" strokeWidth={2} />
              {mounted && cartItems.length > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center"
                  style={{ background: "#0d9166" }}
                >
                  {cartItems.length}
                </span>
              )}
            </Link>

            <Link
              href="/profile"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-[#475569] hover:text-[#0c1117] hover:bg-[#f1f5f9] transition-all duration-150"
            >
              <User className="w-4.5 h-4.5" strokeWidth={2} />
            </Link>

            {/* Mobile menu */}
            <button
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-[#475569] hover:bg-[#f1f5f9] transition-all"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-4.5 h-4.5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl p-6 flex flex-col gap-6"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-[#0c1117]">
                Harshi<span className="text-[#0d9166]">Mart</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#475569] hover:bg-[#f1f5f9]"
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-[#475569] hover:text-[#0d9166] hover:bg-[#f1f5f9] transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}