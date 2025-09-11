import React from "react";
import Ecommerce from "../assets/images/E-commerce-app.png";
import Gaming from "../assets/images/GamaingWebSite.png";
import Weather from "../assets/images/Weather-app.png";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const projects = [
    {
      img: Ecommerce,
      title: "E-commerce",
      desc: "A modern e-commerce platform designed to showcase diverse product categories. Easily browse fashion, electronics, home goods, and more in a clean, organized layout. Perfect for discovering and shopping your favorite items effortlessly.",
      tech: ["React", "Tailwind", "API"],
      link: "https://vega47.github.io/E-commerce-app/",
    },
    {
      img: Gaming,
      title: "Gaming Website",
      desc: "A sleek gaming showcase website featuring a variety of game genres. Browse categories like action, adventure, puzzle, and strategy in a clean, modern layout. Perfect for discovering your next favorite type of game at a glance.",
      tech: ["JavaScript", "Bootstrap", "HTML", "API"],
      link: "https://vega47.github.io/Gaming-webiste/",
    },
    {
      img: Weather,
      title: "Weather App",
      desc: "A clean and reliable weather website providing accurate forecasts for any location. Browse current conditions, hourly updates, and extended forecasts in an easy-to-use layout. Perfect for planning your day or week with up-to-date weather information.",
      tech: ["JavaScript", "Bootstrap", "HTML", "API"],
      link: "https://vega47.github.io/Weather-App/",
    },
  ];

  return (
    <div className="bg-gray-900 pt-30" id="projects">
      <h2 className="text-center text-8xl text-white font-bold mb-20 transition-all duration-1000 ease-out delay-200">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {projects.map((proj, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <div
              key={index}
              ref={ref}
              className={`bg-gray-700 rounded-2xl shadow-md hover:shadow-lg overflow-hidden p-0 transition-all duration-1000 ease-out ${
                inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }} // تأخير متسلسل
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full rounded-t-2xl hover:scale-110 transition mb-7"
              />
              <div className="text-white px-4">
                <h2>{proj.title}</h2>
                <p>{proj.desc}</p>
                <div className="toggles flex flex-row gap-2 my-5">
                  {proj.tech.map((tech, i) => (
                    <div
                      key={i}
                      className="bg-gray-500 w-fit px-2 py-1 rounded-xl"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                {proj.link && (
                  <div className="btn mb-5">
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="cursor-pointer bg-blue-600 px-10 py-2 rounded-xl hover:bg-blue-800 transition">
                        Visit
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
