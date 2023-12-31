import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";

const Footer = () => {
  const [animationDone, setAnimationDone] = useState(false);
  useEffect(() => {
    setAnimationDone(true);
  }, []);

  return (
    <div className="">
      <Fade delay={100} triggerOnce={animationDone} fraction={0.8}>
        <h1 className="text-4xl text-center font-bold righteous text-white mt-3 ">
          Contact
        </h1>
      </Fade>
      <Fade delay={150} triggerOnce={animationDone}>
        <div className="flex flex-col items-center justify-center mb-7">
          <img src="/images/pepetitle.webp" className=" mt-4" alt="title-logo"/>
        </div>
      </Fade>
      <br />
      <br />
      <div className="flex items-center justify-center">
        <Fade delay={200} triggerOnce={animationDone}>
          <li className="inline-block mx-4 py-2 px-4 rounded-md text-white font-bold">
            <a
              href="https://t.me/pepecoineth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/twttttee2.png"
                alt="icon-logo"
                className=" rounded-full"
                style={{ background: "none" }}
              />
            </a>
          </li>
        </Fade>
        <Fade delay={200} triggerOnce={animationDone}>
          {" "}
          <li className="inline-block mx-4 py-2 px-4 rounded-md text-white font-bold ">
            <a
              href="https://twitter.com/pepecoineth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/twtttt.png" alt="discord logo" className="icon-logo" />
            </a>
          </li>
        </Fade>
        <Fade delay={200} triggerOnce={animationDone}>
          {" "}
          <li className="inline-block mx-4 py-2 px-4 rounded-md text-white font-bold">
            <a
              href="https://discord.com/channels/@me/1089907445331136543/1093956881367695361"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="/images/twttttee234.png"
                alt="messenger logo"
                className="icon-logo text-green-400"
              />
            </a>
          </li>
        </Fade>
      </div>
      <Fade delay={400} triggerOnce={animationDone}>
        {" "}
        <div className="items-center text-center justify-center pt-5 md:px-[12vw] msm:px-4">
          <p className=" flex items-center justify-center text-white font-regular text-[20px] mt-4 comfortaa">
            $pepe coin has no association with Matt Furie or his creation Pepe
            the Frog. This token is simply paying homage to a meme we all love
            and recognize.
          </p>
          <br />
          <p className="flex items-center justify-center text-white font-regular text-[20px] mt-4 comfortaa">
            $PEPE is a meme coin with no intrinsic value or expectation of
            financial return. There is no formal team or roadmap. the coin is
            completely useless and for entertainment purposes only
          </p>
          <br />
        </div>
      </Fade>

      <footer className="bg-green-500 shadow-black shadow-sm">
        <div className=" mx-auto py-4 text-center ">
          <p>&copy; 2023 By PEPE.ALL rights reserved!</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
