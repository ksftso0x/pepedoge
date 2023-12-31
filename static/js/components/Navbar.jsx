import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
const links = ["home", "about", "how to buy", "tokenomnics", "roadmap"];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  useEffect(() => {
    setAnimationDone(true);
  }, []);

  return (
    <div className="flex relative righteous items-center justify-between shadow-md msm:px-4 sm:px-[6vw] xl:px-[12vw] py-10 msm:text-[20px] md:text-[10px] xl:text-[12px]">
      <Fade delay={1} triggerOnce={animationDone} direction="up">
        {" "}
        <a href="/" className="text-white hover:opacity-80">
          <img src="/images/pepetitle.webp" alt="" className="w-36" />
        </a>{" "}
      </Fade>
      <div className="flex items-center gap-4 msm:hidden md:flex">
        {links.map((link, index) => (
          <Fade
            delay={1}
            triggerOnce={animationDone}
            direction="up"
            key={index}
          >
            {" "}
            <a href={`#${link}`} className="text-white hover:opacity-80">
              {link}
            </a>{" "}
          </Fade>
        ))}
      </div>
      <Fade
        delay={1}
        triggerOnce={animationDone}
        className="msm:hidden md:block"
      >
        <button className="px-6 py-3 border border-white rounded-full text-white hover:bg-white/20 duration-150">
          <a
            href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x6982508145454Ce325dDbE47a25d4ec3d2311933"
            target="_blank"
            rel="noopener noreferrer"
          >
            buy&nbsp;now
          </a>{" "}
        </button>
      </Fade>
      <button
        className="msm:block md:hidden"
        onClick={() => setShowNav(!showNav)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#fff"
          className="w-6 h-6 scale-150"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {showNav && (
        <div className="fixed z-30  w-screen h-screen  top-0 left-0 bg-gr shadow-sm py-10">
          <div className="flex items-center flex-col gap-10 relative mt-20">
            {links.map((link, index) => (
              <Fade
                delay={1}
                triggerOnce={animationDone}
                direction="up"
                key={index}
              >
                {" "}
                <a
                  href={`#${link}`}
                  onClick={() => setShowNav(!showNav)}
                  className="text-white hover:opacity-80"
                >
                  {link}
                </a>{" "}
              </Fade>
            ))}
          </div>
          <button
            className="absolute right-4 top-10"
            onClick={() => setShowNav(!showNav)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
