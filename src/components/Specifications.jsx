import React from 'react';
import Title from './Title';

const Specifications = () => {
  const specs = [
    { label: 'Caliber', value: '7.62×39mm' },
    { label: 'Action', value: 'Gas-operated, rotating bolt' },
    { label: 'Rate of Fire', value: '600 rounds/min' },
    { label: 'Effective Range', value: '350 meters' },
    { label: 'Magazine Capacity', value: '30 rounds' },
    { label: 'Weight', value: '3.47 kg (7.7 lb)' },
    { label: 'Length', value: '880 mm (34.6 in)' },
    { label: 'Barrel Length', value: '415 mm (16.3 in)' }
  ];

  return (
    <div className="py-20 px-10">
      <Title>Technical Specifications</Title>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {specs.map((spec, index) => (
          <div 
            key={index}
            className="bg-white/10 border border-indigo-500 rounded-lg p-6 transition-all duration-300 text-center"
          >
            <p className="text-red-200 text-sm font-bold mb-2">{spec.label}</p>
            <p className="text-white text-xl font-semibold">{spec.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specifications;
