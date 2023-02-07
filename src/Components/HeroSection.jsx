import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="md:flex md:flex-row-reverse max-w-7xl px-4 mt-6">
      <div className="md:mt-2 md:w-1/2 text-center grid place-content-center">
        <div className="bg-teal-600 rounded-tl-[999px]">
          <Image
            src="/rahul_transparent_crop.png"
            alt=""
            width={325}
            height={325}
            className=""
          />
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
      </div>
    </section>
  );
};

export default HeroSection;
