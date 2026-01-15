import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import "./globals.css";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["200", "400", "500", "600"],
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body>
        <header className="p-3 border-b border-gray-400 flex items-center justify-between">
          <Link href={"/"} className="flex items-center">
            <Image
              src="/logo.png"
              alt="Picture of the author"
              width={50}
              height={50}
              className="rounded-xl"
            />
            <h1 className="text-4xl font-bold text-red-400">
              <span className="text-5xl">S</span>howGun
            </h1>
          </Link>

          <div className="space-x-4 font-bold">
            <Link href={"/"}>Home</Link>
            <Link href={"/all-guns"}>Guns</Link>
            <Link href={"/howitworks"}>How It Works</Link>
          </div>
          <div>
            <Link href={"/login"}>
              {" "}
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                Login
              </button>{" "}
            </Link>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
