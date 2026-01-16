import React from 'react';
import Title from './Title';

const DesignPhilosophy = () => {
  const principles = [
    {
      icon: '🔧',
      title: 'Simplicity',
      description: 'Minimal moving parts with straightforward operation. Can be field-stripped without tools in under 30 seconds.'
    },
    {
      icon: '💪',
      title: 'Reliability',
      description: 'Functions in extreme conditions from -40°C to +50°C. Operates in mud, sand, water, and with minimal maintenance.'
    },
    {
      icon: '⚙️',
      title: 'Durability',
      description: 'Robust construction with loose tolerances. Can withstand harsh treatment and continue functioning for decades.'
    },
    {
      icon: '🎯',
      title: 'Effectiveness',
      description: 'Balanced design prioritizing reliability over precision. Effective range of 350m with manageable recoil.'
    },
    {
      icon: '🏭',
      title: 'Manufacturability',
      description: 'Designed for mass production with stamped metal parts. Can be manufactured with basic industrial equipment.'
    },
    {
      icon: '📚',
      title: 'Ease of Training',
      description: 'Intuitive controls and operation. Soldiers can be trained to proficiency in minimal time with basic instruction.'
    }
  ];

  return (
    <div className="py-20 px-10">
      <Title>Design Philosophy</Title>
      <p className="text-center text-gray-400 mt-4 max-w-3xl mx-auto">
        Mikhail Kalashnikov's design principles emphasized practicality and reliability over complexity, 
        creating a weapon that could be used effectively by soldiers with minimal training.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {principles.map((principle, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 border border-indigo-500/30 rounded-xl p-8 hover:border-indigo-400/60 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 group"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {principle.icon}
            </div>
            <h3 className="text-xl font-bold text-indigo-200 mb-3">{principle.title}</h3>
            <p className="text-gray-300 leading-relaxed">{principle.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <blockquote className="bg-indigo-900/20 border-l-4 border-indigo-500 rounded-r-xl p-8">
          <p className="text-gray-300 text-lg italic mb-4">
            "I was in the hospital, and a soldier in the bed beside me asked: 'Why do our soldiers have only one rifle for two or three of our men when the Germans have automatics?' So I designed one. I was a soldier, and I created a machine gun for a soldier."
          </p>
          <p className="text-indigo-300 font-semibold">— Mikhail Kalashnikov</p>
        </blockquote>
      </div>
    </div>
  );
};

export default DesignPhilosophy;
