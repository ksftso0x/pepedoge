import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";

const phases = [
  {
    name: "Phase 1",
    jobs: [
      "Launch",
      "CoinGecko/ Coinmark etcap listings",
      "1000+ Holders",
      "Get $PEPE Trending on twitter with our  memetic power",
    ],
  },
  {
    name: "Phase 2",
    jobs: [
      "Community/Partnerships Pepe Times digital newspaper",
      "Formation of token gated discord group, Pepe palace, for holders, more details tba",
      "CEX Listings  10,000+ holders",
    ],
  },
  {
    name: "Phase 3",
    jobs: [
      "Pepe merch",
      "Pepe academy",
      "Pepe tools",
      "T1 Exchange  Listings 100,000+ holders",
      "Meme takeover",
    ],
  },
];

const Roadmap = () => {
  const [animationDone, setAnimationDone] = useState(false);
  useEffect(() => {
    setAnimationDone(true);
  }, []);

  return (
    <div className="msm:px-4  sm:px-[6vw] xl:px-[12vw] py-20" id="roadmap">
      <Fade delay={100} triggerOnce={animationDone} className="w-full">
        <div className="flex  w-full justify-between">
          <img
            src="/images/pepepissing.webp"
            alt=""
            className="w-[296px] h-[296px] xl:block msm:hidden"
          />
          <div className=" mx-auto">
            <h1 className="text-4xl text-center   msm:font-bold righteous text-white mb-6 ">
              Roadmap
            </h1>
            <div className="border-2 min-h-[200px] h-fit rounded-tr-2xl rounded-bl-2xl mx-auto bg-black/60 border-white shadow-md text-white shadow-white/30  py-2 px-10  comfortaa  md:w-fit msm:w-full text-center text-[20px] mt-2">
              Phase 1: Meme <br />
              Phase 2: Vibe and HODL <br />
              Phase 3: Meme Takeover
            </div>
          </div>
          <img
            src="/images/hero.webp"
            alt=""
            className="w-[296px] h-[296px] xl:block msm:hidden"
          />
        </div>
      </Fade>
      <img
        src="/images/hero.webp"
        alt=""
        className="w-[296px] h-[296px] xl:hidden msm:block mx-auto"
      />
      <p className="md:w-[70%] msm:w-[100%] text-[20px] comfortaa text-white text-center mx-auto mt-6">
        All jokes aside, here is a rough sketch of $pepe path ahead. We dont
        wan’t to give everything away on day 1, Expect surprises along the way ;
      </p>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 msm:grid-cols-1 gap-10 my-10">
        {phases.map((phase, index) => (
          <div
            key={index}
            className="border-2 min-h-[200px] h-fit rounded-tr-[40px] rounded-bl-2xl bg-black/60 border-white shadow-md text-white shadow-white/30  p-14  comfortaa  w-full text-[20px] mt-2"
          >
            <Fade delay={100} triggerOnce={animationDone}>
              {" "}
              <h1 className="text-xl righteous text-white">{phase.name}</h1>
            </Fade>
            <ul className="list-disc pt-6">
              {phase.jobs.map((job, index) => (
                <li key={index} className="list-disc">
                  {job}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <img
        src="/images/pepepissing.webp"
        alt=""
        className="w-[296px] h-[296px] xl:hidden msm:block mx-auto"
      />
    </div>
  );
};

export default Roadmap;
