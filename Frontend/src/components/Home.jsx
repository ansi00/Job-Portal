import React from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection.jsx";
import CategoryCarousel from "./CategoryCarousel.jsx";
import LatestJobs from "./LatestJobs.jsx";
import Footer from "./Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";

export default function Home() {
  useGetAllJobs();
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </div>
  );
}
