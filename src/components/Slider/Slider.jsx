import React, { useEffect, useState } from "react";
import learningPath from '../../assets/learningPath.png'
import findMentor from '../../assets/findMentor.png'
import developerCommunity from '../../assets/developerCommunity.png'
import careerGuidance from '../../assets/careerGuidance.png'

const cards = [
  {
    title: "Learning Paths",
    desc: "Structured courses to guide your learning journey.",
    img: learningPath,
  },
  {
    title: "Find Your Mentor",
    desc: "Browse mentors by expertise and find the perfect match.",
    img: findMentor,
  },
  {
    title: "Developer Community",
    desc: "Join a community of developers to learn, share, and grow together.",
    img:developerCommunity
  },
  {
    title: "Career Guidance",
    desc: "Get career advice from experienced professionals.",
    img: careerGuidance
  },
];

export default function Slider() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getPosition = (index) => {
    if (index === active) return "center";
    if (index === (active - 1 + cards.length) % cards.length) return "left";
    if (index === (active + 1) % cards.length) return "right";
    return "hidden";
  };

  return (
    <div className="relative h-[420px] w-full flex items-center justify-center overflow-hidden">
      {cards.map((card, i) => {
        const position = getPosition(i);

        let transform = "translate(-50%, -50%) scale(0.8)";
        let opacity = 0;
        let zIndex = 0;

        if (position === "center") {
          transform = "translate(-50%, -50%) scale(1)";
          opacity = 1;
          zIndex = 20;
        }

        if (position === "left") {
          transform = "translate(calc(-50% - 450px), -50%) scale(0.9)";
          opacity = 0.4;
          zIndex = 10;
        }

        if (position === "right") {
          transform = "translate(calc(-50% + 450px), -50%) scale(0.9)";
          opacity = 0.4;
          zIndex = 10;
        }

        return (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-[550px] h-[280px] rounded-xl overflow-hidden border border-slate-700 bg-slate-900 text-white shadow-lg transition-all duration-700 ease-in-out"
            style={{ transform, opacity, zIndex }}
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-[140px] object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>

              <p className="text-slate-400 text-sm">{card.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}