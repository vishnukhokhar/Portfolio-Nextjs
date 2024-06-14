import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { skills, experiences } from "../constants";
import CTA from "../components/CTA";
import github from "../assets/images/github.png";
import gmail from "../assets/images/gmail.png";
import leetcode from "../assets/images/leetcode.png";
import linkedin from "../assets/images/linkedin.png";
// import twitter from "../assets/images/twitter.png";

const About = () => {
  const icons = [
    {
      href: "https://github.com/vishnukhokhar",
      src: github,
      alt: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/vishnu-khokhar-65061a244/",
      src: linkedin,
      alt: "LinkedIn",
    },
    {
      href: "mailto:vishnukhokhar2412@gmail.com",
      src: gmail,
      alt: "Gmail",
    },
    {
      href: "https://leetcode.com/Vishnu_Khokhar/",
      src: leetcode,
      alt: "LeetCode",
    },
  ];
  return (
    <section className="max-container">
      <div className="fixed top-1/2 left-0 transform -translate-y-1/2 z-50">
        <ul className="p-0">
          {icons.map((icon, index) => (
            <li
              key={index}
              className="h-10 w-10 list-none pl-0.5 pt-0.75 mt-7 bg-whitesmoke rounded-[30%] hover:bg-[#eaed94]"
            >
              <a href={icon.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="h-9 w-9 rounded-lg"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Vishnu Khokhar
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap- text-slate-500 ">
        <p>
          Software Engineer based in India, specializing in Full Stack
          Development through hands-0n learning and building applications{" "}
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
      </div>

      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div>
          <p>
            I've worked as intern, leveling up my skills and teaming up with
            smart people. Here's the rundown:
          </p>
        </div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    ></img>
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: "experience.iconBg",
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text--500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-100 font-normal pl-1 text-md"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="bg-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
