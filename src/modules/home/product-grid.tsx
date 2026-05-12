import ProductCard from "@/components/product/product-card";
import { products } from "@/constants/products";

export default function ProductGrid() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold">
            Featured Products
          </h2>

          <button className="text-lg font-medium">
            View All
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}