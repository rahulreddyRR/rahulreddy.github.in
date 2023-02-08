"use client";
import AboutMyself from "./AboutMyself";
import HeroSection from "./HeroSection";
import NavBar from "./Navbar";
import ProjectsSection from "./ProjectsSection";
import { useTheme } from "next-themes";

const Homepage = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div
      className={`min-h-screen ${
        currentTheme === "dark" ? "dark:bg-stone-900" : "bg-gray-200"
      } antialiased text-slate-600`}
    >
      <div>
        <NavBar />
        <HeroSection />
        <AboutMyself />
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Homepage;
