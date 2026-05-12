import Link from "next/link";

const categories = [
  "Electronics",
  "Fashion",
  "Gaming",
  "Accessories",
  "Shoes",
  "Mobile",
];

export default function CategoriesSection() {
  return (
    <section className="py-24 bg-white">

      <div className="container-custom">

        <div className="flex items-center justify-between mb-14">

          <h2 className="text-5xl font-bold">
            Shop by Category
          </h2>

          <Link
            href="/categories"
            className="font-semibold"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((category) => (
            <Link
              key={category}
              href={`/categories/${category.toLowerCase()}`}
              className="
                bg-gray-50 border rounded-3xl
                h-[140px]
                flex items-center justify-center
                text-lg font-semibold
                hover:bg-black hover:text-white
                transition-all duration-300
              "
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}