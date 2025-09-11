import React from "react";
import { useInView } from "react-intersection-observer";
import telegram from "../assets/images/telegram.svg";
import github from "../assets/images/github.svg";
import phone from "../assets/images/phone.svg";
import email from "../assets/images/envelope.svg";

export default function Contact() {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const contacts = [
    {
      icon: telegram,
      label: "Telegram",
      link: "https://t.me/abdullah_hariri20",
    },
    { icon: github, label: "GitHub", link: "https://github.com/Vega47" },
    { icon: phone, label: "+963 952123642" },
    { icon: email, label: "vega.sama2000@gmail.com" },
  ];

  return (
    <div className="bg-gray-800 pt-10" id="contact">
      <h2
        ref={titleRef}
        className={`text-center text-8xl text-white font-bold mb-20 transition-all duration-1000 ease-out ${
          titleInView
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-12"
        }`}
      >
        Contact Me
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 pb-20">
        {contacts.map((item, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          const content = (
            <div
              ref={ref}
              className={`transition-all duration-1000 ease-out ${
                inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              } flex items-center flex-col`}
            >
              <img src={item.icon} className="w-[100px] h-[100px]" alt="" />
              <h1 className="text-white mt-5 text-2xl">{item.label}</h1>
            </div>
          );

          return item.link ? (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
          ) : (
            <div key={index}>{content}</div>
          );
        })}
      </div>
    </div>
  );
}
