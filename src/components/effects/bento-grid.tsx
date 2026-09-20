import React, { useState } from 'react';
import TextBottomReveal from '../ui/text-bottom-reveal';

interface GridItem {
  label: string;
  gridClass: string;
  mobileClass: string;
  icon: string; // empty string = no logo available, render text label instead
}

const TechGrid: React.FC = () => {
  const [highlightStyle, setHighlightStyle] = useState({
    transform: 'translate(0px, 0px)',
    width: '0px',
    height: '0px',
    opacity: 0,
  });

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const parent = e.currentTarget.parentElement?.getBoundingClientRect();

    if (parent) {
      setHighlightStyle({
        transform: `translate(${rect.left - parent.left}px, ${rect.top - parent.top}px)`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = () => {
    setHighlightStyle(prev => ({ ...prev, opacity: 0 }));
  };

  const items: GridItem[] = [
    // Row 1 — Programming & Web Development
    { label: 'Python', gridClass: 'row-span-2 col-start-1 row-start-1', mobileClass: '', icon: 'icons/python.svg' },
    { label: 'HTML5', gridClass: 'row-span-2 col-start-2 row-start-1', mobileClass: '', icon: 'icons/html5.svg' },
    { label: 'CSS3', gridClass: 'row-span-2 col-start-3 row-start-1', mobileClass: '', icon: 'icons/css3.svg' },
    { label: 'JavaScript', gridClass: 'row-span-2 col-start-4 row-start-1', mobileClass: '', icon: 'icons/javascript.svg' },
    { label: 'React', gridClass: 'row-span-2 col-start-5 row-start-1', mobileClass: '', icon: 'icons/react.svg' },
    { label: 'Tailwind CSS', gridClass: 'row-span-2 col-start-6 row-start-1', mobileClass: '', icon: 'icons/tailwindcss.svg' },

    // Row 3 — Web Dev cont. + Data Science
    { label: 'Next.js', gridClass: 'row-span-2 col-start-1 row-start-3', mobileClass: '', icon: 'icons/next.svg' },
    { label: 'FastAPI', gridClass: 'row-span-2 col-start-2 row-start-3', mobileClass: '', icon: 'icons/fastapi.svg' },
    { label: 'NumPy', gridClass: 'row-span-2 col-start-3 row-start-3', mobileClass: '', icon: 'icons/numpy.svg' },
    { label: 'Pandas', gridClass: 'row-span-2 col-start-4 row-start-3', mobileClass: '', icon: 'icons/pandas.svg' },
    { label: 'Scikit-Learn', gridClass: 'row-span-2 col-start-5 row-start-3', mobileClass: '', icon: 'icons/scikitlearn.svg' },
    { label: 'Matplotlib', gridClass: 'row-span-2 col-start-6 row-start-3', mobileClass: '', icon: '' },

    // Row 5 — Data Science cont. + Deep Learning
    { label: 'Seaborn', gridClass: 'row-span-2 col-start-1 row-start-5', mobileClass: '', icon: '' },
    { label: 'Power BI', gridClass: 'row-span-2 col-start-2 row-start-5', mobileClass: '', icon: '' },
    { label: 'MySQL', gridClass: 'row-span-2 col-start-3 row-start-5', mobileClass: '', icon: 'icons/mysql.svg' },
    { label: 'TensorFlow', gridClass: 'row-span-2 col-start-4 row-start-5', mobileClass: '', icon: 'icons/tensorflow.svg' },
    { label: 'Keras', gridClass: 'row-span-2 col-start-5 row-start-5', mobileClass: '', icon: 'icons/keras.svg' },
    { label: 'RAG', gridClass: 'row-span-2 col-start-6 row-start-5', mobileClass: '', icon: '' },

    // Row 7 — AI tools + Version Control
    { label: 'ChatGPT', gridClass: 'row-span-2 col-start-1 row-start-7', mobileClass: '', icon: '' },
    { label: 'Claude', gridClass: 'row-span-2 col-start-2 row-start-7', mobileClass: '', icon: 'icons/claude.svg' },
    { label: 'Cursor', gridClass: 'row-span-2 col-start-3 row-start-7', mobileClass: '', icon: 'icons/cursor.svg' },
    { label: 'Git', gridClass: 'row-span-2 col-start-4 row-start-7', mobileClass: '', icon: 'icons/git.svg' },
    { label: 'GitHub', gridClass: 'row-span-2 col-start-5 row-start-7', mobileClass: '', icon: 'icons/github.svg' },
    { label: 'VS Code', gridClass: 'row-span-2 col-start-6 row-start-7', mobileClass: '', icon: '' },

    // Row 9 — Dev tooling + Deployment
    { label: 'Anaconda', gridClass: 'row-span-2 col-start-1 row-start-9', mobileClass: '', icon: 'icons/anaconda.svg' },
    { label: 'Jupyter', gridClass: 'row-span-2 col-start-2 row-start-9', mobileClass: '', icon: 'icons/jupyter.svg' },
    { label: 'Google Colab', gridClass: 'row-span-2 col-start-3 row-start-9', mobileClass: '', icon: 'icons/googlecolab.svg' },
    { label: 'Linux', gridClass: 'row-span-2 col-start-4 row-start-9', mobileClass: '', icon: 'icons/linux.svg' },
    { label: 'Streamlit', gridClass: 'row-span-2 col-start-5 row-start-9', mobileClass: '', icon: 'icons/streamlit.svg' },
    { label: 'Vercel', gridClass: 'row-span-2 col-start-6 row-start-9', mobileClass: '', icon: 'icons/vercel.svg' },

    // Row 11 — Cloud deployment
    { label: 'Render', gridClass: 'row-span-2 col-start-1 row-start-11', mobileClass: '', icon: 'icons/render.svg' },
    { label: 'Railway', gridClass: 'row-span-2 col-start-2 row-start-11', mobileClass: '', icon: 'icons/railway.svg' },
  ];

  return (
    <div className="tech bg-[#fffff0]">
      <TextBottomReveal>
        <h3 className="font-semibold text-black uppercase mb-4 ml-4">Professional at</h3>
      </TextBottomReveal>

      <div className="w-full min-h-screen flex items-center justify-center bg-[#fffff0]">

        <div className="relative parent grid grid-cols-6 grid-rows-12 gap-0 mx-2 w-full h-[900px] sm:h-[1300px] bg-[#fffff0]">

          {items.map((item, i) => (
            <div
              key={i}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`
                ${item.gridClass}
                relative
                flex items-center justify-center
                cursor-pointer
                bg-[#fffff0]
                group
                transition-all duration-300
                group-hover:bg-black
              `}
            >
              {item.icon ? (
                <img
                  alt={item.label}
                  loading="lazy"
                  width="80"
                  height="80"
                  decoding="async"
                  className="z-10 transition-all duration-300 group-hover:invert w-7 h-7 sm:w-[80px] sm:h-[80px]"
                  style={{ color: 'transparent' }}
                  src={item.icon}
                />
              ) : (
                <span className="z-10 text-center px-1 text-[10px] sm:text-sm font-semibold uppercase tracking-tight text-black transition-all duration-300 group-hover:text-white">
                  {item.label}
                </span>
              )}
            </div>
          ))}

          {/* Hover highlight */}
          <div
            className="absolute top-0 left-0 bg-black pointer-events-none transition-all duration-300"
            style={{
              transform: highlightStyle.transform,
              width: highlightStyle.width,
              height: highlightStyle.height,
              opacity: highlightStyle.opacity,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TechGrid;
