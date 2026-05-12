import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import ProductListing from "@/modules/products/product-listing";

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main>
        <ProductListing />
      </main>

      <Footer />
    </>
  );
}