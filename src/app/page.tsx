import { About } from "@/components/about";
import { Contacts } from "@/components/contacts";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { TrustBar } from "@/components/trust-bar";
import { Visit } from "@/components/visit";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Visit />
      <Contacts />
    </>
  );
}
