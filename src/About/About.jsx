import React from "react";
import aboutimg from "../assets/images/landing-image.png";
import { useInView } from "react-intersection-observer";
export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <>
      <div
        className="about py-12 bg-gray-900 flex flex-col md:flex-row justify-between items-center"
        id="about"
      >
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <img src={aboutimg} alt="" />
        </div>
        <div
          className={` text-white p-10 transition-all  duration-1000 delay-1000 ease-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
          ref={ref}
        >
          <h1 className="text-6xl font-bold mb-5 md:text-left text-center ">
            About Me
          </h1>
          <p className="text-blue-500 font-medium md:text-left text-center ">
            I started my journey in web development driven by curiosity and a
            love for creating. Over the years, I’ve worked on a variety of
            projects, from personal websites to interactive applications,
            constantly learning and exploring new technologies to keep my skills
            sharp.
          </p>
          <p className="text-blue-500 font-medium md:text-left text-center  ">
            I strongly believe that code is more than just functionality—it’s an
            experience. I enjoy collaborating with others, tackling challenges
            head-on, and continuously improving my craft. Outside of coding,
            you’ll often find me experimenting with new coffee recipes ☕ or
            diving into a good video game 🎮.
          </p>
        </div>
      </div>
    </>
  );
}
