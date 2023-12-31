import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";

const Tokenomics = () => {
  const [animationDone, setAnimationDone] = useState(false);
  useEffect(() => {
    setAnimationDone(true);
  }, []);

  return (
    <Fade delay={200} triggerOnce={animationDone} cascade>
      <div
        className="msm:px-4  sm:px-[6vw] xl:px-[12vw] py-10 text-white"
        id="tokenomnics"
      >
        <h1 className="text-3xl text-center font-bold righteous  ">
          Tokenomnics{" "}
        </h1>
        <div className="grid md:grid-cols-2  my-16 items-center gap-10">
          <div>
            <p className="text-md drop-shadow-sm shadow-black righteous text-center mb-10">
              token supply <br /> 420,690,000,000,000
            </p>
            <div className="border-2 min-h-[200px] rounded-tr-2xl rounded-bl-2xl bg-black/60 border-white shadow-md shadow-white/30 flex items-center p-4 gap-20 comfortaa  text-[24px] mt-2">
              No Taxes, No Bullshit. It’s that simple.
              <br />
              <br />
              93.1% of the tokens were sent to the liquidity pool, LP tokens
              were burnt, and contract is renounced. The remaining 6.9% of the
              supply is being held in a multi-sig wallet only to be used as
              tokens for future centralized exchange listings, bridges, and
              liquidity pools. This wallet is easily trackable with the ENS name
              “pepecexwallet.eth”
            </div>
          </div>
          <div className="flex items-center justify-center py-20 relative">
            <img src="/images/tokenomnics.webp" alt="" className="w-[70%]" />
            <span className="absolute top-0 left-[20%] text-[20px]  comfortaa">
              CEX Listings <br />
              6.9%
            </span>
            <span className="absolute bottom-0 left-40%] text-[20px]  comfortaa">
              Liquidity pool <br />
              93.1%
            </span>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Tokenomics;
