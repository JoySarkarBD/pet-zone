import About from "@/components/About";
import BookingCTA from "@/components/BookingCTA";
import Hero from "@/components/Hero";
import HowWeServe from "@/components/HowWeServe";
import Pricing from "@/components/Pricing";
import TopCategories from "@/components/TopCategories";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HowWeServe />
      <TopCategories />
      <Pricing />
      <BookingCTA />
    </>
  );
}
