import { About } from "@/components/about";
import { Contacts } from "@/components/contacts";
import { Hero } from "@/components/hero";
import { OfficeVista } from "@/components/office-vista";
import { Services } from "@/components/services";
import { TrustBar } from "@/components/trust-bar";
import { Visit } from "@/components/visit";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <OfficeVista />
      <Services />
      <Visit />
      <Contacts />
    </>
  );
}
