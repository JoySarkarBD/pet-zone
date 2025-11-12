import About from "@/components/About";
import BookingCTA from "@/components/BookingCTA";
import Hero from "@/components/Hero";
import HowWeServe from "@/components/HowWeServe";
import Pricing from "@/components/Pricing";
import TestimonialSection from "@/components/TestimonialSection";
import TopCategories from "@/components/TopCategories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Petgon - Pet Care Services",
  description: "Your one-stop solution for all pet care needs",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HowWeServe />
      <TopCategories />
      <TestimonialSection />
      <Pricing />
      <BookingCTA />
    </>
  );
}
