import React from 'react';
import Title from './Title';

const Mechanics = () => {
  const mechanicsSteps = [
    {
      step: '1',
      title: 'Gas Operation',
      description: 'When fired, propellant gases are diverted through a gas port in the barrel, pushing a piston rearward.',
      detail: 'The long-stroke gas piston system provides reliable cycling even in adverse conditions.'
    },
    {
      step: '2',
      title: 'Bolt Rotation',
      description: 'The piston drives the bolt carrier backward, causing the bolt to rotate and unlock from the barrel.',
      detail: 'Two locking lugs engage with recesses in the receiver for secure lockup.'
    },
    {
      step: '3',
      title: 'Extraction & Ejection',
      description: 'As the bolt moves rearward, the extractor pulls the spent cartridge from the chamber and ejects it.',
      detail: 'The ejector forcefully expels the case through the ejection port on the right side.'
    },
    {
      step: '4',
      title: 'Reloading',
      description: 'The recoil spring compresses and then drives the bolt carrier forward, stripping a new round from the magazine.',
      detail: 'The bolt pushes the cartridge into the chamber and rotates to lock, ready for the next shot.'
    }
  ];

  const features = [
    {
      title: 'Loose Tolerances',
      description: 'Generous clearances between parts allow operation even when dirty or fouled',
      icon: '🔓'
    },
    {
      title: 'Chrome-Lined Barrel',
      description: 'Increases barrel life and corrosion resistance in harsh environments',
      icon: '✨'
    },
    {
      title: 'Rotating Bolt',
      description: 'Two-lug rotating bolt provides secure lockup and reliable extraction',
      icon: '🔄'
    },
    {
      title: 'Long-Stroke Piston',
      description: 'Robust gas system that functions reliably with minimal maintenance',
      icon: '⚡'
    }
  ];

  return (
    <div className="py-20 px-10 bg-gradient-to-b from-indigo-950/20 to-black">
      <Title>How It Works</Title>
      <p className="text-center text-gray-400 mt-4 max-w-3xl mx-auto">
        The AK-47 uses a gas-operated, rotating bolt mechanism that prioritizes reliability through simplicity and robust engineering.
      </p>

      {/* Operating Cycle */}
      <div className="mt-16 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold text-indigo-200 mb-8 text-center">Operating Cycle</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mechanicsSteps.map((item, index) => (
            <div 
              key={index}
              className="relative bg-gradient-to-b from-indigo-900/30 to-purple-900/20 border border-indigo-500/30 rounded-xl p-6 hover:border-indigo-400/60 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center border-4 border-black shadow-lg shadow-indigo-500/50">
                <span className="text-white font-bold text-xl">{item.step}</span>
              </div>
              <h4 className="text-xl font-bold text-indigo-200 mb-3 mt-4">{item.title}</h4>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{item.description}</p>
              <p className="text-gray-500 text-xs italic">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="mt-20 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold text-indigo-200 mb-8 text-center">Key Mechanical Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex gap-4 bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-6 hover:bg-indigo-900/30 transition-all duration-300"
            >
              <div className="text-4xl">{feature.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-indigo-200 mb-2">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Insight */}
      <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/40 rounded-xl p-8">
        <h3 className="text-xl font-semibold text-indigo-200 mb-4">Engineering Excellence</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          The genius of the AK-47's design lies in its simplicity. Unlike more complex firearms that require tight tolerances 
          and frequent maintenance, the AK-47's loose tolerances and robust construction allow it to function reliably even 
          when exposed to dirt, mud, sand, and extreme temperatures.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The long-stroke gas piston system, while adding weight, provides exceptional reliability by keeping fouling away 
          from the bolt and chamber. This design choice exemplifies Kalashnikov's philosophy: sacrifice some accuracy and 
          weight for unmatched reliability in combat conditions.
        </p>
      </div>
    </div>
  );
};

export default Mechanics;
