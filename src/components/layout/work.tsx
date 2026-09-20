// components/WorkHeading.tsx
import React from "react";
import Link from "next/link";
import WorkCard from "../ui/work-card";
import { ArrowRight } from "lucide-react";
import TextBot from "../ui/text-bottom-reveal";

const WorkHeading: React.FC = () => {
  return (
    <section className="bg-[#fffff0] px-4 md:px-6 lg:px-8 pb-24">      
       <TextBot delay={0} animateonScroll={true}>
        <div className="bg-[#fffff0]"> {/* Extra wrapper */}
            <h2 className="flex flex-row items-end justify-between w-full mb-6 lg:mb-8 gap-2 md:gap-4">
            <span className="text-[clamp(48px,12vw,200px)] font-bold tracking-tight leading-[0.8] uppercase">
                <div className="line-mask line1-mask block overflow-hidden text-start relative">
                <div className="line line1 block relative text-start">
                    Work
                </div>
                </div>
            </span>
            <span className="text-[clamp(48px,12vw,200px)] font-bold tracking-tight leading-[0.8] uppercase">
                <div className="line-mask line1-mask block overflow-hidden text-start relative">
                <div className="line line1 block relative text-start">
                    {"'S"}
                </div>
                </div>
            </span>
            </h2>
        </div>
        </TextBot>
        <ul className="flex flex-col lg:flex-row gap-3 lg:gap-4 w-full mb-8 lg:mb-16">

            <WorkCard
                title="House Price Prediction"
                category="ML Web App"
                year="2025"
                href="https://github.com/manthan707-ds/house-price-prediction-app"
                cover="/images/work/house-price/cover.png"
                icon="/images/work/house-price/icon.png"
                video=""
                tags={[
                    "Python",
                    "Scikit-Learn",
                    "Streamlit",
                    "Regression",
                    "Data Analysis",
                    "Deployment"
                ]}
            />

            <WorkCard
                title="Titanic Survival Prediction"
                category="Data Analysis"
                year="2025"
                href="https://github.com/manthan707-ds/titanic-survival-prediction"
                cover="/images/work/titanic/cover.png"
                icon="/images/work/titanic/icon.png"
                video=""
                tags={[
                    "Python",
                    "Pandas",
                    "EDA",
                    "Classification",
                    "Scikit-Learn",
                    "Data Analysis"
                ]}
            />


            </ul>
            <Link
            href="/work"
            className="flex items-center justify-center gap-1 group"
            >
            <span className="text-black font-medium">
                See all
            </span>
            <ArrowRight
                className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
            />
            </Link>
    </section>
  );
};

export default WorkHeading;
