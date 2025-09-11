import React from "react";
import { useInView } from "react-intersection-observer";
import raect from "../assets/images/react.png";
import jq from "../assets/images/jq.png";
import css from "../assets/images/css.png";
import html5 from "../assets/images/html5.png";
import tailwind from "../assets/images/tailwind-css-seeklogo.png";
import bootstrap from "../assets/images/bootstrap.png";
import js from "../assets/images/javascript.png";

export default function Skills() {
  const skills = [
    { img: html5, height: "230px" },
    { img: css, height: "180px" },
    { img: js, height: "320px" },
    { img: tailwind, height: "120px" },
    { img: bootstrap, height: "220px" },
    { img: raect, height: "210px" },
    { img: jq, height: "200px" },
  ];

  return (
    <div className="bg-gray-800 pt-20 pb-20">
      <h2 className="text-center text-8xl text-white font-bold mb-20 transition-all duration-1000 ease-out">
        Skills
      </h2>

      <div className="flex flex-row flex-wrap justify-center">
        {skills.map((skill, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <div
              key={index}
              ref={ref}
              className={`md:w-3/12 w-full p-1 flex flex-col justify-center items-center transition-all duration-700 ease-out ${
                inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img
                src={skill.img}
                alt=""
                className={`h-[${skill.height}]`}
                style={{ height: skill.height }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
