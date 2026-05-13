// src/app/cart/page.tsx
// REPLACE the entire file with this

"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Button from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "@/redux/features/cart-slice";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const subtotal = cartItems.reduce((t, i) => t + i.price * i.quantity, 0);
  const discount = Math.round(subtotal * 0.1);
  const total = subtotal - discount;

  return (
    <>
      <Navbar />

      <main className="py-16" style={{ background: "#f8fafc", minHeight: "80vh" }}>
        <div className="container-custom">

          {/* Heading */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#0d9166", letterSpacing: "3px" }}>
                Review
              </p>
              <h1
                className="text-4xl font-bold"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#0c1117" }}
              >
                Shopping Cart
              </h1>
            </div>
            {cartItems.length > 0 && (
              <button
                onClick={() => dispatch(clearCart())}
                className="text-sm font-medium px-4 py-2 rounded-xl border transition-all"
                style={{ borderColor: "#fca5a5", color: "#ef4444" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#ef4444";
                  (e.currentTarget as HTMLElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#ef4444";
                }}
              >
                Clear Cart
              </button>
            )}
          </div>

          {/* Empty state */}
          {cartItems.length === 0 ? (
            <div
              className="text-center py-24 rounded-3xl"
              style={{ background: "white", border: "1px solid #e2e8f0" }}
            >
              <div className="text-6xl mb-6">🛒</div>
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#0c1117" }}
              >
                Your cart is empty
              </h2>
              <p className="text-sm mb-8" style={{ color: "#94a3b8" }}>
                Looks like you haven&apos;t added anything yet.
              </p>
              <Link href="/products">
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_260px] gap-6">

              {/* Cart items */}
              <div className="flex flex-col gap-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 rounded-2xl"
                    style={{ background: "white", border: "1px solid #e2e8f0", boxShadow: "0 1px 6px rgba(12,17,23,0.04)" }}
                  >
                    {/* Thumbnail */}
                    <div
                      className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0"
                      style={{ background: "#f8fafc" }}
                    >
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate" style={{ color: "#1e293b" }}>
                        {item.title}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "#94a3b8" }}>
                        ₹{item.price.toLocaleString("en-IN")} each
                      </p>
                      <p className="text-base font-bold mt-1" style={{ color: "#0c1117" }}>
                        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                      </p>
                    </div>

                    {/* Qty controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-base font-bold transition-all"
                        style={{ border: "1px solid #e2e8f0", background: "white", color: "#475569" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#f1f5f9")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
                      >
                        −
                      </button>
                      <span className="text-sm font-bold min-w-[20px] text-center" style={{ color: "#0c1117" }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-base font-bold transition-all"
                        style={{ background: "#0d9166", color: "white", border: "1px solid #0d9166" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#0a7a56")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "#0d9166")}
                      >
                        +
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-xs font-medium transition-colors ml-2"
                      style={{ color: "#94a3b8" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* Order summary */}
              <div
                className="rounded-2xl p-5 h-fit sticky top-24"
                style={{ background: "white", border: "1px solid #e2e8f0", boxShadow: "0 4px 16px rgba(12,17,23,0.06)" }}
              >
                <h2 className="text-base font-bold mb-4" style={{ color: "#0c1117" }}>
                  Order Summary
                </h2>

                <div className="flex flex-col gap-2 text-sm mb-4">
                  <div className="flex justify-between" style={{ color: "#475569" }}>
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span style={{ color: "#0c1117", fontWeight: 500 }}>₹{subtotal.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between" style={{ color: "#475569" }}>
                    <span>Delivery</span>
                    <span style={{ color: "#0d9166", fontWeight: 600 }}>FREE</span>
                  </div>
                  <div className="flex justify-between" style={{ color: "#475569" }}>
                    <span>Discount (10%)</span>
                    <span style={{ color: "#0d9166", fontWeight: 600 }}>−₹{discount.toLocaleString("en-IN")}</span>
                  </div>
                </div>

                <div
                  className="flex justify-between items-center py-4 mb-4"
                  style={{ borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}
                >
                  <span className="text-sm font-bold" style={{ color: "#0c1117" }}>Total</span>
                  <span className="text-2xl font-bold" style={{ color: "#0c1117" }}>
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>

                <Link href="/checkout">
                  <button
                    className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all"
                    style={{ background: "#0d9166", boxShadow: "0 4px 14px rgba(13,145,102,0.3)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#0a7a56")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#0d9166")}
                  >
                    Proceed to Checkout →
                  </button>
                </Link>

                <Link href="/products">
                  <button
                    className="w-full mt-3 py-3 rounded-xl text-sm font-semibold transition-all"
                    style={{ border: "1px solid #e2e8f0", color: "#475569" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f8fafc")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}