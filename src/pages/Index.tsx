import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DigitalBusinessCard from "@/components/DigitalBusinessCard";
import About from "@/components/About";
import ServicesSection from "@/components/ServicesSection";
import Contact from "@/components/Contact";
import RemoteSupport from "@/components/RemoteSupport";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <DigitalBusinessCard />
      <Hero />
      <ServicesSection />
      <About />
      <Contact />
      <RemoteSupport />
      <Footer />
    </div>
  );
};

export default Index;
