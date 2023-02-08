import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";
import { Projects_Deatils } from "@/Constent/Constents";

const ProjectsSection = () => {
  return (
    <section className="mt-8 mx-4 pb-6">
      <div>
        <h1 className="text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
      </div>
      <div className="flex md:flex-col-reverse gap-2 max-w-7xl m-auto">
        <div className="flex-root sm:flex sm:justify-between sm:my-4">
          <hr className="w-1 h-10 mx-auto my-4 bg-teal-500 border-0 rounded sm:hidden" />
          <span className="[writing-mode:vertical-lr] sm:[writing-mode:rl-tb] align-baseline">
            &#169; raguly55@gmail.com
          </span>
          <hr className="w-1 h-8 mx-auto my-4 bg-teal-500 border-0 rounded sm:hidden" />

          <div className="inline-block sm:flex gap-4">
            <IoLogoGithub size={25} />
            <IoLogoInstagram size={25} />
            <IoLogoLinkedin size={25} />
          </div>

          <hr className="w-1 h-10 mx-auto my-4 bg-teal-500 border-0 rounded sm:hidden" />
        </div>
        <div className="flex-1 gap-2 grid grid-cols-1 sm:grid-cols-2 place-content-center sm:min-w-fit">
          {Projects_Deatils.map((project, idx) => {
            return (
              <div
                className="bg-teal-600 rounded-md text-base text-white p-2 text-center"
                key={idx}
              >
                <h3 className="font-bold text-lg">{project.project_name}</h3>
                <span>{project.project_Desc}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
