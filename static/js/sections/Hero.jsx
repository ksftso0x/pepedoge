import { Slide, Zoom } from "react-awesome-reveal";
import { useState, useEffect } from "react";

const socials = [
  {
    name: "Telegram",
    icon: "/images/links/telgr.webp",
    url: "https://t.me/pepecoineth",
  },
  {
    name: "cm",
    icon: "/images/links/cm.webp",
    url: "https://coinmarketcap.com/currencies/pepe/",
  },
  {
    name: "dextools",
    icon: "/images/links/dextools.webp",
    url: "https://www.dextools.io/app/en/ether/pair-explorer/0xA43fe16908251ee70EF74718545e4FE6C5cCEc9f",
  },
  {
    name: "etherscan",
    icon: "/images/links/etherscan.webp",
    url: "https://etherscan.io/address/0x6982508145454Ce325dDbE47a25d4ec3d2311933",
  },
  {
    name: "uniswap",
    icon: "/images/links/uniswap.webp",
    url: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x6982508145454Ce325dDbE47a25d4ec3d2311933",
  },
  {
    name: "Twitter",
    icon: "/images/links/twitter.webp",
    url: "https://twitter.com/pepecoineth",
  },
];

const Hero = () => {
  const [animationDone, setAnimationDone] = useState(false);
  useEffect(() => {
    setAnimationDone(true);
  }, []);

  return (
    <div
      className="msm:px-4 sm:px-[6vw] xl:px-[12vw] pt-10 flex items-center justify-center text-white max-sm:w-full"
      id="home"
    >
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-20 sm:gap-0 lg:w-[90%] sm:w-full">
        <div>
          <Slide
            direction="up"
            delay={100}
            triggerOnce={animationDone}
            className="w-full msm:mx-auto my-10"
          >
            {" "}
            <h1 className="text-7xl drop-shadow-md msm:text-center sm:text-left md:text-left font-bold genty msm:mx-auto md:ml-0">
              $pepe
            </h1>
          </Slide>
          <Slide direction="up" delay={100} triggerOnce={animationDone}>
            <p className="font-regular md:text-left msm:text-center text-[30px] mt-4 comfortaa">
              the most memeable memecoin in existence. The dogs have had their
              day, it&apos;s time for Pepe to take reign.
            </p>
          </Slide>
          <Slide
            delay={100}
            triggerOnce={animationDone}
            className="text-center"
          >
            <div className="grid grid-cols-2 max-[400px]:grid-cols-1 sm:gap-0 md:gap-10">
              <div>
                <button className="righteous px-6 py-3 border border-white rounded-full text-white hover:bg-white/20 duration-150 my-10">
                  <a href="#presale" className="text-white hover:opacity-80">
                    Pre-sale
                  </a>{" "}
                </button>
              </div>
              <div>
                <button className="righteous px-6 py-3 border border-white rounded-full text-white hover:bg-white/20 duration-150 my-10">
                  <a href="#airdrop" className="text-white hover:opacity-80">
                    Airdrop
                  </a>{" "}
                </button>
              </div>
            </div>
          </Slide>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            {socials.map((s, i) => (
              <Zoom delay={200} triggerOnce={animationDone} key={i}>
                {" "}
                <a href={s.url} target="_blank" title={s.name} rel="noreferrer">
                  <img
                    src={s.icon}
                    alt=""
                    className="w-20 hover:scale-125 duration-150 object-contain"
                  />
                </a>{" "}
              </Zoom>
            ))}
          </div>
        </div>
        <div>
          <Slide direction="right" triggerOnce={animationDone}>
            {" "}
            <img
              src="/images/hero.webp"
              alt=""
              className="w-full object-contain"
            />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Hero;
