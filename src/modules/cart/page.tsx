"use client";

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

        <h1 className="text-5xl font-bold mb-12">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold">
              Your cart is empty
            </h2>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_350px] gap-10">

            {/* Cart Items */}
            <div className="space-y-6">

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-2xl p-5 flex gap-5"
                >

                  <div className="relative w-[120px] h-[120px] rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">

                    <h2 className="text-2xl font-semibold">
                      {item.title}
                    </h2>

                    <p className="text-xl font-bold mt-2">
                      ₹{item.price}
                    </p>

                    <div className="flex items-center gap-4 mt-5">

                      <button
                        onClick={() =>
                          dispatch(
                            decreaseQuantity(
                              item.id
                            )
                          )
                        }
                        className="w-10 h-10 border rounded-lg"
                      >
                        -
                      </button>

                      <span className="text-lg font-semibold">
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
                        className="w-10 h-10 border rounded-lg"
                      >
                        +
                      </button>

                      <button
                        onClick={() =>
                          dispatch(
                            removeFromCart(
                              item.id
                            )
                          )
                        }
                        className="ml-6 text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="border rounded-2xl p-6 h-fit">

              <h2 className="text-3xl font-bold mb-8">
                Order Summary
              </h2>

              <div className="flex items-center justify-between mb-6">
                <span className="text-lg">
                  Total
                </span>

                <span className="text-3xl font-bold">
                  ₹{totalPrice}
                </span>
              </div>

              <Button className="w-full">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}