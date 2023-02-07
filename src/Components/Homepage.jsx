import AboutMyself from "./AboutMyself";
import HeroSection from "./HeroSection";
import NavBar from "./Navbar";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-200 antialiased text-slate-600">
      <NavBar />
      <HeroSection />
      <AboutMyself />
    </div>
  );
};

export default Homepage;
