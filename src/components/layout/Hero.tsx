"use client";

import React from "react";
import TextAnimation from "../ui/text-animation";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manthan-ghodkhande/",
    className: "hover:text-[#1A5CFF] transition-colors",
  },
  {
    label: "GitHub",
    href: "https://github.com/manthan707-ds",
    className: "md:pl-12 hover:text-[#1A5CFF] transition-colors",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-x-hidden bg-[#fffff0]">
      <div className="relative z-10 flex flex-col justify-between min-h-screen gap-10 px-4 pt-24 md:pt-32 lg:pt-[22vh] pb-6">

        {/* TOP ROW: socials (left) + intro block (right) */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">

          {/* Left: socials */}
          <TextAnimation>
            <div className="flex flex-col text-lg tracking-widest leading-tight text-[#0A0A0A]">
              {socials.map((s) =>
                React.createElement(
                  "a",
                  {
                    key: s.label,
                    href: s.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: s.className,
                  },
                  s.label
                )
              )}
            </div>
          </TextAnimation>

          {/* Right: blue paragraph + black box, under "Get in touch" */}
          <div className="w-full lg:max-w-[32rem] lg:ml-auto space-y-4">
            <TextAnimation>
              <p className="text-[#1A5CFF] blue-text text-sm md:text-base font-aktura">
                Data Science Student · ML + Full-Stack. Was Technical Director @ Rotaract Club.
                I turn raw data into useful predictions — from cleaning and EDA through model
                training to deployment.
              </p>
            </TextAnimation>

            <div className="bg-black text-[#fffff0] box-text flex flex-col sm:flex-row gap-4 p-4 w-full">
              <div className="flex flex-col gap-2 sm:w-2/5">
                <TextAnimation blockColor="#1A5CFF">
                  <span className="text-sm">Data in, decisions out.</span>
                </TextAnimation>
                <TextAnimation blockColor="#1A5CFF">
                  <span className="text-sm">
                    Currently sharpening Feature Engineering &amp; Model Evaluation.
                  </span>
                </TextAnimation>
              </div>
              <div className="sm:w-3/5">
                <TextAnimation blockColor="#1A5CFF">
                  <span className="text-sm">
                    Built end-to-end ML projects including a live Streamlit web app for house
                    price prediction. Comfortable across the full pipeline: cleaning → EDA →
                    model training → deployment. Programming in Python with Scikit-Learn,
                    Pandas, NumPy, and Seaborn. Goal: land a Data Science internship and
                    contribute to real-world ML problems.
                  </span>
                </TextAnimation>
              </div>
            </div>

            <p className="text-right text-sm text-[#0A0A0A]/70">
              Built by <span className="italic text-[#0A0A0A]">Manthan</span> · © 2026
            </p>
          </div>
        </div>

        {/* BOTTOM: name */}
        <div className="pb-16">
          <TextAnimation blockColor="#1A5CFF">
            <h1 className="text-[clamp(48px,12vw,200px)] font-mathos font-bold tracking-[0.08em] leading-[0.8] uppercase text-[#0A0A0A] mix-blend-difference select-none">
              Manthan <br /> Ghodkhande
            </h1>
          </TextAnimation>
        </div>
      </div>
    </section>
  );
}
