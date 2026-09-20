"use client";

import { useState, useEffect } from "react";
import WorkCard from "../../components/ui/work-card";
import Footer from "../../components/layout/Footer";
import TopStatusBar from "../../components/layout/TopStatusBar";
import { ReactLenis } from "lenis/react";
import LoadingPage from "../../components/ui/LoadingPage";
import TextAnimation from "../../components/ui/text-animation";
import TextBottomReveal from "../../components/ui/text-bottom-reveal";

export default function WorkPage() {
  const [loaded, setLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).isInternalNav) {
      setLoaded(true)
      return
    }
    setShowLoading(true)
  }, [])

  const works = [
    {
      title: "Judicial Backlog Triage",
      category: "AI / ML System",
      year: "2026",
      href: "https://github.com/manthan707-ds/judicial-triage-system",
      cover: "/images/work/judicial-triage/cover.png",
      icon: "/images/work/judicial-triage/icon.png",
      video: "",
      tags: [
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
        "Pandas",
        "Scikit-Learn",
        "LightGBM",
        "Flask API",
        "Case Triage",
        "SIH 2026",
      ],
    },
    {
      title: "House Price Prediction",
      category: "ML Web App",
      year: "2025",
      href: "https://github.com/manthan707-ds/house-price-prediction-app",
      cover: "/images/work/house-price/cover.png",
      icon: "/images/work/house-price/icon.png",
      video: "",
      tags: [
        "Python",
        "Scikit-Learn",
        "Streamlit",
        "Regression",
        "Feature Engineering",
        "Data Cleaning",
        "EDA",
        "Model Deployment",
      ],
    },
    {
      title: "Titanic Survival Prediction",
      category: "Data Analysis",
      year: "2025",
      href: "https://github.com/manthan707-ds/titanic-survival-prediction",
      cover: "/images/work/titanic/cover.png",
      icon: "/images/work/titanic/icon.png",
      video: "",
      tags: [
        "Python",
        "Pandas",
        "NumPy",
        "Seaborn",
        "EDA",
        "Classification",
        "Scikit-Learn",
      ],
    },
    {
      title: "RAG Teaching Assistant",
      category: "AI / NLP",
      year: "2025",
      href: "#",
      cover: "/images/work/rag-teaching-assistant/cover.png",
      icon: "/images/work/rag-teaching-assistant/icon.png",
      video: "",
      tags: [
        "RAG",
        "LLM",
        "Python",
        "NLP",
        "Vector Search",
        "AI Assistant",
      ],
    },
  ];

  return (
    <>
      {showLoading && !loaded && (
        <LoadingPage
          duration={2200}
          onComplete={() => setLoaded(true)}
        />
      )}

      {loaded && (
        <>
          <ReactLenis root />
          <TopStatusBar />
          <main className="bg-[#fffff0]">
            <div className="px-4 lg:px-8 pt-[200px] md:pt-[clamp(128px,12vw,500px)]">
              <div className="overflow-hidden mb-3 lg:mb-5">
                <TextAnimation delay={0.3}>
                  <p className="text-[clamp(14px,1.2vw,24px)] font-medium text-neutral-700">
                    [2025-2026]
                  </p>
                </TextAnimation>
              </div>
              <div className="overflow-hidden">
                <TextBottomReveal delay={0.3} animateonScroll={true}>
                  <h1 className="text-[clamp(48px,7.5vw,200px)] font-bold uppercase leading-[0.8] tracking-tight text-black">
                    Selected Work
                  </h1>
                </TextBottomReveal>
              </div>
            </div>

            <div className="px-2 lg:px-4 py-4 lg:py-6">
              <div className="work-grid-container w-full bg-neutral-200 rounded-2xl lg:rounded-[20px] p-3 lg:p-4">
                <ul className="work-grid grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 list-none">
                  {works.map((work, index) => (
                    <WorkCard key={index} {...work} />
                  ))}
                </ul>
              </div>
            </div>

            <Footer />
          </main>
        </>
      )}
    </>
  );
}
