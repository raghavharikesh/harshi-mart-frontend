import Link from "next/link";

import Button from "@/components/ui/button";

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">

      <div className="max-w-xl text-center">

        <div className="text-7xl mb-8">
          🎉
        </div>

        <h1 className="text-5xl font-bold">
          Order Placed Successfully
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Thank you for shopping with
          Harshi Mart.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <Link href="/">
            <Button>
              Continue Shopping
            </Button>
          </Link>

          <Link href="/products">
            <Button variant="outline">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}