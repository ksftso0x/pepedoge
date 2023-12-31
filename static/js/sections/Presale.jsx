import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";

const Presale = () => {
  const presaleAddress = "0x652890E8e90Ee6D1C335C74b533B0E04545A05BD";
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    setAnimationDone(true);
  }, []);

  const copyPresaleAddress = () => {
    navigator.clipboard.writeText(presaleAddress);
    window.alert("Copied to the clipboard");
  };

  return (
    <Fade delay={200} triggerOnce={animationDone} cascade>
      <div
        className="msm:px-4 sm:px-[6vw] xl:px-[12vw] py-10 text-white text-center"
        id="presale"
      >
        <h1 className="text-3xl text-center font-bold righteous">
          Pre-sale is live
        </h1>
        <p className="font-regular text-center text-[16px] mt-12 comfortaa">
          Pre-sale Address
        </p>
        <p className="font-bold text-center max-sm:text-[16px] sm:text-[20px] md:text-[24px] my-4 comfortaa">
          {presaleAddress.substring(0, 22)}<br className="min-[500px]:hidden"></br>{presaleAddress.substring(22)}
        </p>
        <button 
          className="righteous px-6 py-1 bg-gr border border-white rounded-full text-white hover:bg-lime-500 duration-150 -ml-6"
          onClick={copyPresaleAddress}
        >
          Copy Address
        </button>
        <p className="font-regular text-center text-[16px] mt-8 mb-4 comfortaa">
          ● Pre-sale price tier 1 (for purchase amount &lt; 1 ETH): 1 ETH = 50,000,000,000 $PEPE.
        </p>
        <p className="font-regular text-center text-[16px] my-4 comfortaa">
          ● Pre-sale price tier 2 (for purchase amount &ge; 1 ETH): 1 ETH = 80,000,000,000 $PEPE.
        </p>
        <p className="font-regular text-center text-[16px] my-4 comfortaa">
          The minimum purchase is 0.1 ETH, and the maximum purchase is 10 ETH.
        </p>
        <p className="font-regular text-center text-[16px] my-4 comfortaa">
          Send ETH from your wallet to the pre-sale address above. &nbsp;Our system will send $PEPE tokens to your wallet instantly.
        </p>
      </div>
    </Fade>
  );
};

export default Presale;
