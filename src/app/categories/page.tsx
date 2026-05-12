import Navbar from "@/components/layout/navbar";

const categories = [
  "Electronics",
  "Fashion",
  "Gaming",
  "Accessories",
  "Shoes",
  "Mobile",
];

export default function CategoriesPage() {
  return (
    <>
      <Navbar />

      <main className="py-20">

        <div className="container-custom">

          <h1 className="text-6xl font-bold mb-16">
            Categories
          </h1>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

            {categories.map((category) => (
              <div
                key={category}
                className="
                  bg-white rounded-3xl border
                  h-[220px]
                  flex items-center justify-center
                  text-2xl font-bold
                  hover:shadow-xl transition-all duration-300
                "
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}