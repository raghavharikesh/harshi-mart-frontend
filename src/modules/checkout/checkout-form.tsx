"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import toast from "react-hot-toast";

import Button from "@/components/ui/button";

import Input from "@/components/ui/input";

import { useAppSelector } from "@/hooks/redux";

interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export default function CheckoutForm() {
  const router = useRouter();

  const cartItems = useAppSelector(
    (state) => state.cart.items
  );

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CheckoutFormData>();

  const onSubmit = async (
    data: CheckoutFormData
  ) => {
    console.log(data);

    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );

    toast.success("Order placed successfully");

    router.push("/order-success");
  };

  return (
    <div className="grid lg:grid-cols-[1fr_400px] gap-10">

      {/* Form */}
      <div>

        <h1 className="text-5xl font-bold mb-10">
          Checkout
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >

          <Input
            label="Full Name"
            placeholder="Enter full name"
            {...register("fullName")}
          />

          <Input
            label="Email"
            placeholder="Enter email"
            {...register("email")}
          />

          <Input
            label="Phone"
            placeholder="Enter phone"
            {...register("phone")}
          />

          <Input
            label="Address"
            placeholder="Enter address"
            {...register("address")}
          />

          <div className="grid md:grid-cols-2 gap-6">

            <Input
              label="City"
              placeholder="Enter city"
              {...register("city")}
            />

            <Input
              label="State"
              placeholder="Enter state"
              {...register("state")}
            />
          </div>

          <Input
            label="Zip Code"
            placeholder="Enter zip code"
            {...register("zipCode")}
          />

          {/* Payment */}
          <div className="border rounded-2xl p-6">

            <h2 className="text-2xl font-semibold mb-6">
              Payment Method
            </h2>

            <div className="space-y-4">

              <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">
                <input
                  type="radio"
                  defaultChecked
                />

                <span>
                  Cash on Delivery
                </span>
              </label>

              <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">
                <input type="radio" />

                <span>
                  Credit / Debit Card
                </span>
              </label>

              <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">
                <input type="radio" />

                <span>
                  UPI Payment
                </span>
              </label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Placing Order..."
              : "Place Order"}
          </Button>
        </form>
      </div>

      {/* Summary */}
      <div className="border rounded-2xl p-6 h-fit sticky top-24">

        <h2 className="text-3xl font-bold mb-8">
          Order Summary
        </h2>

        <div className="space-y-5">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between"
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

        <div className="border-t mt-8 pt-6">

          <div className="flex items-center justify-between text-lg">
            <span>Subtotal</span>

            <span>
              ₹{totalPrice}
            </span>
          </div>

          <div className="flex items-center justify-between text-lg mt-4">
            <span>Shipping</span>

            <span>₹100</span>
          </div>

          <div className="flex items-center justify-between text-2xl font-bold mt-6">
            <span>Total</span>

            <span>
              ₹{totalPrice + 100}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}