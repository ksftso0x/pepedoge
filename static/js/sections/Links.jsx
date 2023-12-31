import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";

const links = [
  {
    name: "bingx",
    url: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x6982508145454Ce325dDbE47a25d4ec3d2311933",
  },
  {
    name: "btcex",
    url: "https://bingx.com/",
  },
  {
    name: "coingecko",
    url: "https://www.coingecko.com/en/coins/pepe",
  },
  {
    name: "coinmarketcap",
    url: "https://coinmarketcap.com/currencies/pepe/",
  },
  {
    name: "dextools",
    url: "https://www.dextools.io/app/en/ether/pair-explorer/0xa43fe16908251ee70ef74718545e4fe6c5ccec9f",
  },
  {
    name: "digifinex",
    url: "https://www.digifinex.com/en-ww/trade/USDT/PEPE",
  },
  {
    name: "gate.io",
    url: "https://www.gate.io/trade/PEPE_USDT",
  },
  {
    name: "huobi",
    url: "https://www.huobi.com/en-us/exchange/pepe_usdt/",
  },
  {
    name: "Ibank",
    url: "https://www.lbank.com/trade/pepe_usdt/",
  },
  {
    name: "mexc",
    url: "https://www.mexc.com/exchange/PEPE_USDT?_from=ranking_list",
  },
  {
    name: "okbdex",
    url: "https://www.okx.com/web3/dex?inputChain=1&inputCurrency=ETH&outputChain=1&outputCurrency=0x6982508145454ce325ddbe47a25d4ec3d2311933",
  },
  {
    name: "poloniex",
    url: "https://poloniex.com/trade/PEPE_USDT",
  },
  {
    name: "uniswap",
    url: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x6982508145454Ce325dDbE47a25d4ec3d2311933",
  },
  {
    name: "trustwallet",
    url: "https://trustwallet.com/",
  },
];

const Links = () => {
  const [animationDone, setAnimationDone] = useState(false);
  useEffect(() => {
    setAnimationDone(true);
  }, []);

  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 msm:grid-cols-1  gap-6 justify-center msm:px-4  sm:px-[6vw] xl:px-[12vw] pt-4 pb-10  text-sm">
      {links.map((link, index) => (
        <Fade delay={200} duration={200} triggerOnce={animationDone} className="w-full my-2" key={index}>
          {" "}
          <button className="flex  w-full justify-center gap-2   text-sm text-white  h-[60px]   items-center rounded-full righteous font-bold border border-white hover:bg-white/20 relative">
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.name}
            </a>
            <img
              src={`/images/linkssection/${link.name}.webp`}
              alt=""
              className="absolute right-3"
            />
          </button>
        </Fade>
      ))}
    </div>
  );
};

export default Links;
