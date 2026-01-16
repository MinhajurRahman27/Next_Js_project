import React from 'react';
import Title from './Title';

const History = () => {
  const timeline = [
    { year: '1947', event: 'Initial design by Mikhail Kalashnikov' },
    { year: '1949', event: 'Officially adopted by Soviet Armed Forces' },
    { year: '1956', event: 'Mass production begins across Eastern Bloc' },
    { year: '1970s', event: 'Becomes most widely used assault rifle globally' },
    { year: 'Present', event: 'Over 100 million units produced worldwide' }
  ];

  return (
    <div className="py-20 px-10 bg-gradient-to-b from-black to-indigo-950/20">
      <Title>Historical Timeline</Title>
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
          
          {timeline.map((item, index) => (
            <div 
              key={index}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="bg-indigo-900/40 border border-indigo-500/40 rounded-lg p-6 hover:bg-indigo-900/60 transition-all duration-300">
                  <p className="text-indigo-300 text-2xl font-bold mb-2">{item.year}</p>
                  <p className="text-gray-300">{item.event}</p>
                </div>
              </div>
              <div className="w-2/12 flex justify-center">
                <div className="w-4 h-4 bg-indigo-500 rounded-full border-4 border-black shadow-lg shadow-indigo-500/50"></div>
              </div>
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
