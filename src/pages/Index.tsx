import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesSection from "@/components/ServicesSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServicesSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
