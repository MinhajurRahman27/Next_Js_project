export const dynamic = "force-dynamic";
import Title from '@/components/Title';
import ProductCard from '@/components/ProductCard';
import React from 'react';

const getData = async()=>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/data`)
  const data = await res.json()
  return data
}

const AllGun = async() => {
  const data = await getData()
  
  return (
    <div className="min-h-screen bg-black py-35">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Title />
          <h1 className="text-5xl font-bold text-white mb-4">All Guns & Parts</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our complete collection of AK-47 rifles, parts, and accessories. 
            From complete rifles to individual components for customization and maintenance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-8 max-w-md mx-auto">
            <div className="text-3xl font-bold text-indigo-400 mb-2">{data.length}</div>
            <div className="text-gray-400">Total Products Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllGun;