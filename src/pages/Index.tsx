import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesSection from "@/components/ServicesSection";
import Contact from "@/components/Contact";
import RemoteSupport from "@/components/RemoteSupport";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Neuhaus-IT – IT-Service für KMU in Castrop-Rauxel</title>
        <meta name="description" content="IT-Partner für kleine Unternehmen und Privathaushalte im Ruhrgebiet: Beratung, Support, Managed Services und Open Source. Persönlich seit 2017." />
        <link rel="canonical" href="https://neuhaus-it.de/" />
        <meta property="og:title" content="Neuhaus-IT – IT-Service für KMU in Castrop-Rauxel" />
        <meta property="og:description" content="IT-Partner für kleine Unternehmen und Privathaushalte im Ruhrgebiet: Beratung, Support, Managed Services und Open Source. Persönlich seit 2017." />
        <meta property="og:url" content="https://neuhaus-it.de/" />
      </Helmet>
      <Header />
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
