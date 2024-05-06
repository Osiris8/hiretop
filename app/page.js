import Image from "next/image";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Trusted from "@/components/Trusted";
import Feature1 from "@/components/Feature1";
import Feature2 from "@/components/Feature2";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Trusted />
      <Feature1 />
      <Feature2 />
    </div>
  );
}
