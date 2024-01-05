import React from "react";
import SkillsSections from "./Skills";
import { Current_skills, Current_Learning_skills } from "@/Constent/Constents";

const AboutMyself = () => {
  return (
    <section className="mt-20 md:mt-8">
      <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 p-4 md:flex-row md:text-left">
        <div className="md:w-1/2">
          <h2 className="text-center text-2xl font-bold mb-2 md:text-left">
            Get to know me!
          </h2>
          <p>
            Hi, my name is Rahul and I am a{" "}
            <span className="font-bold">{"highly ambitious"}</span>,
            <span className="font-bold">{" self-motivated"}</span>, and
            <span className="font-bold">{" driven"}</span> software engineer
            based in Bangalore, India.
          </p>
          <br />
          <p>
            I&#39;m currenlty working as front-end developer, have a wide range
            of hobbies and passions that keep me busy. From learning new things.
          </p>
          <br />
          <p>
            I believe that you should{" "}
            <span className="font-bold text-teal-500">never stop growing</span>{" "}
            🙂
          </p>
        </div>
        <div className="text-center md:w-1/2 md:text-left">
          <SkillsSections skills={Current_skills} title="My Skills" />
          <SkillsSections
            skills={Current_Learning_skills}
            title="Learning in 2024"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMyself;
