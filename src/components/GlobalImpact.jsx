import React from 'react';
import Title from './Title';

const GlobalImpact = () => {
  const stats = [
    { number: '100M+', label: 'Units Produced', description: 'Most produced firearm in history' },
    { number: '50+', label: 'Countries', description: 'Manufacturing the AK platform' },
    { number: '100+', label: 'Nations', description: 'Currently using AK variants' },
    { number: '75+', label: 'Years', description: 'In continuous service worldwide' }
  ];

  return (
    <div className="py-20 px-10 bg-gradient-to-b from-indigo-950/20 to-black">
      <Title>Global Impact</Title>
      <p className="text-center text-gray-400 mt-4 max-w-3xl mx-auto">
        The AK-47 has become a symbol of revolutionary movements and military forces worldwide, 
        appearing on national flags and emblems of several countries.
      </p>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="text-center group"
          >
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border-2 border-indigo-500/40 rounded-2xl p-8 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300">
              <p className="text-5xl font-bold text-indigo-300 mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </p>
              <p className="text-xl font-semibold text-white mb-2">{stat.label}</p>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-4xl mx-auto bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-8">
        <h3 className="text-2xl font-semibold text-indigo-200 mb-4">Cultural Significance</h3>
        <p className="text-gray-300 leading-relaxed">
          The AK-47 has transcended its role as a military weapon to become a cultural icon. 
          It appears on the flag of Mozambique, symbolizing defense and vigilance. The rifle's 
          reliability and simplicity have made it the weapon of choice for military forces, 
          revolutionary groups, and freedom fighters across multiple continents for over seven decades.
        </p>
      </div>
    </div>
  );
};

export default GlobalImpact;
