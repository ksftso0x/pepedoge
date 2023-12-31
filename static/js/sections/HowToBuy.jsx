import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";

const stepsHowToBuy = [
  {
    image: "createawallet",
    title: "Create a wallet",
    desc: "download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.",
  },
  {
    image: "getsomeeth",
    title: "get some eth",
    desc: "have ETH in your wallet to switch to $PEPE. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.",
  },
  {
    image: "gotouniswap",
    title: "go to uniswap",
    desc: "connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $PEPE token address into Uniswap, select Pepe, and confirm. When Metamask prompts you for a wallet signature, sign.",
  },
  {
    image: "switcheth",
    title: "Switch ETH for $PEPE",
    desc: "switch ETH for $PEPE. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.",
  },
];

const HowToBuy = () => {
  const [animationDone, setAnimationDone] = useState(false);
  useEffect(() => {
    setAnimationDone(true);
  }, []);

  return (
    <div
      className="msm:px-4  sm:px-[6vw] xl:px-[12vw] py-10   justify-between text-white "
      id="how to buy"
    >
      <h1 className="text-4xl text-center font-bold righteous ">How to buy</h1>
      <div className="flex flex-col gap-4 mt-10">
        {stepsHowToBuy.map((step, index) => (
          <div
            key={index}
            className="border-2 min-h-[200px] rounded-tr-2xl rounded-bl-2xl bg-black/60 border-white shadow-md shadow-white flex msm:flex-wrap  md:flex-nowrap   items-center p-4 gap-20"
          >
            <img
              src={`/images/howtobuy/${step.image}.webp`}
              alt=""
              className="w-[172px] h-[172px]  object-contain mx-auto"
            />

            <div>
              <Fade delay={100} triggerOnce={animationDone}>
                {" "}
                <h1 className="righteous text-xl msm:text-center md:text-left">
                  {step.title}
                </h1>
              </Fade>
              <Fade delay={200} triggerOnce={animationDone}>
                {" "}
                <p className="comfortaa  text-[20px] mt-2 msm:text-center md:text-left">
                  {step.desc}
                </p>
              </Fade>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="mt-14 flex items-center justify-between">
        <iframe
          src="https://app.uniswap.org/#/swap?outputCurrency=0x6982508145454ce325ddbe47a25d4ec3d2311933"
          height="660px"
          width="100%"
          style={{
            border: 0,
            margin: 0,
            display: "block",
            borderRadius: "10px",
            maxWidth: "600px",
            minWidth: "300px",
          }}
          title="ifr-uniswap"
        ></iframe>
        <Fade delay={100} triggerOnce={animationDone} className="msm:hidden md:block">
          {" "}
          <img
            src="/images/herobg.webp"
            alt=""
            className="object-contain max-w-[100%] flex transform -scale-x-100"
          />{" "}
        </Fade>
      </div> */}
    </div>
  );
};

export default HowToBuy;
