import Title from '@/components/Title';
import Link from 'next/link';
import React from 'react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-black py-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Title />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">How It Works</h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto px-4">
            Understanding the legendary AK-47 mechanism and how to navigate our comprehensive firearms database
          </p>
        </div>

        {/* AK-47 Operating System */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-400 mb-8 sm:mb-12 text-center">AK-47 Operating System</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Gas-Operated System</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  The AK-47 utilizes a long-stroke gas-operated system with a rotating bolt. When fired, 
                  propellant gases are tapped from the barrel through a gas port located above the barrel.
                </p>
                <p>
                  These gases travel through the gas tube and strike the gas piston, which is connected 
                  to the bolt carrier. The force drives the bolt carrier rearward, extracting and ejecting 
                  the spent cartridge case.
                </p>
                <p>
                  The return spring then pushes the bolt carrier forward, stripping a new cartridge from 
                  the magazine and chambering it, ready for the next shot.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Key Components</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-300">Gas Block & Piston Assembly</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-300">Bolt Carrier & Rotating Bolt</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-300">Recoil Spring & Guide Rod</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-300">Trigger Group Assembly</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-300">Magazine & Feed System</span>
                </div>
              </div>
            </div>
          </div>

          {/* Firing Cycle Steps */}
          <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-6 sm:p-8 mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Complete Firing Cycle</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-indigo-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-400">1</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Firing</h4>
                <p className="text-gray-400 text-sm">
                  Trigger releases hammer, striking firing pin and igniting cartridge
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-indigo-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-400">2</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Extraction</h4>
                <p className="text-gray-400 text-sm">
                  Gas pressure drives bolt carrier back, extracting spent case
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-indigo-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-400">3</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Ejection</h4>
                <p className="text-gray-400 text-sm">
                  Ejector kicks spent case out through ejection port
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-indigo-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-400">4</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Feeding</h4>
                <p className="text-gray-400 text-sm">
                  Spring pushes bolt forward, chambering new cartridge
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Website Navigation Guide */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-400 mb-8 sm:mb-12 text-center">Navigate Our Platform</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-white mb-3">Home Page</h3>
              <p className="text-gray-400 mb-4">
                Explore AK-47 history, specifications, variants, and design philosophy. 
                Learn about the rifle's global impact and mechanical details.
              </p>
              <Link href="/" className="text-indigo-400 hover:text-indigo-300 font-semibold">
                Visit Home →
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl mb-4">🔫</div>
              <h3 className="text-xl font-bold text-white mb-3">All Guns</h3>
              <p className="text-gray-400 mb-4">
                Browse our complete catalog of AK-47 rifles, parts, and accessories. 
                View detailed specifications and pricing for each item.
              </p>
              <Link href="/allguns" className="text-indigo-400 hover:text-indigo-300 font-semibold">
                Browse Catalog →
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Dashboard</h3>
              <p className="text-gray-400 mb-4">
                Access your personal dashboard to track favorites, view purchase history, 
                and manage your account settings. Login required.
              </p>
              <Link href="/dashboard" className="text-indigo-400 hover:text-indigo-300 font-semibold">
                Go to Dashboard →
              </Link>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-400 mb-8 sm:mb-12 text-center">Product Categories</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Complete Rifles</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-300">Factory-built AKM-47 rifles</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-300">Modern AK-74 style rifles</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-300">Premium tactical variants</span>
                </div>
              </div>
              <p className="text-gray-400">
                Ready-to-use rifles with all components included, magazines, and documentation.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Parts & Accessories</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-300">Internal components & mechanisms</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-300">Furniture & ergonomic upgrades</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-300">Magazines & feeding systems</span>
                </div>
              </div>
              <p className="text-gray-400">
                Individual components for maintenance, repair, and customization projects.
              </p>
            </div>
          </div>
        </div>

        {/* Safety & Legal Information */}
        <div className="bg-red-900/20 backdrop-blur-2xl rounded-2xl border border-red-500/30 p-6 sm:p-8 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-400 mb-4 sm:mb-6 text-center">Safety & Legal Notice</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Safety First</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Always treat firearms as if they are loaded</li>
                <li>• Never point a firearm at anything you don't intend to destroy</li>
                <li>• Keep your finger off the trigger until ready to shoot</li>
                <li>• Be sure of your target and what's beyond it</li>
                <li>• Proper training and certification required</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Legal Compliance</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• All sales subject to federal and state laws</li>
                <li>• Background checks required where applicable</li>
                <li>• Age restrictions apply</li>
                <li>• Some items may be restricted in certain states</li>
                <li>• Consult local laws before purchasing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-6 sm:p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Explore?</h2>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Start browsing our comprehensive collection of AK-47 rifles, parts, and accessories. 
              Each product includes detailed specifications and technical information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/allguns"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Browse All Products
              </Link>
              <Link 
                href="/dashboard"
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 border border-white/20 text-sm sm:text-base"
              >
                Access Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;