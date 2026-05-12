"use client";

import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/layout/navbar";
import Button from "@/components/ui/button";

import {
  useAppDispatch,
  useAppSelector,
} from "@/hooks/redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "@/redux/features/cart-slice";

export default function CartPage() {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector(
    (state) => state.cart.items
  );

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-16">

        {/* Heading */}
        <div className="flex items-center justify-between mb-12">

          <div>
            <h1 className="text-5xl font-bold">
              Shopping Cart
            </h1>

            <p className="mt-3 text-gray-600">
              Manage your selected products.
            </p>
          </div>

          {cartItems.length > 0 && (
            <button
              onClick={() => dispatch(clearCart())}
              className="
                border border-red-500 text-red-500
                px-5 py-3 rounded-xl
                hover:bg-red-500 hover:text-white
                transition-all duration-300
              "
            >
              Clear Cart
            </button>
          )}
        </div>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="border rounded-3xl py-24 text-center">

            <div className="text-7xl mb-6">
              🛒
            </div>

            <h2 className="text-4xl font-bold">
              Your cart is empty
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              Looks like you haven&apos;t added
              anything yet.
            </p>

            <Link
              href="/products"
              className="inline-block mt-8"
            >
              <Button>
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_380px] gap-10">

            {/* Cart Items */}
            <div className="space-y-6">

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="
                    border rounded-3xl p-5
                    flex flex-col md:flex-row gap-6
                    hover:shadow-lg transition-all duration-300
                  "
                >

                  {/* Product Image */}
                  <div className="relative w-full md:w-[180px] h-[180px] rounded-2xl overflow-hidden bg-gray-100">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col justify-between">

                    <div>

                      <h2 className="text-2xl font-semibold">
                        {item.title}
                      </h2>

                      <p className="text-3xl font-bold mt-4">
                        ₹{item.price}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-6 mt-8">

                      {/* Quantity */}
                      <div className="flex items-center gap-4">

                        <button
                          onClick={() =>
                            dispatch(
                              decreaseQuantity(
                                item.id
                              )
                            )
                          }
                          className="
                            w-11 h-11 border rounded-xl
                            text-xl hover:bg-black hover:text-white
                            transition-all duration-300
                          "
                        >
                          -
                        </button>

                        <span className="text-xl font-semibold min-w-[30px] text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            dispatch(
                              increaseQuantity(
                                item.id
                              )
                            )
                          }
                          className="
                            w-11 h-11 border rounded-xl
                            text-xl hover:bg-black hover:text-white
                            transition-all duration-300
                          "
                        >
                          +
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() =>
                          dispatch(
                            removeFromCart(
                              item.id
                            )
                          )
                        }
                        className="
                          text-red-500 font-medium
                          hover:underline
                        "
                      >
                        Remove Item
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div
              className="
                border rounded-3xl p-8 h-fit
                sticky top-24
              "
            >

              <h2 className="text-3xl font-bold mb-10">
                Order Summary
              </h2>

              {/* Summary Items */}
              <div className="space-y-5">

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="
                      flex items-center justify-between
                      text-lg
                    "
                  >

                    <div>
                      <p className="font-medium">
                        {item.title}
                      </p>

                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="font-semibold">
                      ₹
                      {item.price *
                        item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t mt-10 pt-8 space-y-5">

                <div className="flex items-center justify-between text-lg">
                  <span>Subtotal</span>

                  <span>
                    ₹{totalPrice}
                  </span>
                </div>

                <div className="flex items-center justify-between text-lg">
                  <span>Shipping</span>

                  <span>₹100</span>
                </div>

                <div className="flex items-center justify-between text-lg">
                  <span>Tax</span>

                  <span>₹50</span>
                </div>

                <div className="border-t pt-5 flex items-center justify-between">

                  <span className="text-2xl font-bold">
                    Total
                  </span>

                  <span className="text-3xl font-bold">
                    ₹{totalPrice + 150}
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-10 space-y-4">

                <Link href="/checkout">
                  <Button className="w-full">
                    Proceed to Checkout
                  </Button>
                </Link>

                <Link href="/products">
                  <Button
                    variant="outline"
                    className="w-full"
                  >
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}