import LoadingScreen from "@/components/LoadingScreen";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import Services from "@/sections/Services";
import About from "@/sections/About";
import FeaturedPortfolio from "@/sections/FeaturedPortfolio";
import PrintspirationGallery from "@/sections/PrintspirationGallery";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <SmoothScroll />

      <Navbar />

      <main>
        <Hero />
        <Services />
        <FeaturedPortfolio />
        <PrintspirationGallery />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
