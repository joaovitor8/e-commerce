import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Categories from "@/src/components/Categories";
import FeaturedProducts from "@/src/components/FeaturedProducts";
import Features from "@/src/components/Features";
import Newsletter from "@/src/components/Newsletter";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Features />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
