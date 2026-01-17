"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300 group h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
          ${product.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors min-h-[3.5rem] flex items-start">
          {product.name}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-4">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="text-2xl font-bold text-indigo-400">
            ${product.price}
          </div>
          
          <Link href={`/allguns/${product.id}`} className="bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 px-4 py-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;