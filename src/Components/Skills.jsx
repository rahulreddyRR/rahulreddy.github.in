import React from "react";
const SkillsSections = ({ skills, title }) => {
  return (
    <>
      <h2 className="text-center text-2xl font-bold mb-2 md:text-left">
        {title}
      </h2>
      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start mb-3">
        {skills.map((item, idx) => {
          return (
            <p
              key={idx}
              className="bg-teal-600 px-4 py-2 mr-2 mt-2 text-white rounded font-semibold"
            >
              {item.skill}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default SkillsSections;
