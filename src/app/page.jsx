
import Hero from "@/components/Hero";
import Variants from "@/components/Variants";
import Specifications from "@/components/Specifications";
import DesignPhilosophy from "@/components/DesignPhilosophy";
import GlobalImpact from "@/components/GlobalImpact";
import History from "@/components/History";
import Mechanics from "@/components/Mechanics";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Hero />
      <div id="specifications">
        <Specifications />
      </div>
      <div id="mechanics">
        <Mechanics />
      </div>
      <div id="variants">
        <Variants />
      </div>
      <DesignPhilosophy />
      <div id="history">
        <History />
      </div>
      <GlobalImpact />
    </div>
  );
};

export default Home;
