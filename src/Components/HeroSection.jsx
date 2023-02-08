import React from "react";
import Image from "next/image";
import heroImage from "../../public/rahul_transparent.png";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { GoLinkExternal } from "react-icons/go";
import { My_Github_url, My_Linked_url } from "@/Constent/Constents";

const HeroSection = () => {
  return (
    <section className="md:flex w-full md:flex-row-reverse px-4 mt-6">
      <div className="md:mt-2 md:w-1/2 text-center grid place-content-center">
        <div className="bg-teal-600 rounded-tl-[999px]">
          <Image src={heroImage} alt="" width={325} height={325} />
        </div>
      </div>
      <div className="mt-8 md:mt-16 md:w-1/2 text-center space-y-4">
        <h1 className="font-bold text-4xl">Hello! My Name is</h1>
        <h2 className="font-bold text-4xl text-teal-600">Rahul Reddy </h2>

        <p className="md:pt-4">
          I&#39;m a{" "}
          <span className="font-semibold text-teal-500">
            Software Engineer{" "}
          </span>
          based in Bangalore, India. Working towards creating software that
          makes life easier and more meaningful.
        </p>
        <div>
          <div className="flex justify-center items-center gap-2 mt-8">
            <a href={My_Github_url} target={"_blank"} rel="noreferrer">
              <IoLogoGithub size={40} color="#171515" />
            </a>
            <a href={My_Linked_url} target={"_blank"} rel="noreferrer">
              <IoLogoLinkedin size={45} color="#0A66C2" />
            </a>
            <a
              href="https://github.com/rahulreddyRR/rahulreddyRR/blob/main/Resume.pdf"
              className="flex items-center text-neutral-100 font-semibold px-2 py-2 bg-teal-600 rounded shadow hover:bg-teal-700"
              target="_blank"
              rel="noreferrer"
            >
              Download CV &nbsp; <GoLinkExternal size={20} color="#FFFFFF" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
