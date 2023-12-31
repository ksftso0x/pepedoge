import Border from "../components/Border";
import Navbar from "../components/Navbar";
import About from "../sections/About";
import Hero from "../sections/Hero";
import HowToBuy from "../sections/HowToBuy";
import Links from "../sections/Links";
import Roadmap from "../sections/Roadmap";
import Tokenomics from "../sections/Tokenomics";
import Footer from "../sections/Footer";
import Presale from "../sections/Presale";
import Airdrop from "../sections/Airdrop";
import { useEffect, useState } from "react";

function Home() {
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <div className="bg-gr min-h-screen scroll-smooth">
      <Navbar />
      <div className="relative">
        <img
          src="/images/herobg.webp"
          className="absolute right-0 -bottom-0 opacity-10 z-10"
          alt=""
        />
        <div className="relative z-20">
          <Hero />
          <Links />
        </div>
      </div>
      <Border />
      <About />
      <Border />
      <HowToBuy />
      <Border />
      <Presale />
      <Border />
      <Airdrop />
      <Border />
      <Tokenomics />
      <Border />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default Home;
