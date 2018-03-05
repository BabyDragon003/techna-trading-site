import React, { useState, useRef, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { sBitIcon } from "../../assets/Data"

import "./style.css"

//images
import refreshLogo from "../../assets/Images/image 124.png.svg"
import ETHI from "../../assets/Images/E4bc3598cd3721b16fa31a60ab91c0b04.png";
import USDT from "../../assets/Images/USDT icon.png"
import USDC from "../../assets/Images/USDC.png"
import BUSD from "../../assets/Images/BUSD.png"
import MATIC from "../../assets/Images/MATIC.png"
import BNB from "../../assets/Images/BNB.png"

//component
import NavBar from '../../Components/NavBar'
import LineChart from "../../Components/LineChart"
import CandlestickChart from "../../Components/TradingChart"

import { jap_data } from '../../Components/constant';

import axios from 'axios';

export default function Spot() {
  const ref = useRef();
  const [sideTab, setSideTab] = useState(1)
  const [graphBtn, setGraphBtn] = useState(true)
  const [mpusd, setMpusd] = useState(false)
  const [mrusd, setMrusd] = useState(false)
  const [lpusd, setLpusd] = useState(false)
  const [lyusd, setLyusd] = useState(false)
  const [orderDrop, setOderDrop] = useState(false)

  const [smeusd, setSmeusd] = useState(false)
  const [smeusdVal, setSmeusdVal] = useState("")

  const [leusd, setLeusd] = useState(false)
  const [leusdVal, setLeusdVal] = useState("")


  const [stopMDrop, setStopMDrop] = useState(false)
  const [stopMDropVal, setStopMDropVal] = useState("Stop Market")

  const [slExp, setSlExp] = useState(false)
  const [slExpVal, setSlExpVal] = useState("")

  const [usdRedio, setUsdRedio] = useState(1)

  const [input_data, setInputData] = useState([]);
  const [labels, setLabels] = useState([]);

  const getPriceData = async () => {
    const price = await axios.get('http://135.181.123.26:7000/getPrice');
    const data = price.data.data;
    const prices = [];

    setLabels([]);
    let labs = [];
    for (let i = 0; i < data.length; i++) {
        prices.push(data[i].quote.USD.price);
        labs.push(data[i].symbol);
    }
    setLabels(labs);
    setInputData(prices);
  }

  useEffect(() => {
    console.log('data loading...');
    getPriceData();

    const interval = setInterval(async () => {
      try {
        getPriceData();

      } catch (ex) {
        console.log(ex);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);



  const tableRow = ({ Time, Pay, Receive, Amount, Type, TriggerPrice, Price, Expiry, Status }) => {
    return (
      <Box className="tableRow">
        <Box className="tableRowItem">
          <Typography>{Time}</Typography>
        </Box>
        <Box className="tableRowItem">
          <Typography>{Pay}</Typography>
        </Box>
        <Box className="tableRowItem">
          <Typography>{Receive}</Typography>
        </Box>
        <Box className="tableRowItem">
          <Typography>{Amount}</Typography>
        </Box>
        <Box className="tableRowItem">
          <Typography>{Type}</Typography>
        </Box>
        <Box className="tableRowItem">
          <Typography>{TriggerPrice}</Typography>
        </Box>
        <Box className="tableRowItem">
          <Typography>{Price}</Typography>
        </Box>
        <Box className="tableRowItem">
          <Typography>{Expiry}</Typography>
        </Box>
        <Box className="tableRowItem">
          <Typography>{Status}</Typography>
        </Box>
      </Box>
    )
  }

  useEffect(() => {
    const handleClickOutside = (e) => {

      // spotSM
      if (e?.target?.id !== "spotSM") {
        setStopMDrop(false);
      } else {
        if (stopMDrop) {
          setStopMDrop(false);
          return;
        } else {
          return;
        }
      }


      if (e?.target?.id !== "mpusd") {
        setMpusd(false);
      } else {
        if (mpusd) {
          setMpusd(false);
          return;
        } else {
          return;
        }
      }


      if (e?.target?.id !== "mrusd") {
        setMrusd(false);
      } else {
        if (mrusd) {
          setMrusd(false);
          return;
        } else {
          return;
        }
      }


      if (e?.target?.id !== "lpusd") {
        setLpusd(false);
      } else {
        if (lpusd) {
          setLpusd(false);
          return;
        } else {
          return;
        }
      }


      if (e?.target?.id !== "lyusd") {
        setLyusd(false);
      } else {
        if (lpusd) {
          setLyusd(false);
          return;
        } else {
          return;
        }
      }

      if (e?.target?.id !== "leusd") {
        setLeusd(false);
      } else {
        if (lpusd) {
          setLeusd(false);
          return;
        } else {
          return;
        }
      }

      if (e?.target?.id !== "smeusd") {
        setSmeusd(false);
      } else {
        if (smeusd) {
          setSmeusd(false);
          return;
        } else {
          return;
        }
      }

      if (e?.target?.id !== "orderDrop") {
        setOderDrop(false);
      } else {
        if (orderDrop) {
          setOderDrop(false);
          return;
        } else {
          return;
        }
      }

      if (e?.target?.id !== "slExp") {
        setSlExp(false);
      } else {
        if (slExp) {
          setSlExp(false);
          return;
        } else {
          return;
        }
      }


    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [])


  // chart
  const chart_data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: input_data,
        borderColor: "rgba(174, 117, 243, 0.70)",
        backgroundColor: "rgba(174, 117, 243, 0.70)",
      },
    ],
  };

  // Japanese
  const chartData = {
    series: [
      {
        data: jap_data,
      },
    ],
    options: {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: "CandleStick Chart",
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
  };

  return (
    <>
      <NavBar />
      <Box className="spotContainer">

        <Box className="spotFBox">
          <Box className="spotSideMenu">
            {/* side menu */}
            <Box className="spotNavMenu">
              <Box onClick={() => setSideTab(1)} sx={{ background: sideTab === 1 ? "#41f8f8" : "#18141c" }} className="sideBoxMenu market">
                <Typography>Market</Typography>
              </Box>
              <Box onClick={() => setSideTab(2)} sx={{ background: sideTab === 2 ? "#41f8f8" : "#18141c" }} className="sideBoxMenu limit">
                <Typography>Limit</Typography>
              </Box>
              <Box onClick={() => {
                setSideTab(3)
                setStopMDrop(!stopMDrop)
              }}
                id="spotSM"
                ref={ref}
                sx={{ background: sideTab === 3 ? "#41f8f8" : "#18141c" }} className="sideBoxMenu SMarket">
                <Typography id="spotSM" mr={1}>{stopMDropVal}</Typography>
                <KeyboardArrowDownIcon id="spotSM" sx={{ color: "#fff" }} />
                <Box sx={{ height: stopMDrop ? "auto" : "0px" }} id="spotSM" className="dropMenu">
                  <Box onClick={(e) => setStopMDropVal(e.target.innerText)} id="spotSM" className="dropMenuItem">
                    <Typography id="spotSM">Stop Market</Typography>
                  </Box>
                  <Box onClick={(e) => setStopMDropVal(e.target.innerText)} id="spotSM" className="dropMenuItem">
                    <Typography id="spotSM">Stop limit</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* tabe  marketSection */}
            <Box sx={{ display: sideTab === 1 ? "flex" : "none" }} className="tabeinnerSection marketSection">
              <Typography className='sideMenuGText'>Pay</Typography>

              <Box className="usdTHeader">
                <Box onClick={() => setMpusd(!mpusd)} id="mpusd" className="usdSelectorBox">
                  {sBitIcon}
                  <Typography id="mpusd">USDT</Typography>
                  {mpusd ?
                    <KeyboardArrowUpIcon id="mpusd" className='dwonArrow' sx={{ color: "#fff" }} /> :
                    <KeyboardArrowDownIcon id="mpusd" className='dwonArrow' sx={{ color: "#fff" }} />
                  }
                  <Box id="mpusd" sx={{ height: mpusd ? "auto" : "0px" }} className="dropMenu mpusd">
                    <Box id="mpusd" className="dropMenuItem usdItem">
                      <img id="mpusd" src={ETHI} />
                      <Typography id="mpusd">ETH</Typography>
                    </Box>
                    <Box id="mpusd" className="dropMenuItem usdItem">
                      <img id="mpusd" src={USDT} />
                      <Typography id="mpusd">USDT</Typography>
                    </Box>
                    <Box id="mpusd" className="dropMenuItem usdItem">
                      <img id="mpusd" src={USDC} />
                      <Typography id="mpusd">USDC</Typography>
                    </Box>
                    <Box id="mpusd" className="dropMenuItem usdItem">
                      <img id="mpusd" src={BUSD} />
                      <Typography id="mpusd">BUSD</Typography>
                    </Box>
                    <Box id="mpusd" className="dropMenuItem usdItem">
                      <img id="mpusd" src={MATIC} />
                      <Typography id="mpusd">MATIC</Typography>
                    </Box>
                    <Box id="mpusd" className="dropMenuItem usdItem">
                      <img id="mpusd" src={BNB} />
                      <Typography id="mpusd">BNB</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box className="usdTBox">
                  <Box><input className='inputFiled' placeholder='25' /></Box>
                  <Box><input className='inputFiled' placeholder='155' /></Box>
                </Box>
              </Box>

              <Box className="usdTHeaderValue">
                <Box onClick={() => setUsdRedio(1)} className={usdRedio === 1 ? "usdTHeaderValueItem ActiveUsdBtn" : "usdTHeaderValueItem"}>
                  <Typography>25</Typography>
                </Box>
                <Box onClick={() => setUsdRedio(2)} className={usdRedio === 2 ? "usdTHeaderValueItem ActiveUsdBtn" : "usdTHeaderValueItem"}>
                  <Typography>50</Typography>
                </Box>
                <Box onClick={() => setUsdRedio(3)} className={usdRedio === 3 ? "usdTHeaderValueItem ActiveUsdBtn" : "usdTHeaderValueItem"}>
                  <Typography>75</Typography>
                </Box>
                <Box onClick={() => setUsdRedio(4)} className={usdRedio === 4 ? "usdTHeaderValueItem ActiveUsdBtn" : "usdTHeaderValueItem"}>
                  <Typography>MAX</Typography>
                </Box>
                <Box onClick={() => setUsdRedio(5)} className={usdRedio === 5 ? "usdTHeaderValueItem ActiveUsdBtn" : "usdTHeaderValueItem"}>
                  <Typography>Custom</Typography>
                </Box>
              </Box>

              <Box className="placeholderRefres_box">
                <img src={refreshLogo} />
              </Box>
              <Typography className='sideMenuGText'>Receive</Typography>

              <Box className="usdTHeader">
                <Box id="mrusd" className="usdSelectorBox" onClick={() => setMrusd(!mrusd)}>
                  {sBitIcon}
                  <Typography id="mrusd">USDT</Typography>
                  {mrusd ?
                    <KeyboardArrowUpIcon id="mpusd" className='dwonArrow' sx={{ color: "#fff" }} /> :
                    <KeyboardArrowDownIcon id="mpusd" className='dwonArrow' sx={{ color: "#fff" }} />
                  }
                  <Box id="mrusd" sx={{ height: mrusd ? "auto" : "0px" }} className="dropMenu mpusd">
                    <Box id="mrusd" className="dropMenuItem usdItem">
                      <img id="mrusd" src={ETHI} />
                      <Typography id="mrusd">ETH</Typography>
                    </Box>
                    <Box id="mrusd" className="dropMenuItem usdItem">
                      <img id="mrusd" src={USDT} />
                      <Typography id="mrusd">USDT</Typography>
                    </Box>
                    <Box id="mrusd" className="dropMenuItem usdItem">
                      <img id="mrusd" src={USDC} />
                      <Typography id="mrusd">USDC</Typography>
                    </Box>
                    <Box id="mrusd" className="dropMenuItem usdItem">
                      <img id="mrusd" src={BUSD} />
                      <Typography id="mrusd">BUSD</Typography>
                    </Box>
                    <Box id="mrusd" className="dropMenuItem usdItem">
                      <img id="mrusd" src={MATIC} />
                      <Typography id="mrusd">MATIC</Typography>
                    </Box>
                    <Box id="mrusd" className="dropMenuItem usdItem">
                      <img id="mrusd" src={BNB} />
                      <Typography id="mrusd">BNB</Typography>
                    </Box>
                  </Box>

                </Box>
                <Box className="usdTBox RusdTBox">
                  <input className='inputFiled' placeholder='27.8377' />
                </Box>
              </Box>
              <Box className="buyBtn">
                <Typography>Buy</Typography>
              </Box>
            </Box>




















            {/*Table  LimitSection */}
            <Box sx={{ display: sideTab === 2 ? "flex" : "none" }} className="tabeinnerSection">
              <Box className="tabsectionLabel">
                <Typography className='sideMenuGText'>Paid token</Typography>
                <Typography className='sideMenuGText sideMenuGTextL'>Paid token</Typography>
              </Box>

              <Box className="usdTHeader">
                <Box id="lpusd" onClick={() => setLpusd(!lpusd)} className="usdSelectorBox">
                  {sBitIcon}
                  <Typography id="lpusd">MATIC</Typography>
                  {lpusd ?
                    <KeyboardArrowUpIcon id="lpusd" className='dwonArrow' sx={{ color: "#fff" }} /> :
                    <KeyboardArrowDownIcon id="lpusd" className='dwonArrow' sx={{ color: "#fff" }} />
                  }
                  <Box id="lpusd" sx={{ height: lpusd ? "auto" : "0px" }} className="dropMenu mpusd">
                    <Box id="lpusd" className="dropMenuItem usdItem">
                      <img id="lpusd" src={ETHI} />
                      <Typography id="lpusd">ETH</Typography>
                    </Box>
                    <Box id="lpusd" className="dropMenuItem usdItem">
                      <img id="lpusd" src={USDT} />
                      <Typography id="lpusd">USDT</Typography>
                    </Box>
                    <Box id="lpusd" className="dropMenuItem usdItem">
                      <img id="lpusd" src={USDC} />
                      <Typography id="lpusd">USDC</Typography>
                    </Box>
                    <Box id="lpusd" className="dropMenuItem usdItem">
                      <img id="lpusd" src={BUSD} />
                      <Typography id="lpusd">BUSD</Typography>
                    </Box>
                    <Box id="lpusd" className="dropMenuItem usdItem">
                      <img id="lpusd" src={MATIC} />
                      <Typography id="lpusd">MATIC</Typography>
                    </Box>
                    <Box id="lpusd" className="dropMenuItem usdItem">
                      <img id="lpusd" src={BNB} />
                      <Typography id="lpusd">BNB</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box className="usdTBox">
                  <Box><input className='inputFiled' placeholder='1.45' /></Box>
                  <Box><input className='inputFiled' placeholder='25$' /></Box>
                </Box>
              </Box>

              <Box className="usdTHeaderValue">
                <Box onClick={() => setUsdRedio(1)} className={usdRedio === 1 ? "usdTHeaderValueItem ActiveUsdBtn" : "usdTHeaderValueItem"}>
                  <Typography>25</Typography>
                </Box>
                <Box onClick={() => setUsdRedio(2)} className={usdRedio === 2 ? "usdTHeaderValueItem ActiveUsdBtn" : "usdTHeaderValueItem"}>
                  <Typography>50</Typography>
                </Box>
                <Box onClick={() => setUsdRedio(3)} className={usdRedio === 3 ? "usdTHeaderValueItem ActiveUsdBtn" : "usdTHeaderValueItem"}>
                  <Typography>75</Typography>
                </Box>
                <Box onClick={() => setUsdRedio(4)} className={usdRedio === 4 ? "usdTHeaderValueItem ActiveUsdBtn" : "usdTHeaderValueItem"}>
                  <Typography>MAX</Typography>
                </Box>
                <Box onClick={() => setUsdRedio(5)} className={usdRedio === 5 ? "usdTHeaderValueItem ActiveUsdBtn" : "usdTHeaderValueItem"}>
                  <Typography>Custom</Typography>
                </Box>
              </Box>

              <Box className="tabsectionLabel">
                <Typography className='sideMenuGText'>Expiry</Typography>
                <Typography className='sideMenuGText sideMenuGTextL'>Price limit</Typography>
              </Box>
              <Box className="usdTHeader">
                <Box className="usdSelectorBox" id="leusd" onClick={() => setLeusd(!leusd)}>
                  <Typography id="leusd" sx={{ width: "100%" }}>{leusdVal || "1 hour"}</Typography>
                  {leusd ?
                    <KeyboardArrowUpIcon id="leusd" className='dwonArrow' sx={{ color: "#fff" }} /> :
                    <KeyboardArrowDownIcon id="leusd" className='dwonArrow' sx={{ color: "#fff" }} />
                  }
                  <Box id="leusd" sx={{ height: leusd ? "auto" : "0px" }} className="dropMenu mpusd">
                    <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                      <Typography id="leusd">1 hour</Typography>
                    </Box>
                    <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                      <Typography id="leusd">2 hour</Typography>
                    </Box>
                    <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                      <Typography id="leusd">3 hour</Typography>
                    </Box>
                    <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                      <Typography id="leusd">4 hour</Typography>
                    </Box>
                    <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                      <Typography id="leusd">5 hour</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box className="usdTBox">
                  <Box><input className='inputFiled' placeholder='1.45' /></Box>
                  <Box><input className='inputFiled' placeholder='25$' /></Box>
                </Box>
              </Box>

              <Box className="placeholderRefres_box">
                <img src={refreshLogo} />
              </Box>
              <Typography className='sideMenuGText'>You Get</Typography>

              <Box className="usdTHeader">
                <Box id="lyusd" onClick={() => setLyusd(!lyusd)} className="usdSelectorBox">
                  {sBitIcon}
                  <Typography id="lyusd">BTC</Typography>
                  {lyusd ?
                    <KeyboardArrowUpIcon id="lyusd" className='dwonArrow' sx={{ color: "#fff" }} /> :
                    <KeyboardArrowDownIcon id="lyusd" className='dwonArrow' sx={{ color: "#fff" }} />
                  }
                  <Box id="lyusd" sx={{ height: lyusd ? "auto" : "0px" }} className="dropMenu mpusd">
                    <Box id="lyusd" className="dropMenuItem usdItem">
                      <img id="lyusd" src={ETHI} />
                      <Typography id="lyusd">ETH</Typography>
                    </Box>
                    <Box id="lyusd" className="dropMenuItem usdItem">
                      <img id="lyusd" src={USDT} />
                      <Typography id="lyusd">USDT</Typography>
                    </Box>
                    <Box id="lyusd" className="dropMenuItem usdItem">
                      <img id="lyusd" src={USDC} />
                      <Typography id="lyusd">USDC</Typography>
                    </Box>
                    <Box id="lyusd" className="dropMenuItem usdItem">
                      <img id="lyusd" src={BUSD} />
                      <Typography id="lyusd">BUSD</Typography>
                    </Box>
                    <Box id="lyusd" className="dropMenuItem usdItem">
                      <img id="lyusd" src={MATIC} />
                      <Typography id="lyusd">MATIC</Typography>
                    </Box>
                    <Box id="lyusd" className="dropMenuItem usdItem">
                      <img id="lyusd" src={BNB} />
                      <Typography id="lyusd">BNB</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box className="usdTBox RusdTBox">
                  <input className='inputFiled' placeholder='27.8377' />
                </Box>
              </Box>
              <Box className="buyBtn">
                <Typography>Buy</Typography>
              </Box>
            </Box>




            {/*Table  StopMarketSection */}
            {
              stopMDropVal === "Stop Market" ?
                <>
                  <Box sx={{ display: sideTab === 3 ? "flex" : "none" }} className="tabeinnerSection">
                    <Box className="tabsectionLabel">
                      <Typography className='sideMenuGText'>Paid token</Typography>
                      <Typography className='sideMenuGText sideMenuGTextL SMsideMenuGTextL'>Amount</Typography>
                    </Box>

                    <Box className="usdTHeader">
                      <Box id="lpusd" onClick={() => setLpusd(!lpusd)} className="usdSelectorBox">
                        {sBitIcon}
                        <Typography id="lpusd">MATIC</Typography>
                        {lpusd ?
                          <KeyboardArrowUpIcon id="lpusd" className='dwonArrow' sx={{ color: "#fff" }} /> :
                          <KeyboardArrowDownIcon id="lpusd" className='dwonArrow' sx={{ color: "#fff" }} />
                        }
                        <Box id="lpusd" sx={{ height: lpusd ? "auto" : "0px" }} className="dropMenu mpusd">
                          <Box id="lpusd" className="dropMenuItem usdItem">
                            <img id="lpusd" src={ETHI} />
                            <Typography id="lpusd">ETH</Typography>
                          </Box>
                          <Box id="lpusd" className="dropMenuItem usdItem">
                            <img id="lpusd" src={USDT} />
                            <Typography id="lpusd">USDT</Typography>
                          </Box>
                          <Box id="lpusd" className="dropMenuItem usdItem">
                            <img id="lpusd" src={USDC} />
                            <Typography id="lpusd">USDC</Typography>
                          </Box>
                          <Box id="lpusd" className="dropMenuItem usdItem">
                            <img id="lpusd" src={BUSD} />
                            <Typography id="lpusd">BUSD</Typography>
                          </Box>
                          <Box id="lpusd" className="dropMenuItem usdItem">
                            <img id="lpusd" src={MATIC} />
                            <Typography id="lpusd">MATIC</Typography>
                          </Box>
                          <Box id="lpusd" className="dropMenuItem usdItem">
                            <img id="lpusd" src={BNB} />
                            <Typography id="lpusd">BNB</Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box className="usdTBox">
                        <Box><input className='inputFiled' placeholder='1.45' /></Box>
                        <Box><input className='inputFiled' placeholder='25$' /></Box>
                      </Box>
                    </Box>

                    <Box className="usdTHeaderValue">
                      <Box onClick={() => setUsdRedio(1)} className={usdRedio === 1 ? "usdTHeaderValueItem ActiveUsdBtn" : "usdTHeaderValueItem"}>
                        <Typography>25</Typography>
                      </Box>
                      <Box onClick={() => setUsdRedio(2)} className={usdRedio === 2 ? "usdTHeaderValueItem ActiveUsdBtn" : "usdTHeaderValueItem"}>
                        <Typography>50</Typography>
                      </Box>
                      <Box onClick={() => setUsdRedio(3)} className={usdRedio === 3 ? "usdTHeaderValueItem ActiveUsdBtn" : "usdTHeaderValueItem"}>
                        <Typography>75</Typography>
                      </Box>
                      <Box onClick={() => setUsdRedio(4)} className={usdRedio === 4 ? "usdTHeaderValueItem ActiveUsdBtn" : "usdTHeaderValueItem"}>
                        <Typography>MAX</Typography>
                      </Box>
                      <Box onClick={() => setUsdRedio(5)} className={usdRedio === 5 ? "usdTHeaderValueItem ActiveUsdBtn" : "usdTHeaderValueItem"}>
                        <Typography>Custom</Typography>
                      </Box>
                    </Box>


                    <Box className="tabsectionLabel">
                      <Typography className='sideMenuGText'>Trigger price</Typography>
                      <Typography className='sideMenuGText sideMenuGTextL SMsideMenuGTextL'>Expiry</Typography>
                    </Box>
                    <Box className="usdTHeader">
                      <Box className="usdSelectorBox" id="leusd" onClick={() => setLeusd(!leusd)}>
                        <Typography id="leusd" sx={{ width: "100%" }}>{leusdVal || "10,000"}</Typography>
                        {leusd ?
                          <KeyboardArrowUpIcon id="leusd" className='dwonArrow' sx={{ color: "#fff" }} /> :
                          <KeyboardArrowDownIcon id="leusd" className='dwonArrow' sx={{ color: "#fff" }} />
                        }
                        <Box id="leusd" sx={{ height: leusd ? "auto" : "0px" }} className="dropMenu mpusd">
                          <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                            <Typography id="leusd">10,000</Typography>
                          </Box>
                          <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                            <Typography id="leusd">15,000</Typography>
                          </Box>
                          <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                            <Typography id="leusd">20,000</Typography>
                          </Box>
                          <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                            <Typography id="leusd">25,000</Typography>
                          </Box>
                          <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                            <Typography id="leusd">30,000</Typography>
                          </Box>
                          <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                            <Typography id="leusd">35,000</Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box id="smeusd" sx={{ padding: "0 15px" }} onClick={() => setSmeusd(!smeusd)} className="usdTBox RusdTBox RusdHourTBox">
                        <Typography id="smeusd">{smeusdVal || "1 hour"}</Typography>
                        {smeusd ?
                          <KeyboardArrowUpIcon iid="smeusd" className='dwonArrow' sx={{ color: "#fff" }} /> :
                          <KeyboardArrowDownIcon id="smeusd" className='dwonArrow' sx={{ color: "#fff" }} />
                        }
                        <Box id="smeusd" sx={{ height: smeusd ? "auto" : "0px" }} className="dropMenu mpusd">
                          <Box onClick={(e) => setSmeusdVal(e.target.innerText)} id="smeusd" className="dropMenuItem usdItem">
                            <Typography id="smeusd">1 hour</Typography>
                          </Box>
                          <Box onClick={(e) => setSmeusdVal(e.target.innerText)} id="smeusd" className="dropMenuItem usdItem">
                            <Typography id="smeusd">2 hour</Typography>
                          </Box>
                          <Box onClick={(e) => setSmeusdVal(e.target.innerText)} id="smeusd" className="dropMenuItem usdItem">
                            <Typography id="smeusd">3 hour</Typography>
                          </Box>
                          <Box onClick={(e) => setSmeusdVal(e.target.innerText)} id="smeusd" className="dropMenuItem usdItem">
                            <Typography id="smeusd">4 hour</Typography>
                          </Box>
                          <Box onClick={(e) => setSmeusdVal(e.target.innerText)} id="smeusd" className="dropMenuItem usdItem">
                            <Typography id="smeusd">4 hour</Typography>
                          </Box>
                          <Box onClick={(e) => setSmeusdVal(e.target.innerText)} id="smeusd" className="dropMenuItem usdItem">
                            <Typography id="smeusd">5 hour</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    <Box className="placeholderRefres_box">
                      <img src={refreshLogo} />
                    </Box>
                    <Typography className='sideMenuGText'>You Get</Typography>

                    <Box className="usdTHeader">
                      <Box onClick={() => setMpusd(!mpusd)} id="mpusd" className="usdSelectorBox">
                        {sBitIcon}
                        <Typography id="mpusd">BTC</Typography>
                        {mpusd ?
                          <KeyboardArrowUpIcon id="mpusd" className='dwonArrow' sx={{ color: "#fff" }} /> :
                          <KeyboardArrowDownIcon id="mpusd" className='dwonArrow' sx={{ color: "#fff" }} />
                        }
                        <Box id="mpusd" sx={{ height: mpusd ? "auto" : "0px" }} className="dropMenu mpusd">
                          <Box id="mpusd" className="dropMenuItem usdItem">
                            <img id="mpusd" src={ETHI} />
                            <Typography id="mpusd">ETH</Typography>
                          </Box>
                          <Box id="mpusd" className="dropMenuItem usdItem">
                            <img id="mpusd" src={USDT} />
                            <Typography id="mpusd">USDT</Typography>
                          </Box>
                          <Box id="mpusd" className="dropMenuItem usdItem">
                            <img id="mpusd" src={USDC} />
                            <Typography id="mpusd">USDC</Typography>
                          </Box>
                          <Box id="mpusd" className="dropMenuItem usdItem">
                            <img id="mpusd" src={BUSD} />
                            <Typography id="mpusd">BUSD</Typography>
                          </Box>
                          <Box id="mpusd" className="dropMenuItem usdItem">
                            <img id="mpusd" src={MATIC} />
                            <Typography id="mpusd">MATIC</Typography>
                          </Box>
                          <Box id="mpusd" className="dropMenuItem usdItem">
                            <img id="mpusd" src={BNB} />
                            <Typography id="mpusd">BNB</Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box sx={{ padding: "0px" }} className="usdTBox RusdTBox">
                        <input className='inputFiled' placeholder='278377' />
                      </Box>
                    </Box>
                    <Box className="buyBtn">
                      <Typography>Create Order</Typography>
                    </Box>
                  </Box>
                </>

                :
                <>
                  <Box sx={{ display: sideTab === 3 ? "flex" : "none" }} className="tabeinnerSection">
                    <Box className="tabsectionLabel">
                      <Typography className='sideMenuGText'>Paid token</Typography>
                      <Typography className='sideMenuGText sideMenuGTextL SMsideMenuGTextL'>Amount</Typography>
                    </Box>

                    <Box className="usdTHeader">
                      <Box id="lpusd" onClick={() => setLpusd(!lpusd)} className="usdSelectorBox">
                        {sBitIcon}
                        <Typography id="lpusd">MATIC</Typography>
                        {lpusd ?
                          <KeyboardArrowUpIcon id="lpusd" className='dwonArrow' sx={{ color: "#fff" }} /> :
                          <KeyboardArrowDownIcon id="lpusd" className='dwonArrow' sx={{ color: "#fff" }} />
                        }
                        <Box id="lpusd" sx={{ height: lpusd ? "auto" : "0px" }} className="dropMenu mpusd">
                          <Box id="lpusd" className="dropMenuItem usdItem">
                            <img id="lpusd" src={ETHI} />
                            <Typography id="lpusd">ETH</Typography>
                          </Box>
                          <Box id="lpusd" className="dropMenuItem usdItem">
                            <img id="lpusd" src={USDT} />
                            <Typography id="lpusd">USDT</Typography>
                          </Box>
                          <Box id="lpusd" className="dropMenuItem usdItem">
                            <img id="lpusd" src={USDC} />
                            <Typography id="lpusd">USDC</Typography>
                          </Box>
                          <Box id="lpusd" className="dropMenuItem usdItem">
                            <img id="lpusd" src={BUSD} />
                            <Typography id="lpusd">BUSD</Typography>
                          </Box>
                          <Box id="lpusd" className="dropMenuItem usdItem">
                            <img id="lpusd" src={MATIC} />
                            <Typography id="lpusd">MATIC</Typography>
                          </Box>
                          <Box id="lpusd" className="dropMenuItem usdItem">
                            <img id="lpusd" src={BNB} />
                            <Typography id="lpusd">BNB</Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box className="usdTBox">
                        <Box><input className='inputFiled' placeholder='1.45' /></Box>
                        <Box><input className='inputFiled' placeholder='25$' /></Box>
                      </Box>
                    </Box>

                    <Box className="usdTHeaderValue">
                      <Box onClick={() => setUsdRedio(1)} className={usdRedio === 1 ? "usdTHeaderValueItem ActiveUsdBtn" : "usdTHeaderValueItem"}>
                        <Typography>25</Typography>
                      </Box>
                      <Box onClick={() => setUsdRedio(2)} className={usdRedio === 2 ? "usdTHeaderValueItem ActiveUsdBtn" : "usdTHeaderValueItem"}>
                        <Typography>50</Typography>
                      </Box>
                      <Box onClick={() => setUsdRedio(3)} className={usdRedio === 3 ? "usdTHeaderValueItem ActiveUsdBtn" : "usdTHeaderValueItem"}>
                        <Typography>75</Typography>
                      </Box>
                      <Box onClick={() => setUsdRedio(4)} className={usdRedio === 4 ? "usdTHeaderValueItem ActiveUsdBtn" : "usdTHeaderValueItem"}>
                        <Typography>MAX</Typography>
                      </Box>
                      <Box onClick={() => setUsdRedio(5)} className={usdRedio === 5 ? "usdTHeaderValueItem ActiveUsdBtn" : "usdTHeaderValueItem"}>
                        <Typography>Custom</Typography>
                      </Box>
                    </Box>


                    <Box className="tabsectionLabel">
                      <Typography className='sideMenuGText'>Expiry</Typography>
                    </Box>
                    <Box className="usdTHeader">
                      <Box className="usdSelectorBox" id="slExp" onClick={() => setSlExp(!slExp)}>
                        <Typography id="slExp" sx={{ width: "100%" }}>{slExpVal || "1 Day"}</Typography>
                        {slExp ?
                          <KeyboardArrowUpIcon id="slExp" className='dwonArrow' sx={{ color: "#fff" }} /> :
                          <KeyboardArrowDownIcon id="slExp" className='dwonArrow' sx={{ color: "#fff" }} />
                        }
                        <Box id="slExp" sx={{ height: slExp ? "auto" : "0px" }} className="dropMenu mpusd">
                          <Box onClick={(e) => setSlExpVal(e.target.innerText)} id="slExp" className="dropMenuItem usdItem">
                            <Typography id="slExp">1 Day</Typography>
                          </Box>
                          <Box onClick={(e) => setSlExpVal(e.target.innerText)} id="slExp" className="dropMenuItem usdItem">
                            <Typography id="slExp">2 Day</Typography>
                          </Box>
                          <Box onClick={(e) => setSlExpVal(e.target.innerText)} id="slExp" className="dropMenuItem usdItem">
                            <Typography id="slExp">3 Day</Typography>
                          </Box>
                          <Box onClick={(e) => setSlExpVal(e.target.innerText)} id="slExp" className="dropMenuItem usdItem">
                            <Typography id="slExp">4 Day</Typography>
                          </Box>
                          <Box onClick={(e) => setSlExpVal(e.target.innerText)} id="slExp" className="dropMenuItem usdItem">
                            <Typography id="slExp">5 Day</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    <Box className="tabsectionLabel">
                      <Typography className='sideMenuGText'>Trigger price</Typography>
                      <Typography className='sideMenuGText sideMenuGTextL SMsideMenuGTextL'>Price</Typography>
                    </Box>
                    <Box className="usdTHeader">
                      <Box className="usdSelectorBox" id="leusd" onClick={() => setLeusd(!leusd)}>
                        <Typography id="leusd" sx={{ width: "100%" }}>{leusdVal || "10,000"}</Typography>
                        {leusd ?
                          <KeyboardArrowUpIcon id="leusd" className='dwonArrow' sx={{ color: "#fff" }} /> :
                          <KeyboardArrowDownIcon id="leusd" className='dwonArrow' sx={{ color: "#fff" }} />
                        }
                        <Box id="leusd" sx={{ height: leusd ? "auto" : "0px" }} className="dropMenu mpusd">
                          <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                            <Typography id="leusd">10,000</Typography>
                          </Box>
                          <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                            <Typography id="leusd">15,000</Typography>
                          </Box>
                          <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                            <Typography id="leusd">20,000</Typography>
                          </Box>
                          <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                            <Typography id="leusd">25,000</Typography>
                          </Box>
                          <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                            <Typography id="leusd">30,000</Typography>
                          </Box>
                          <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                            <Typography id="leusd">35,000</Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box id="smeusd" sx={{ padding: "0 15px" }} onClick={() => setSmeusd(!smeusd)} className="usdTBox RusdTBox RusdHourTBox">
                        <Typography id="smeusd">{smeusdVal || "1 hour"}</Typography>
                        {smeusd ?
                          <KeyboardArrowUpIcon iid="smeusd" className='dwonArrow' sx={{ color: "#fff" }} /> :
                          <KeyboardArrowDownIcon id="smeusd" className='dwonArrow' sx={{ color: "#fff" }} />
                        }
                        <Box id="smeusd" sx={{ height: smeusd ? "auto" : "0px" }} className="dropMenu mpusd">
                          <Box onClick={(e) => setSmeusdVal(e.target.innerText)} id="smeusd" className="dropMenuItem usdItem">
                            <Typography id="smeusd">1 hour</Typography>
                          </Box>
                          <Box onClick={(e) => setSmeusdVal(e.target.innerText)} id="smeusd" className="dropMenuItem usdItem">
                            <Typography id="smeusd">2 hour</Typography>
                          </Box>
                          <Box onClick={(e) => setSmeusdVal(e.target.innerText)} id="smeusd" className="dropMenuItem usdItem">
                            <Typography id="smeusd">3 hour</Typography>
                          </Box>
                          <Box onClick={(e) => setSmeusdVal(e.target.innerText)} id="smeusd" className="dropMenuItem usdItem">
                            <Typography id="smeusd">4 hour</Typography>
                          </Box>
                          <Box onClick={(e) => setSmeusdVal(e.target.innerText)} id="smeusd" className="dropMenuItem usdItem">
                            <Typography id="smeusd">4 hour</Typography>
                          </Box>
                          <Box onClick={(e) => setSmeusdVal(e.target.innerText)} id="smeusd" className="dropMenuItem usdItem">
                            <Typography id="smeusd">5 hour</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    <Box className="placeholderRefres_box">
                      <img src={refreshLogo} />
                    </Box>
                    <Typography className='sideMenuGText'>You Get</Typography>

                    <Box className="usdTHeader">
                      <Box onClick={() => setMpusd(!mpusd)} id="mpusd" className="usdSelectorBox">
                        {sBitIcon}
                        <Typography id="mpusd">BTC</Typography>
                        {mpusd ?
                          <KeyboardArrowUpIcon id="mpusd" className='dwonArrow' sx={{ color: "#fff" }} /> :
                          <KeyboardArrowDownIcon id="mpusd" className='dwonArrow' sx={{ color: "#fff" }} />
                        }
                        <Box id="mpusd" sx={{ height: mpusd ? "auto" : "0px" }} className="dropMenu mpusd">
                          <Box id="mpusd" className="dropMenuItem usdItem">
                            <img id="mpusd" src={ETHI} />
                            <Typography id="mpusd">ETH</Typography>
                          </Box>
                          <Box id="mpusd" className="dropMenuItem usdItem">
                            <img id="mpusd" src={USDT} />
                            <Typography id="mpusd">USDT</Typography>
                          </Box>
                          <Box id="mpusd" className="dropMenuItem usdItem">
                            <img id="mpusd" src={USDC} />
                            <Typography id="mpusd">USDC</Typography>
                          </Box>
                          <Box id="mpusd" className="dropMenuItem usdItem">
                            <img id="mpusd" src={BUSD} />
                            <Typography id="mpusd">BUSD</Typography>
                          </Box>
                          <Box id="mpusd" className="dropMenuItem usdItem">
                            <img id="mpusd" src={MATIC} />
                            <Typography id="mpusd">MATIC</Typography>
                          </Box>
                          <Box id="mpusd" className="dropMenuItem usdItem">
                            <img id="mpusd" src={BNB} />
                            <Typography id="mpusd">BNB</Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box sx={{ padding: "0px" }} className="usdTBox RusdTBox">
                        <input className='inputFiled' placeholder='278377' />
                      </Box>
                    </Box>
                    <Box className="buyBtn">
                      <Typography>Create Order</Typography>
                    </Box>
                  </Box>
                </>
            }
          </Box>


          <Box className="spotGraphBox">
            <Box className="graphBtnBox">

              <Box onClick={() => setGraphBtn(true)} sx={{ background: graphBtn ? "#41f8f8" : "#18141c" }} className="graphBtn lineBtn">
                <Typography sx={{ color: !graphBtn ? "#fff" : "#000" }}>Line</Typography>
              </Box>
              <Box onClick={() => setGraphBtn(false)} sx={{ background: !graphBtn ? "#41f8f8" : "#18141c" }} className="graphBtn jpnsBtn">
                <Typography sx={{ color: graphBtn ? "#fff" : "#000" }}>Japanese</Typography>
              </Box>

            </Box>

            <Box className="lineGraphBox">
              {
                graphBtn ?
                  <LineChart data={chart_data} /> :
                  <CandlestickChart chartData={chartData} />
              }
            </Box>
          </Box>
        </Box>

        {/* Table */}
        <Box className="spotOderBox">
          <Box id="orderDrop" className="spotLBoxHeader">
            <Typography id="orderDrop" className='spotTabelHeaderText'>Open Orders</Typography>
            <Box id="orderDrop" onClick={() => setOderDrop(!orderDrop)} className="oderDropBox">
              <Typography id="orderDrop">Open Orders</Typography>
              {orderDrop ?
                <KeyboardArrowUpIcon id="orderDrop" className='dwonArrow' sx={{ color: "#fff" }} /> :
                <KeyboardArrowDownIcon id="orderDrop" className='dwonArrow' sx={{ color: "#fff" }} />
              }
              <Box id="orderDrop" sx={{ height: orderDrop ? "auto" : "0px" }} className="dropMenu mpusd">
                <Box id="orderDrop" className="dropMenuItem usdItem">
                  <Typography id="orderDrop">Item 1</Typography>
                </Box>
                <Box id="orderDrop" className="dropMenuItem usdItem">
                  <Typography id="orderDrop">Item 2</Typography>
                </Box>
                <Box id="orderDrop" className="dropMenuItem usdItem">
                  <Typography id="orderDrop">Item 3</Typography>
                </Box>
                <Box id="orderDrop" className="dropMenuItem usdItem">
                  <Typography id="orderDrop">Item 4</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="spotLBoxTable">
            {tableRow(
              {
                Time: "Time",
                Pay: "Pay",
                Receive: "Receive",
                Amount: "Amount",
                Type: "Type",
                TriggerPrice: "Trigger Price",
                Price: "Price",
                Expiry: "Expiry",
                Status: "Status"
              }
            )}
            {tableRow(
              {
                Time: "4.7.23.18.58",
                Pay: "USDT",
                Receive: "BTC",
                Amount: "2",
                Type: "Limit",
                TriggerPrice: "--",
                Price: "54",
                Expiry: "1 Day",
                Status: "2/0"
              }
            )}
            {tableRow(
              {
                Time: "4.7.23.18.58",
                Pay: "USDT",
                Receive: "BTC",
                Amount: "2",
                Type: "Limit",
                TriggerPrice: "--",
                Price: "54",
                Expiry: "1 Day",
                Status: "2/0"
              }
            )}
            {tableRow(
              {
                Time: "4.7.23.18.58",
                Pay: "USDT",
                Receive: "BTC",
                Amount: "2",
                Type: "Limit",
                TriggerPrice: "--",
                Price: "54",
                Expiry: "1 Day",
                Status: "2/0"
              }
            )}




          </Box>

        </Box>

      </Box >
    </>
  )
}
