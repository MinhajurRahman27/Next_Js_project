
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async()=>{
  const res = await fetch("http://localhost:5000/data")
  const data = await res.json()
  return data
}

const CardDetails = async({params}) => {
  const {id} = await params
  
  const data = await getData()
  const singleData = data.find(item=> item.id == id)
  
  if (!singleData) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
          <Link href="/allguns" className="text-indigo-400 hover:text-indigo-300">
            ← Back to All Guns
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black py-30">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            href="/allguns" 
            className="text-white font-bold hover:text-indigo-300 transition-colors"
          >
            ← Back to All Guns
          </Link>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 overflow-hidden">
              <div className="relative h-96 lg:h-[500px]">
                <Image
                  src={singleData.image}
                  alt={singleData.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {singleData.name}
              </h1>
              <div className="text-3xl font-bold text-indigo-400 mb-6">
                ${singleData.price}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {singleData.description}
              </p>
            </div>

            {/* Action Buttons */}
           
          </div>
        </div>

        {/* Product Specifications */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Product Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-gray-400 text-sm mb-1">Product ID</div>
              <div className="text-white font-semibold">#{singleData.id.toString().padStart(4, '0')}</div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-gray-400 text-sm mb-1">Category</div>
              <div className="text-white font-semibold">
                {singleData.name.includes('Rifle') ? 'Complete Rifles' : 'Parts & Accessories'}
              </div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-gray-400 text-sm mb-1">Availability</div>
              <div className="text-green-400 font-semibold">In Stock</div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-gray-400 text-sm mb-1">Compatibility</div>
              <div className="text-white font-semibold">AK-47/AKM Series</div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-gray-400 text-sm mb-1">Material</div>
              <div className="text-white font-semibold">
                {singleData.name.includes('Steel') ? 'Steel' : 
                 singleData.name.includes('Polymer') ? 'Polymer' :
                 singleData.name.includes('Wood') ? 'Wood' : 'Military Grade'}
              </div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-gray-400 text-sm mb-1">Warranty</div>
              <div className="text-white font-semibold">1 Year Limited</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              <span className="text-gray-300">Military specification quality</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              <span className="text-gray-300">Precision manufactured</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              <span className="text-gray-300">Durable construction</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              <span className="text-gray-300">Easy installation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              <span className="text-gray-300">Tested for reliability</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              <span className="text-gray-300">Authentic design</span>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {/* <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.filter(item => item.id !== singleData.id).slice(0, 3).map(relatedItem => (
              <Link 
                key={relatedItem.id} 
                href={`/allguns/${relatedItem.id}`}
                className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="relative h-32 mb-3 rounded-lg overflow-hidden">
                  <Image
                    src={relatedItem.image}
                    alt={relatedItem.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-indigo-300 transition-colors">
                  {relatedItem.name}
                </h3>
                <div className="text-indigo-400 font-bold">
                  ${relatedItem.price}
                </div>
              </Link>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CardDetails;
