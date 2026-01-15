import Navbar from "@/components/Navbar";
import React from "react";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
       <header>
         <Navbar></Navbar>
       </header>
       <main>
         {children}
       </main>
      </body>
    </html>
  );
};

export default RootLayout;
