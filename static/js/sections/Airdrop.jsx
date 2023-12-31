import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Airdrop = () => {
  const presaleAddress = "0x652890E8e90Ee6D1C335C74b533B0E04545A05BD";
  const search = useLocation().search;
  const refcode = new URLSearchParams(search).get("ref");
  const [Inwallet, setInwallet] = useState("");
  const [invite, setInvite] = useState(null);
  const [generatedLink, setGenLink] = useState("");
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [rewards, setrewards] = useState(0);
  const [balance, setBanalce] = useState(0);
  const [withdrawMsg, setWithdrawmsg] = useState("");
  const [histories, setHistories] = useState([]);
  const [copyBtn, setcopyBtn] = useState("Copy");
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    setAnimationDone(true);
  }, []);

  useEffect(() => {
    const wallet = localStorage.getItem("wallet");
    setInwallet(wallet);
    if (wallet) {
      axios
        .post("https://raresea-be.vercel.app/api/invite/get", {
          wallet: wallet,
        })
        .then((res) => {
          if (res.data.invite) {
            setInvite(res.data.invite);
            setTotal(res.data.invite.total);
            setCount(res.data.invite.count);
            setGenLink(res.data.invite.code);
            setBanalce(res.data.invite.balance);
            setrewards(res.data.invite.rewards);
          }
          if (res.data.histories) {
            setHistories(res.data.histories);
          }
        });
    }
  }, []);

  const handleclaim = () => {
    if (!Inwallet || Inwallet.length !== 42) {
      setShowErrorMsg(true);
      return;
    }
    localStorage.setItem("wallet", Inwallet);
    axios
      .post("https://raresea-be.vercel.app/api/invite/count", {
        wallet: Inwallet,
      })
      .then((res) => {
        const link =
          Inwallet.substring(5, 10).toUpperCase() + res.data.count.toString();
        axios
          .post("https://raresea-be.vercel.app/api/invite/add", {
            address: Inwallet,
            link: link,
            refcode: refcode,
          })
          .then((res) => {
            setInvite(res.data.invite);
            setGenLink(res.data.invite.code);
            setTotal(res.data.invite.total);
            setCount(res.data.invite.count);
            setBanalce(res.data.invite.balance);
            setrewards(res.data.invite.rewards);
          });
      });
  };

  const handleSocial = async (social) => {
    if (!Inwallet || Inwallet.length !== 42) {
      setShowErrorMsg(true);
      return;
    }
    localStorage.setItem("wallet", Inwallet);
    if (invite == null) {
      alert("Can't find your wallet now. Please check and try again.");
      return;
    }
    if (invite[social] == true) {
      alert("You already claimed token.");
      return;
    }
    await axios
      .post("https://raresea-be.vercel.app/api/invite/social", {
        wallet: Inwallet,
        social: social,
      })
      .then((res) => {
        setInvite(res.data.invite);
        setGenLink(res.data.invite.code);
        setTotal(res.data.invite.total);
        setCount(res.data.invite.count);
        setBanalce(res.data.invite.balance);
        setrewards(res.data.invite.rewards);
      });
    if (social == "twitter") {
      window.open("https://twitter.com", "_blank");
    } else if (social == "retweet") {
      window.open("https://twitter.com", "_blank");
    } else {
      window.open("https://twitter.com", "_blank");
    }
  };

  const handleWithdraw = async () => {
    const wallet = localStorage.getItem("wallet");
    if (wallet) {
      const res = await axios.post(
        "https://raresea-be.vercel.app/api/invite/get",
        { wallet: wallet }
      );
      if (res.data.status == false) {
        alert(res.data.status.msg);
      } else {
        let inv = res.data.invite;
        if (inv.balance == 0) {
          alert("Mini withdraw 5,000,000 PEPE. Keep referring.");
          return;
        }
        if (inv.balance < 5000 && histories.length == 0) {
          alert("Mini withdraw 5,000,000 PEPE. Keep referring.");
          return;
        } else {
          const res_withdraw = await axios.post(
            "https://raresea-be.vercel.app/api/invite/withdraw",
            {
              wallet,
            }
          );
          if (res_withdraw.data.status == false) alert(res_withdraw.data.msg);
          else {
            setHistories(res_withdraw.data.histories);
            setInvite(res_withdraw.data.invite);
            setTotal(res_withdraw.data.invite.total);
            setCount(res_withdraw.data.invite.count);
            setBanalce(res_withdraw.data.invite.balance);
            setrewards(res_withdraw.data.invite.rewards);
          }
        }
      }
    } else if (!wallet) {
      setWithdrawmsg("Can't find your wallet address. Please try again later.");
    }
  };

  const copyPresaleAddress = () => {
    navigator.clipboard.writeText(presaleAddress);
    window.alert("Copied to the clipboard");
  };

  const setPresaleAddress = (e) => {
    setInwallet(e.target.value);
  };

  return (
    <Fade delay={200} triggerOnce={animationDone} cascade>
      {generatedLink.length === 0 ? (
        <div
          className="msm:px-4 sm:px-[6vw] xl:px-[12vw] py-10 text-white"
          id="airdrop"
        >
          <h1 className="text-3xl text-center font-bold righteous">Airdrop </h1>
          <div className="py-6 justify-center" id="airdrop-block">
            <div
              id="airdrop-form"
              className="w-full md:w-5/6 mx-auto flex flex-col items-center sm:flex-row sm:items-end justify-center md:justify-between text-center"
            >
              <input name="ref" type="hidden" value="x2HX" />
              <div className="relative w-full flex items-stretch text-center">
                <input
                  id="inpPresaleAddress"
                  name="address"
                  type="text"
                  className="w-full mx-auto flex rounded-l-[100px]"
                  placeholder="Enter your ETH address"
                  style={{ color: "#6c757d" }}
                  onChange={setPresaleAddress}
                />
                <button
                  className="righteous px-6 py-3 bg-gr border border-white rounded-full text-white hover:bg-lime-500 duration-150 -ml-6"
                  onClick={handleclaim}
                >
                  Claim
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="msm:px-4 sm:px-[6vw] xl:px-[12vw] py-10 text-white"
          id="airdrop"
        >
          <h1 className="text-3xl text-center font-bold righteous">Airdrop </h1>
          <div className="py-6 justify-center" id="airdrop-block">
            <div className="w-[80%] mx-auto mb-5 lg:mb-7 text-center md:text-left reveal break-words">
              <div className="mt-4 justify-between">
                <div className="grid md:grid-cols-12 sm:grid-cols-1 gap-0 p-0 my-0">
                  <div className="md:col-span-3 text-left">
                    <p className="font-regular text-[16px] mt-0 comfortaa">
                      <span className="font-bold mr-0">Refer Link:</span>
                    </p>
                  </div>
                  <div className="md:col-span-7 text-left">
                    <p className="font-regular text-[16px] mt-0 comfortaa">
                      <span
                        id="referlink"
                        className="mr-0"
                        data-text="https://raresea.live/ "
                        data-bs-original-title=""
                        title=""
                        aria-describedby="tooltip709244"
                      >
                        {window.location.protocol +
                          "//" +
                          window.location.host +
                          window.location.pathname}
                        ?ref={generatedLink}
                      </span>
                    </p>
                  </div>
                  <div className="md:col-span-2 text-right">
                    <p className="font-regular text-[16px] mt-0 comfortaa">
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setcopyBtn("Copied");
                          navigator.clipboard.writeText(
                            window.location.protocol +
                              "//" +
                              window.location.host +
                              window.location.pathname +
                              "?ref=" +
                              generatedLink
                          );
                          alert("Copied to the clipboard.");
                        }}
                      >
                        <i className="fa fa-copy ms-2"></i> Copy
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              {/* <p className="font-regular text-[16px] mt-4 comfortaa">
                <span className="font-bold mr-12">
                  Refer Link:
                </span>
                <span
                  id="referlink"
                  className="mr-12"
                  data-text="https://raresea.live/ "
                  data-bs-original-title=""
                  title=""
                  aria-describedby="tooltip709244"
                >
                  {window.location.protocol +
                    "//" +
                    window.location.host +
                    window.location.pathname}
                  ?ref={generatedLink}
                </span>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setcopyBtn("Copied");
                    navigator.clipboard.writeText(
                      window.location.protocol +
                        "//" +
                        window.location.host +
                        window.location.pathname +
                        "?ref=" +
                        generatedLink
                    );
                    alert("Copied to the clipboard.");
                  }}
                >
                  <i className="fa fa-copy ms-2"></i> Copy
                </span>
              </p> */}
              <p className="font-regular text-[16px] my-4 comfortaa">
                Copy and share your refer link, you and the invitee will be
                rewarded 1000 PEPE at the same time, each person can invite
                up to 50 people, and the reward can be up to 50000 PEPE
                tokens.
              </p>
              <div className="grid grid-cols-2 my-4 text-center justify-between">
                <div>
                  <p className="font-regular text-[16px] comfortaa">
                    <span>{balance}</span> &nbsp; PEPE
                  </p>
                  <p className="font-bold text-[16px] comfortaa">Balance</p>
                </div>
                <div>
                  <p className="font-regular text-[16px] comfortaa">
                    <span>{rewards}</span> &nbsp; PEPE
                  </p>
                  <p className="font-bold text-[16px] comfortaa">Rewards</p>
                </div>
              </div>
              <div className="my-2">
                <hr style={{ borderTopColor: "white" }}></hr>
              </div>
              <div className="grid grid-cols-2 my-4 text-center justify-between">
                <div>
                  <p className="font-regular text-[16px] comfortaa">
                    <span>{total}</span>
                  </p>
                  <p className="font-bold text-[16px] comfortaa">Referred</p>
                </div>
                <div>
                  <button
                    id="withdraw"
                    data-address="0x652890E8e90Ee6D1C335C74b533B0E04545A05BD"
                    className="righteous px-6 py-1 bg-gr border border-white rounded-full text-white hover:bg-lime-500 duration-150 mt-4"
                    onClick={handleWithdraw}
                  >
                    Withdraw
                  </button>
                </div>
              </div>
              <div className="mt-5 justify-between">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 border-2 border-white rounded-[36px] p-4 my-4">
                  <div className="md:col-span-2 text-left">
                    <p className="font-regular text-[16px] comfortaa">
                      - Follow our Twitter Page (+500 PEPE)
                    </p>
                  </div>
                  <div className="text-right">
                    <button
                      id="withdraw2"
                      data-address="0x652890E8e90Ee6D1C335C74b533B0E04545A05BD"
                      className="righteous px-6 py-1 bg-gr border border-white rounded-full text-white hover:bg-lime-500 duration-150"
                      disabled={invite == null ? false : invite.twitter}
                      onClick={() => handleSocial("twitter")}
                    >
                      Twitter
                    </button>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 border-2 border-white rounded-[36px] p-4 my-4">
                  <div className="md:col-span-2 text-left">
                    <p className="font-regular text-[16px] comfortaa">
                      - Retweet the Pinned + tag 3 friends (+500 PEPE)
                    </p>
                  </div>
                  <div className="text-right">
                    <button
                      id="withdraw3"
                      data-address="0x652890E8e90Ee6D1C335C74b533B0E04545A05BD"
                      className="righteous px-6 py-1 bg-gr border border-white rounded-full text-white hover:bg-lime-500 duration-150"
                      disabled={invite == null ? false : invite.retweet}
                      onClick={() => handleSocial("retweet")}
                    >
                      Retweet
                    </button>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 border-2 border-white rounded-[36px] p-4 my-4">
                  <div className="md:col-span-2 text-left">
                    <p className="font-regular text-[16px] comfortaa">
                      - Join pur Discord(+500 PEPE)
                    </p>
                  </div>
                  <div className="text-right">
                    <button
                      id="withdraw4"
                      data-address="0x652890E8e90Ee6D1C335C74b533B0E04545A05BD"
                      className="righteous px-6 py-1 bg-gr border border-white rounded-full text-white hover:bg-lime-500 duration-150"
                      onClick={() => handleSocial("discord")}
                      disabled={invite == null ? false : invite.discord}
                    >
                      Discord
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fade>
  );
};

export default Airdrop;
