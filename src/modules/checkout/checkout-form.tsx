"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAppSelector } from "@/hooks/redux";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  paymentMethod: "cod" | "card" | "upi";
}

export default function CheckoutForm() {
  const router = useRouter();
  const cartItems = useAppSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 99;
  const total = subtotal + shipping;

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<CheckoutFormData>({
    defaultValues: { paymentMethod: "cod" },
  });

  const selectedPayment = watch("paymentMethod");

  const onSubmit = async (data: CheckoutFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1400));
    toast.success("🎉 Order Confirmed! We'll prepare it shortly.");
    router.push("/order-success");
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Progress */}
      <div className="flex justify-center mb-16">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-emerald-600">
            <div className="w-9 h-9 rounded-2xl bg-emerald-100 flex items-center justify-center text-lg font-semibold">1</div>
            <span className="font-medium">Cart</span>
          </div>
          <div className="w-20 h-px bg-gradient-to-r from-emerald-600 to-slate-300" />
          <div className="flex items-center gap-3 font-semibold text-slate-900">
            <div className="w-9 h-9 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-lg font-semibold">2</div>
            <span>Checkout</span>
          </div>
          <div className="w-20 h-px bg-slate-200" />
          <div className="flex items-center gap-3 text-slate-400">
            <div className="w-9 h-9 rounded-2xl border-2 border-slate-300 flex items-center justify-center text-lg font-semibold">3</div>
            <span>Success</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        {/* Main Form */}
        <div className="lg:col-span-7">
          <div className="mb-12">
            <p className="text-emerald-600 font-semibold tracking-[3px] text-sm mb-3">SECURE • FAST • RELIABLE</p>
            <h1 className="text-6xl font-bold tracking-tighter text-slate-900">Checkout</h1>
            <p className="text-xl text-slate-600 mt-3">Complete your purchase</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            {/* Contact */}
            <div className="bg-white/70 backdrop-blur-xl border border-slate-100 rounded-3xl p-10 shadow-xl shadow-slate-100/80">
              <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <span>Contact Information</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  placeholder="Aarav Sharma"
                  {...register("fullName", { required: true })}
                  error={errors.fullName?.message}
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="aarav@email.com"
                  {...register("email", { required: true })}
                />
              </div>
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+91 98765 43210"
                className="mt-6"
                {...register("phone", { required: true })}
              />
            </div>

            {/* Address */}
            <div className="bg-white/70 backdrop-blur-xl border border-slate-100 rounded-3xl p-10 shadow-xl shadow-slate-100/80">
              <h2 className="text-2xl font-semibold mb-8">Shipping Address</h2>
              <Input
                label="Street Address"
                placeholder="123, Green Park, Main Street"
                {...register("address", { required: true })}
                className="mb-6"
              />
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="City" placeholder="New Delhi" {...register("city")} />
                <Input label="State" placeholder="Delhi" {...register("state")} />
              </div>
              <Input
                label="Pin Code"
                placeholder="110001"
                className="mt-6"
                {...register("zipCode")}
              />
            </div>

            {/* Payment */}
            <div className="bg-white/70 backdrop-blur-xl border border-slate-100 rounded-3xl p-10 shadow-xl shadow-slate-100/80">
              <h2 className="text-2xl font-semibold mb-8">Payment Method</h2>
              <div className="space-y-4">
                {[
                  { value: "cod", label: "Cash on Delivery", icon: "🏠", desc: "Pay when you receive" },
                  { value: "card", label: "Credit / Debit Card", icon: "💳", desc: "Visa, Mastercard, RuPay" },
                  { value: "upi", label: "UPI Payment", icon: "📱", desc: "Instant & Secure" },
                ].map((method) => (
                  <label
                    key={method.value}
                    className={`group flex items-center gap-5 border rounded-3xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      selectedPayment === method.value
                        ? "border-emerald-600 bg-emerald-50 shadow-emerald-100"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      value={method.value}
                      {...register("paymentMethod")}
                      className="w-5 h-5 accent-emerald-600"
                    />
                    <div className="text-3xl transition-transform group-hover:scale-110">{method.icon}</div>
                    <div>
                      <p className="font-semibold text-lg">{method.label}</p>
                      <p className="text-slate-500">{method.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full py-7 text-xl font-semibold rounded-3xl shadow-2xl shadow-emerald-600/30 hover:shadow-emerald-600/40 transition-all active:scale-[0.985]"
            >
              {isSubmitting ? "Processing Order..." : `Confirm Order • ₹${total.toLocaleString("en-IN")}`}
            </Button>
          </form>
        </div>

        {/* Order Summary - Premium */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl p-9 lg:sticky top-8 border border-slate-100 shadow-2xl shadow-slate-200/60">
            <h2 className="text-3xl font-bold mb-8">Your Order</h2>

            <div className="space-y-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-6">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-lg leading-tight">{item.title}</p>
                    <p className="text-slate-500 text-sm mt-2">Quantity: {item.quantity}</p>
                    <p className="text-2xl font-bold mt-3 text-slate-900">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-100 space-y-5 text-lg">
              <div className="flex justify-between">
                <span className="text-slate-600">Subtotal</span>
                <span className="font-medium">₹{subtotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Shipping</span>
                <span className="text-emerald-600 font-medium">₹{shipping}</span>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200 flex justify-between items-end">
              <span className="text-2xl font-semibold">Total</span>
              <div>
                <span className="text-5xl font-bold tracking-tighter">₹{total.toLocaleString("en-IN")}</span>
                <p className="text-xs text-slate-500 text-right">incl. all taxes</p>
              </div>
            </div>

            {/* Trust Bar */}
            <div className="mt-12 flex justify-center gap-8 text-slate-400">
              <div className="text-center">
                <div className="text-2xl mb-1">🔒</div>
                <p className="text-xs tracking-widest">SECURE</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🚚</div>
                <p className="text-xs tracking-widest">2-4 DAYS</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">⭐</div>
                <p className="text-xs tracking-widest">4.9/5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}