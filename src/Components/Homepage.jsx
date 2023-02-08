import AboutMyself from "./AboutMyself";
import HeroSection from "./HeroSection";
import NavBar from "./Navbar";
import ProjectsSection from "./ProjectsSection";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-200 antialiased text-slate-600">
      <NavBar />
      <HeroSection />
      <AboutMyself />
      <ProjectsSection />
    </div>
  );
};

export default Homepage;
