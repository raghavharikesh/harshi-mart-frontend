import Link from "next/link";

import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#0c1117] text-white">
      <div className="container-custom py-16">

        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-slate-800">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold">
                H
              </div>

              <h2 className="text-2xl font-black tracking-tight">
                Harshi
                <span className="text-emerald-500">
                  Mart
                </span>
              </h2>
            </div>

            <p className="text-sm text-slate-400 leading-7 max-w-sm">
              Your premium destination for electronics,
              fashion, and lifestyle products across India.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Shop
            </h3>

            <div className="space-y-4 text-sm text-slate-400">

              <Link href="/products" className="block hover:text-white transition">
                All Products
              </Link>

              <Link href="/categories/electronics" className="block hover:text-white transition">
                Electronics
              </Link>

              <Link href="/categories/fashion" className="block hover:text-white transition">
                Fashion
              </Link>

              <Link href="/categories/gaming" className="block hover:text-white transition">
                Gaming
              </Link>
            </div>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Account
            </h3>

            <div className="space-y-4 text-sm text-slate-400">

              <Link href="/profile" className="block hover:text-white transition">
                My Profile
              </Link>

              <Link href="/orders" className="block hover:text-white transition">
                Orders
              </Link>

              <Link href="/wishlist" className="block hover:text-white transition">
                Wishlist
              </Link>

              <Link href="/cart" className="block hover:text-white transition">
                Cart
              </Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Help
            </h3>

            <div className="space-y-4 text-sm text-slate-400">

              <Link href="#" className="block hover:text-white transition">
                FAQs
              </Link>

              <Link href="#" className="block hover:text-white transition">
                Shipping
              </Link>

              <Link href="#" className="block hover:text-white transition">
                Returns
              </Link>

              <Link href="#" className="block hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-sm text-slate-500">
            © 2025 HarshiMart. All rights reserved.
          </p>

          {/* Social */}
          <div className="flex items-center gap-4">

            <a
              href="#"
              className="w-10 h-10 rounded-xl border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all"
            >
              <FaInstagram className="w-4 h-4" />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-xl border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all"
            >
              <FaTwitter className="w-4 h-4" />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-xl border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all"
            >
              <FaFacebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}