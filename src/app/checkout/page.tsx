"use client";

import Navbar from "@/components/layout/navbar";

import CheckoutForm from "@/modules/checkout/checkout-form";

export default function CheckoutPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-16">
        <CheckoutForm />
      </main>
    </>
  );
}