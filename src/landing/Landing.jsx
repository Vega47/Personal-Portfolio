import React from "react";
import DotGrid from "./DotGrid";
import TextType from "./TextType";
import { useRef } from "react";
import VariableProximity from "./VariableProximity";
export default function Landing() {
  const containerRef = useRef(null);
  return (
    <div className="bg-gray-800 relative z-20" id="home">
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <DotGrid
          dotSize={20}
          gap={15}
          baseColor="#101828"
          activeColor="#123FE6"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className=" absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col z-50 ">
        <TextType
          className="text-3xl md:text-6xl w-full md:w-[600px] text-center font-bold"
          text={["Hi I'm Abdullah Alhariri Frontend Developer"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />

        <p className="text-xl text-gray-400 text-center mt-8 md:px-56 ">
          I’m a developer passionate about crafting accessible, pixel-perfect
          user interfaces that blend thoughtful design with robust engineering.
        </p>
        <div className="buttons mt-7  ">
          <a
            href="/CV_2025-06-07-073022.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              onClick={() => {
                console.log("hi");
              }}
              className="text-white cursor-pointer border border-solid p-3.5 border-blue-600 border-2 rounded-2xl font-bold transtion duration-700 focus:bg-blue-600 "
            >
              Download C.V
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
