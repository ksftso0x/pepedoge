import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";

const About = () => {
  const [animationDone, setAnimationDone] = useState(false);
  useEffect(() => {
    setAnimationDone(true);
  }, []);

  return (
    <div
      className="msm:px-4 sm:px-[6vw] xl:px-[12vw] py-10 flex xl:flex-row msm:flex-col-reverse justify-between text-white"
      id="about"
    >
      <Fade delay={500} duration={1000} triggerOnce={animationDone} className="flex justify-center">
        <img src="/images/about.webp" alt="" className="w-[60%] object-contain" />
      </Fade>
      <div className="xl:w-2/3 msm:w-full flex flex-col pt-10 xl:pr-10">
        <Fade delay={500} duration={1000} triggerOnce={animationDone}>
          <h1 className="text-4xl md:text-center font-bold righteous">About</h1>
        </Fade>
        <Fade delay={500} duration={1000} triggerOnce={animationDone}>
          <p className="font-regular text-[24px] mt-4 comfortaa">
            Pepe is tired of watching everyone play hot potato with the endless
            derivative Shiba Cum GMElonKishu Turbo AssFloki Moon Inu coins. The
            Inu’s have had their day. It’s time for the most recognizable meme
            in the world to take his reign as king of the memes.
          </p>
          <div className="my-6" />
          <p className="font-regular text-[24px] mt-4 comfortaa">
            Pepe is here to make memecoins great again. Launched stealth with no
            presale, zero taxes, LP burnt and contract renounced, $PEPE is a
            coin for the people, forever. Fueled by pure memetic power, let
            $PEPE show you the way.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default About;
