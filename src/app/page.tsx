import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import HeroSection from "@/modules/home/hero-section";
import ProductGrid from "@/modules/home/product-grid";
import CategoriesSection from "@/modules/home/categories-section";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-50">

        <div className="pb-24">

          <HeroSection />

          <div className="mt-24">
            <CategoriesSection />
          </div>

          <div className="mt-24">
            <ProductGrid />
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}