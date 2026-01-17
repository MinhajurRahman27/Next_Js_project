import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-indigo-500/30 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <Image
                src="/logo.png"
                alt="AK47 Logo"
                width={40}
                height={40}
                className="rounded-xl group-hover:scale-110 transition-transform duration-300"
              />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                AK47
              </h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Exploring the history, mechanics, and global impact of one of the world's most iconic firearms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-indigo-300 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-indigo-300 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/allguns" className="text-gray-400 hover:text-indigo-300 transition-colors duration-300">
                  All Guns
                </Link>
              </li>
              <li>
                <Link href="/howitworks" className="text-gray-400 hover:text-indigo-300 transition-colors duration-300">
                  How It Works
                </Link>
              </li>
              <li>
                 <Link
                            href="/dashboard"
                            className='text-gray-400 hover:text-indigo-300 transition-colors duration-300'
                          >
                            Dashboard
                          </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-indigo-300 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#specifications" className="text-gray-400 hover:text-indigo-300 transition-colors duration-300">
                  Specifications
                </Link>
              </li>
              <li>
                <Link href="/#variants" className="text-gray-400 hover:text-indigo-300 transition-colors duration-300">
                  Variants
                </Link>
              </li>
              <li>
                <Link href="/#history" className="text-gray-400 hover:text-indigo-300 transition-colors duration-300">
                  History
                </Link>
              </li>
              <li>
                <Link href="/#mechanics" className="text-gray-400 hover:text-indigo-300 transition-colors duration-300">
                  Mechanics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-indigo-300 font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@ak47.com" className="text-gray-400 hover:text-indigo-300 transition-colors duration-300">
                 minhajurrahman2716@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-indigo-300 transition-colors duration-300">
                  +880 1847901009
                </a>
              </li>
            </ul>
            {/* <div className="flex gap-4 mt-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center hover:bg-indigo-800/40 hover:border-indigo-400/60 transition-all duration-300"
              >
                <span className="text-indigo-300">𝕏</span>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center hover:bg-indigo-800/40 hover:border-indigo-400/60 transition-all duration-300"
              >
                <span className="text-indigo-300">f</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-indigo-900/30 border border-indigo-500/30 flex items-center justify-center hover:bg-indigo-800/40 hover:border-indigo-400/60 transition-all duration-300"
              >
                <span className="text-indigo-300">📷</span>
              </a>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-indigo-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AK47 Info. All rights reserved.
          </p>
          {/* <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-indigo-300 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-indigo-300 transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-indigo-300 transition-colors duration-300">
              Contact
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
