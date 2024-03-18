import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="flex flex-col lg:flex-row md:justify-between max-w-screen-xl mx-auto pt-5 px-4 md:px-10 xl:px-0 gap-y-12  ">
      <FeatureCard />

      <FeatureCard />

      <FeatureCard />
    </section>
  );
};

export default Features;
