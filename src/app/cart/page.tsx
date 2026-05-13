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
  const shipping = subtotal > 0 ? 0 : 0; // Free shipping logic
  const total = subtotal - discount + shipping;

  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] bg-slate-50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-emerald-600 font-semibold tracking-[3px] text-sm uppercase mb-2">
                REVIEW YOUR SELECTION
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
                Shopping Cart
              </h1>
            </div>

            {cartItems.length > 0 && (
              <button
                onClick={() => dispatch(clearCart())}
                className="text-red-500 hover:text-red-600 text-sm font-medium flex items-center gap-2 transition-colors"
              >
                <span>Clear Cart</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.595 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.595-1.858L5 7m5 4v6m4-6v6m1-10V9a1 1 0 00-1 1v1M12 4v6m2-6v6" />
                </svg>
              </button>
            )}
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl shadow-sm border border-slate-100">
              <div className="text-7xl mb-6">🛍️</div>
              <h2 className="text-4xl font-semibold text-slate-900 mb-4">Your cart is empty</h2>
              <p className="text-slate-500 mb-10 max-w-md mx-auto">
                Looks like you haven&apos;t added anything to your cart yet.
              </p>
              <Link href="/products">
                <Button size="lg" className="text-base px-10">
                  Start Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-8 space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl p-6 flex gap-6 group hover:shadow-xl transition-all duration-300 border border-slate-100"
                  >
                    <div className="relative w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-xl text-slate-900 leading-tight">{item.title}</h3>
                          <p className="text-emerald-600 font-medium mt-1">₹{item.price.toLocaleString("en-IN")}</p>
                        </div>
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="text-slate-400 hover:text-red-500 transition-colors p-1 -mr-1 -mt-1"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => dispatch(decreaseQuantity(item.id))}
                            className="w-9 h-9 rounded-xl border border-slate-200 hover:bg-slate-50 flex items-center justify-center text-xl font-light active:scale-95 transition-all"
                          >
                            −
                          </button>
                          <span className="font-semibold text-lg w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => dispatch(increaseQuantity(item.id))}
                            className="w-9 h-9 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl flex items-center justify-center text-xl font-light active:scale-95 transition-all"
                          >
                            +
                          </button>
                        </div>

                        <p className="text-2xl font-bold text-slate-900">
                          ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-4">
                <div className="bg-white rounded-3xl p-8 sticky top-8 border border-slate-100 shadow-sm">
                  <h2 className="text-2xl font-semibold mb-8 text-slate-900">Order Summary</h2>

                  <div className="space-y-4 text-lg">
                    <div className="flex justify-between text-slate-600">
                      <span>Subtotal ({cartItems.length} items)</span>
                      <span className="font-medium text-slate-900">₹{subtotal.toLocaleString("en-IN")}</span>
                    </div>

                    <div className="flex justify-between text-slate-600">
                      <span>Shipping</span>
                      <span className="text-emerald-600 font-semibold">FREE</span>
                    </div>

                    <div className="flex justify-between text-emerald-600">
                      <span>Discount (10% OFF)</span>
                      <span className="font-semibold">−₹{discount.toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 my-8" />

                  <div className="flex justify-between items-baseline">
                    <span className="text-xl font-semibold">Total</span>
                    <div className="text-right">
                      <span className="text-4xl font-bold text-slate-900">₹{total.toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <Link href="/checkout" className="block">
                      <button className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all text-white font-semibold py-4 rounded-2xl text-lg shadow-lg shadow-emerald-600/30 active:scale-[0.985]">
                        Proceed to Checkout →
                      </button>
                    </Link>

                    <Link href="/products" className="block">
                      <button className="w-full border border-slate-200 hover:bg-slate-50 transition-all font-medium py-4 rounded-2xl text-slate-700">
                        Continue Shopping
                      </button>
                    </Link>
                  </div>

                  <p className="text-center text-xs text-slate-500 mt-6">
                    Secure checkout powered by HarshiMart
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}