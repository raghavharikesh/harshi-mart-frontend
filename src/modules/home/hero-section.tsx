"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import Button from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="py-24">

      <div className="container-custom grid lg:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <p className="text-lg font-medium text-gray-500">
            Best Online Shopping Experience
          </p>

          <h1 className="text-6xl leading-tight font-bold mt-6">
            Discover Modern
            Fashion & Lifestyle
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Explore premium products,
            electronics, fashion, and
            accessories with fast delivery
            and secure checkout.
          </p>

          <div className="mt-10 flex gap-5">

            <Button>
              Shop Now
            </Button>

            <Button variant="outline">
              Explore More
            </Button>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-[550px]"
        >

          <Image
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Hero"
            fill
            className="object-cover rounded-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
}