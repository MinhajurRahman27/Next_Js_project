import React from 'react';
import Title from './Title';

const Variants = () => {
  const variants = [
    {
      name: 'AKM',
      year: '1959',
      description: 'Modernized version with stamped receiver, lighter weight and improved accuracy',
      features: ['Stamped steel receiver', 'Slant compensator', 'Reduced weight']
    },
    {
      name: 'AK-74',
      year: '1974',
      description: 'Chambered in 5.45×39mm with improved accuracy and reduced recoil',
      features: ['5.45×39mm caliber', 'Muzzle brake', 'Polymer furniture']
    },
    {
      name: 'AKS-74U',
      year: '1979',
      description: 'Compact carbine variant designed for vehicle crews and special forces',
      features: ['Shortened barrel', 'Folding stock', 'Compact design']
    }
  ];

  return (
    <div className="py-20 px-10">
      <Title>Popular Variants</Title>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {variants.map((variant, index) => (
          <div 
            key={index}
            className="bg-gradient-to-b from-indigo-900/20 to-black border border-indigo-500/30 rounded-xl p-8 hover:border-indigo-400/60 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
          >
            <div className="flex items-baseline gap-3 mb-4">
              <h3 className="text-2xl font-bold text-indigo-200">{variant.name}</h3>
              <span className="text-indigo-400 text-sm">({variant.year})</span>
            </div>
            <p className="text-gray-400 mb-6">{variant.description}</p>
            <ul className="space-y-2">
              {variant.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">▸</span>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Variants;
