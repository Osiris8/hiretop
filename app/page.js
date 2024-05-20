import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Trusted from "../components/Trusted";
import Feature1 from "../components/Feature1";
import Feature2 from "../components/Feature2";
import FAQSection from "../components/Faq";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Trusted />
      <Feature1 />
      <Feature2 />
      <FAQSection />
      <Cta />
      <Footer />
    </div>
  );
}
