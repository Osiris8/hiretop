import Image from "next/image";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Trusted from "@/components/Trusted";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Trusted />
    </div>
  );
}
