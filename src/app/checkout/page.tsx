"use client";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CheckoutForm from "@/modules/checkout/checkout-form";

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50 min-h-[90vh] py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CheckoutForm />
        </div>
      </main>
      <Footer />
    </>
  );
}