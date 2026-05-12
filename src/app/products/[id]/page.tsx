import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import { products } from "@/constants/products";
import Button from "@/components/ui/button";

interface ProductDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsProps) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14">

          <div className="relative h-[500px] rounded-3xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-gray-500 text-lg">
              {product.category}
            </p>

            <h1 className="text-5xl font-bold mt-4">
              {product.title}
            </h1>

            <p className="text-4xl font-bold mt-8">
              ₹{product.price}
            </p>

            <p className="mt-6 text-lg text-gray-600">
              Premium quality product with
              excellent features and modern design.
            </p>

            <div className="mt-10 flex gap-4">
              <Button>
                Add to Cart
              </Button>

              <Button variant="outline">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}