import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { sBitIcon, sWhiteBitIcon } from "../../assets/Data"


import "./style.css"
import axios from 'axios';

//images
import ETHI from "../../assets/Images/E4bc3598cd3721b16fa31a60ab91c0b04.png";
import USDT from "../../assets/Images/USDT icon.png"
import USDC from "../../assets/Images/USDC.png"
import BUSD from "../../assets/Images/BUSD.png"
import MATIC from "../../assets/Images/MATIC.png"
import BNB from "../../assets/Images/BNB.png"

//components
import NavBar from '../../Components/NavBar';
import LineChart from "../../Components/LineChart"
import CandlestickChart from "../../Components/TradingChart"

import { jap_data } from '../../Components/constant';


export default function Optiospro() {
  const ref = useRef();
  const [graphBtn, setGraphBtn] = useState(true)
  const [sideTab, setSideTab] = useState(1)
  const [stopMDrop, setStopMDrop] = useState(false)
  const [stopMDropVal, setStopMDropVal] = useState("Stop Market")
  const [mpusd, setMpusd] = useState(false)
  const [leusd, setLeusd] = useState(false)
  const [leusdVal, setLeusdVal] = useState("12")





  const optHeaderRow = () => {
    return (
      <Box className="optRow">
        <Box sx={{ justifyContent: "center" }} className="optrowItem">
          <Typography className='potT_headerText'>Size</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem">
          <Typography className='potT_headerText'>IV (Bid)</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem">
          <Typography className='potT_headerText'>Bid</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem">
          <Typography className='potT_headerText'>Mark</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem">
          <Typography className='potT_headerText'>Ask</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem">
          <Typography className='potT_headerText'>IV (Ask)</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem">
          <Typography className='potT_headerText'>Open</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem">
          <Typography className='potT_headerText'>Δ|Delta</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem">
          <Typography className='potT_headerText'>Position</Typography>
        </Box>
      </Box>
    )
  }


  const optRow = (val) => {
    let HColor;
    if (val?.heighLightRed) {
      HColor = "#ff000017"
    } else if (val?.heighLightGray) {
      HColor = "#5757574b"
    }


    return (
      <Box sx={{ background: HColor }} className="optRow">
        <Box className="optrowItem">
          <Typography sx={{ color: val?.green ? "#61FF71" : "#FF7D61" }} className='potT_RedText'>3.9</Typography>
        </Box>
        <Box className="optrowItem">
          <Typography className='potT_whiteText'>--</Typography>
        </Box>
        <Box className="optrowItem">
          <Typography className='potT_whiteText'>0.1190</Typography>
        </Box>
        <Box className="optrowItem">
          <Typography className='potT_headerText'>0.1260</Typography>
          <Typography className='potT_whiteText'>$3302.53</Typography>
        </Box>
        <Box className="optrowItem">
          <Typography className='potT_headerText'>0.1260</Typography>
          <Typography className='potT_whiteText'>$3302.53</Typography>
        </Box>
        <Box className="optrowItem">
          <Typography className='potT_whiteText'>211.3%</Typography>
        </Box>
        <Box className="optrowItem">
          <Typography className='potT_whiteText'>--</Typography>
        </Box>
        <Box className="optrowItem">
          <Typography className='potT_whiteText'>1.00</Typography>
        </Box>
        <Box className="optrowItem">
          <Typography className='potT_whiteText'>--</Typography>
        </Box>
      </Box>

    )
  }

  const optLastTabHeaderRow = () => {
    return (
      <Box className="optRow">
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_headerText'>Symbol</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_headerText'>Call / Put</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_headerText'>Value</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_headerText'>Amount</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_headerText'>Strike Date</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_headerText'>Strike Price</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_headerText'>P & L</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_headerText'>Close Position</Typography>
        </Box>
      </Box>
    )
  }

  const optLastTabRow = (val) => {
    return (
      <Box sx={{ background: val?.heighLight ? "#1a1a1a6b" : null }} className="optRow">
        <Box sx={{ flexDirection: "row", justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          {sWhiteBitIcon}
          <Typography ml={1} className='potT_LheaderText'>BTC</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_LheaderText'>Call</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_LheaderText'>$-29000</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_LheaderText'>2</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_LheaderText'>18/7</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_LheaderText'>35000</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_LheaderText'>+160(+2.5%)</Typography>
        </Box>
        <Box sx={{ justifyContent: "center" }} className="optrowItem optrowLOPtItem">
          <Typography className='potT_headerText'>Market Limit</Typography>
          <Typography className='potT_LheaderText'>$29000</Typography>
        </Box>
      </Box>
    )
  }





  useEffect(() => {
    const handleClickOutside = (e) => {
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

      if (e?.target?.id !== "leusd") {
        setLeusd(false);
      } else {
        if (leusd) {
          setLeusd(false);
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
      <Box className="optiospro">
        <Box className="spotGraphBox innerGraphBox">
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
        <Box className="optTableBox">
          <Box className="optFTb">
            {optHeaderRow()}
            {optRow({ heighLightRed: true })}
            {optRow()}
            {optRow()}
            {optRow()}
            {optRow()}
          </Box>
          <Box className="optMTb">
            <Box className="optMRowItem">
              <Typography>Strike</Typography>
            </Box>
            <Box className="optMRowItem">
              <Typography>2300</Typography>
            </Box>
            <Box className="optMRowItem">
              <Typography>2300</Typography>
            </Box>
            <Box className="optMRowItem">
              <Typography>2300</Typography>
            </Box>
            <Box className="optMRowItem">
              <Typography>2300</Typography>
            </Box>
            <Box className="optMRowItem">
              <Typography>2300</Typography>
            </Box>

          </Box>
          <Box className="optLTb">
            {optHeaderRow()}
            {optRow({ heighLightGray: true, green: true })}
            {optRow({ green: true })}
            {optRow({ green: true })}
            {optRow({ green: true })}

          </Box>
        </Box>

        <Box className="optBottomBox">
          <Box className="optBotFBox">
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

            <Box sx={{ display: sideTab === 1 ? "block" : "none" }}>
              <Box sx={{ justifyContent: 'space-between' }} className="tabsectionLabel">
                <Typography className='sideMenuGText gptLCText'> Amount</Typography>
                <Typography className='sideMenuGText gptLCText'>Trigger price</Typography>
                <Typography className='sideMenuGText gptLCText'>Price</Typography>
              </Box>
              <Box className="usdTHeader">
                <Box sx={{ justifyContent: "space-between" }} className="usdSelectorBox" id="leusd" onClick={() => setLeusd(!leusd)}>
                  <Typography id="leusd" sx={{ width: "100%" }}>{leusdVal || "1 hour"}</Typography>
                  {leusd ?
                    <KeyboardArrowUpIcon id="leusd" className='dwonArrow' sx={{ color: "#fff" }} /> :
                    <KeyboardArrowDownIcon id="leusd" className='dwonArrow' sx={{ color: "#fff" }} />
                  }
                  <Box id="leusd" sx={{ height: leusd ? "auto" : "0px" }} className="dropMenu mpusd">
                    <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                      <Typography id="leusd">10</Typography>
                    </Box>
                    <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                      <Typography id="leusd">11</Typography>
                    </Box>
                    <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                      <Typography id="leusd">12</Typography>
                    </Box>
                    <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                      <Typography id="leusd">13</Typography>
                    </Box>
                    <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                      <Typography id="leusd">14</Typography>
                    </Box>
                  </Box>
                </Box>

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

                <Box sx={{ justifyContent: "space-between" }} pr={2} className="usdSelectorBox">
                  <Typography>25</Typography>
                </Box>
              </Box>
              <Box className="sellAbuyBtnBox">
                <Box sx={{ background: "#61FF71" }} className="SABbtn">
                  <Typography>Buy/Long</Typography>
                </Box>
                <Box sx={{ background: "#F44336" }} className="SABbtn">
                  <Typography>Sell/Short</Typography>
                </Box>
              </Box>
              <Box className="optCUstTextBox">
                <Box className="optCUstTextItemBox">
                  <Typography>Position Base</Typography>
                </Box>
                <Box className="optCUstTextItemBox">
                  <Typography>Remaining Balance</Typography>
                </Box>
                <Box className="optCUstTextItemBox">
                  <Typography>Fee</Typography>
                </Box>
              </Box>
              <Box className="optCUstText_Box">
                <Box className="optCUstTextItemBox"> <Typography sx={{ color: "#50cd89" }}>300 USDT</Typography></Box>
                <Box className="optCUstTextItemBox"><Typography sx={{ color: "#50cd89" }}>20 USDT</Typography></Box>
                <Box className="optCUstTextItemBox"><Typography sx={{ color: "#FFFFFF" }}>0.2 USDT</Typography></Box>
              </Box>
            </Box>




            <Box sx={{ display: sideTab === 2 ? "block" : "none" }}>
              <Box sx={{ justifyContent: 'space-between' }} className="tabsectionLabel">
                <Typography className='sideMenuGText gptLCText'> Amount</Typography>
                <Typography className='sideMenuGText gptLCText'>Trigger price</Typography>
                <Typography className='sideMenuGText gptLCText'>Price</Typography>
              </Box>
              <Box className="usdTHeader">
                <Box sx={{ justifyContent: "space-between" }} className="usdSelectorBox" id="leusd" onClick={() => setLeusd(!leusd)}>
                  <Typography id="leusd" sx={{ width: "100%" }}>{leusdVal || "1 hour"}</Typography>
                  {leusd ?
                    <KeyboardArrowUpIcon id="leusd" className='dwonArrow' sx={{ color: "#fff" }} /> :
                    <KeyboardArrowDownIcon id="leusd" className='dwonArrow' sx={{ color: "#fff" }} />
                  }
                  <Box id="leusd" sx={{ height: leusd ? "auto" : "0px" }} className="dropMenu mpusd">
                    <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                      <Typography id="leusd">10</Typography>
                    </Box>
                    <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                      <Typography id="leusd">11</Typography>
                    </Box>
                    <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                      <Typography id="leusd">12</Typography>
                    </Box>
                    <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                      <Typography id="leusd">13</Typography>
                    </Box>
                    <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                      <Typography id="leusd">14</Typography>
                    </Box>
                  </Box>
                </Box>
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
                <Box sx={{ justifyContent: "space-between" }} pr={2} className="usdSelectorBox">
                  <Typography>25</Typography>
                </Box>
              </Box>
              <Box className="sellAbuyBtnBox">
                <Box sx={{ background: "#61FF71" }} className="SABbtn">
                  <Typography>Buy/Long</Typography>
                </Box>
                <Box sx={{ background: "#F44336" }} className="SABbtn">
                  <Typography>Sell/Short</Typography>
                </Box>
              </Box>
              <Box className="optCUstTextBox">
                <Box className="optCUstTextItemBox">
                  <Typography>Position Base</Typography>
                </Box>
                <Box className="optCUstTextItemBox">
                  <Typography>Remaining Balance</Typography>
                </Box>
                <Box className="optCUstTextItemBox">
                  <Typography>Fee</Typography>
                </Box>
              </Box>
              <Box className="optCUstText_Box">
                <Box className="optCUstTextItemBox"> <Typography sx={{ color: "#50cd89" }}>300 USDT</Typography></Box>
                <Box className="optCUstTextItemBox"><Typography sx={{ color: "#50cd89" }}>20 USDT</Typography></Box>
                <Box className="optCUstTextItemBox"><Typography sx={{ color: "#FFFFFF" }}>0.2 USDT</Typography></Box>
              </Box>
            </Box>



            <Box sx={{ display: sideTab === 3 ? "block" : "none" }}>
              <Box sx={{ justifyContent: 'space-between' }} className="tabsectionLabel">
                <Typography className='sideMenuGText gptLCText'> Amount</Typography>
                <Typography className='sideMenuGText gptLCText'>Trigger price</Typography>
                <Typography className='sideMenuGText gptLCText'>Price</Typography>
              </Box>
              <Box className="usdTHeader">
                <Box sx={{ justifyContent: "space-between" }} className="usdSelectorBox" id="leusd" onClick={() => setLeusd(!leusd)}>
                  <Typography id="leusd" sx={{ width: "100%" }}>{leusdVal || "1 hour"}</Typography>
                  {leusd ?
                    <KeyboardArrowUpIcon id="leusd" className='dwonArrow' sx={{ color: "#fff" }} /> :
                    <KeyboardArrowDownIcon id="leusd" className='dwonArrow' sx={{ color: "#fff" }} />
                  }
                  <Box id="leusd" sx={{ height: leusd ? "auto" : "0px" }} className="dropMenu mpusd">
                    <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                      <Typography id="leusd">10</Typography>
                    </Box>
                    <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                      <Typography id="leusd">11</Typography>
                    </Box>
                    <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                      <Typography id="leusd">12</Typography>
                    </Box>
                    <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                      <Typography id="leusd">13</Typography>
                    </Box>
                    <Box onClick={(e) => setLeusdVal(e.target.innerText)} id="leusd" className="dropMenuItem usdItem">
                      <Typography id="leusd">14</Typography>
                    </Box>
                  </Box>
                </Box>
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
                <Box sx={{ justifyContent: "space-between" }} pr={2} className="usdSelectorBox">
                  <Typography>25</Typography>
                </Box>
              </Box>
              <Box className="sellAbuyBtnBox">
                <Box sx={{ background: "#61FF71" }} className="SABbtn">
                  <Typography>Buy/Long</Typography>
                </Box>
                <Box sx={{ background: "#F44336" }} className="SABbtn">
                  <Typography>Sell/Short</Typography>
                </Box>
              </Box>
              <Box className="optCUstTextBox">
                <Box className="optCUstTextItemBox">
                  <Typography>Position Base</Typography>
                </Box>
                <Box className="optCUstTextItemBox">
                  <Typography>Remaining Balance</Typography>
                </Box>
                <Box className="optCUstTextItemBox">
                  <Typography>Fee</Typography>
                </Box>
              </Box>
              <Box className="optCUstText_Box">
                <Box className="optCUstTextItemBox"> <Typography sx={{ color: "#50cd89" }}>300 USDT</Typography></Box>
                <Box className="optCUstTextItemBox"><Typography sx={{ color: "#50cd89" }}>20 USDT</Typography></Box>
                <Box className="optCUstTextItemBox"><Typography sx={{ color: "#FFFFFF" }}>0.2 USDT</Typography></Box>
              </Box>
            </Box>
          </Box>

          <Box className="optBotLBox">
            {optLastTabHeaderRow()}
            {optLastTabRow({ heighLight: true })}
            {optLastTabRow()}
            {optLastTabRow()}
            {optLastTabRow()}
          </Box>
        </Box>
      </Box>
    </>
  )
}
