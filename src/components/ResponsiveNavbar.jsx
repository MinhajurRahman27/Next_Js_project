"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LoginButton from "./LoginButton";

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 backdrop-blur-md left-0 right-0 z-50 py-3 sm:py-5 px-4 sm:px-5 bg-white/10 border border-white/20 transition-all duration-300">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-1 sm:gap-2">
          <Image
            src="/logo.png"
            alt="AK47 Logo"
            width={30}
            height={30}
            className="rounded-xl sm:w-[35px] sm:h-[35px]"
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-indigo-500">AK47</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-4 text-white font-semibold">
          <Link
            href="/"
            className="px-3 xl:px-4 py-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm xl:text-base"
          >
            Home
          </Link>
          <Link
            href="/allguns"
            className="px-3 xl:px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm xl:text-base"
          >
            Parts
          </Link>
          <Link
            href="/howitworks"
            className="px-3 xl:px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm xl:text-base"
          >
            How it works
          </Link>
          <Link
            href="/dashboard"
            className="px-3 xl:px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm xl:text-base"
          >
            Dashboard
          </Link>
        </nav>

        {/* Desktop Login Button */}
        <div className="hidden sm:block">
          <LoginButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/20 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="flex flex-col p-4 space-y-3">
          <Link
            href="/"
            onClick={closeMenu}
            className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-semibold text-center"
          >
            Home
          </Link>
          <Link
            href="/allguns"
            onClick={closeMenu}
            className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-semibold text-center"
          >
            Parts
          </Link>
          <Link
            href="/howitworks"
            onClick={closeMenu}
            className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-semibold text-center"
          >
            How it works
          </Link>
          <Link
            href="/dashboard"
            onClick={closeMenu}
            className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-semibold text-center"
          >
            Dashboard
          </Link>
          <div className="pt-2 border-t border-white/20">
            <LoginButton />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default ResponsiveNavbar;