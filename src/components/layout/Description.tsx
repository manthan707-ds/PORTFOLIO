"use client";

import React from "react";
import TextAnimation from "../ui/text-animation";
import TextBottomReveal from "../ui/text-bottom-reveal";

export default function Description() {
  return (
    <section
      id="about"
      className="grid grid-cols-12 gap-4 lg:gap-8 pt-30 pb-28 p-4 lg:px-8 bg-[#fffff0]"
    >
      {/* ───────── Left Column ───────── */}
      <div className="flex flex-col col-span-12 lg:col-span-7">

        {/* Title */}
        <TextBottomReveal>
        <h4
          className="font-semibold uppercase mb-8"
          aria-label="Myself"
        >
          Myself
        </h4>
        </TextBottomReveal>

        {/* Mobile Video */}

        <TextAnimation blockColor="#1A5CFF">
        {/* Desktop Text */}
        <p className="hidden lg:block italic font-[family-name:var(--font-instrument-serif)] text-[clamp(20px,2.5vw,52px)] font-semibold tracking-wider leading-[1.4]">
          Pursuing Data Science, focused on turning raw data into useful
          predictions. I've built end-to-end ML projects including a live
          Streamlit app for house price prediction, and I'm comfortable
          across the full pipeline — cleaning, EDA, model training, and
          deployment — using Python, Scikit-Learn, Pandas, NumPy, and Seaborn.
        </p>
        </TextAnimation>
        
        <TextAnimation blockColor="#1A5CFF">
        <p
          className="lg:hidden italic font-[family-name:var(--font-instrument-serif)] text-[clamp(20px,2.5vw,52px)] font-semibold tracking-wider leading-[1.4]"
          aria-label="Pursuing Data Science, focused on turning raw data into useful predictions. I've built end-to-end ML projects including a live Streamlit app for house price prediction, and I'm comfortable across the full pipeline — cleaning, EDA, model training, and deployment — using Python, Scikit-Learn, Pandas, NumPy, and Seaborn."
        >
          Pursuing Data Science, focused on turning raw data into useful
          predictions. I've built end-to-end ML projects including a live
          Streamlit app for house price prediction, and I'm comfortable
          across the full pipeline — cleaning, EDA, model training, and
          deployment — using Python, Scikit-Learn, Pandas, NumPy, and Seaborn.
        </p>
        </TextAnimation>
      </div>

      
           <div className="block h-full col-span-12 lg:col-span-5 mt-6 lg:mt-0">
        <div className="sticky top-[calc(100vh-20vw-172px)] w-full aspect-video rounded-lg lg:rounded-xl overflow-hidden">
          <img
            src="/images/manthan-photo-full.jpg"
            className="pointer-events-none w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
