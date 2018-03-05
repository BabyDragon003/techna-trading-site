import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Slider, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CloseIcon from '@mui/icons-material/Close';

import "./style.css"
import axios from 'axios';

//images
import refreshLogo from "../../assets/Images/image 124.png.svg"

//component
import NavBar from '../../Components/NavBar'
import LineChart from "../../Components/LineChart"
import CandlestickChart from "../../Components/TradingChart"
import { CheckboxTik } from "../../assets/Data"


import { jap_data } from '../../Components/constant';


export default function Futures() {
  const ref = useRef();
  const [sideTab, setSideTab] = useState(1)
  const [gptTabe, setGptTabe] = useState(0)
  const [graphBtn, setGraphBtn] = useState(true)
  const [flpDrop, setFlpDrop] = useState(false)
  const [flpDropVal, setFlpDropVal] = useState(false)
  const [fbtcDrop, setFbtcDrop] = useState(false)
  const [fCrossDrop, setFCrossDrop] = useState(false)
  const [ofLong, setOfLong] = useState(false)
  const [ofShort, setOfShort] = useState(true)
  const [stopMDrop, setStopMDrop] = useState(false)
  const [stopMDropVal, setStopMDropVal] = useState("Stop Market")
  const [usdRedio, setUsdRedio] = useState(1)
  console.log(fCrossDrop);

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


  const tableRow = (val) => {
    let HColor;
    if (val?.heighLightRed) {
      HColor = "#ff000017"
    } else if (val?.heighLightGray) {
      HColor = "#5757574b"
    }

    return (
      <Box sx={{ background: HColor }} className="orderTableRow">
        <Box className="orderTableRow_item">
          <Typography sx={{ color: val?.textColor ? val?.textColor : "#fff" }} className='tableRedText'>30.922.9</Typography>
        </Box>
        <Box className="orderTableRow_item">
          <Typography className='tableWhiteText'>0.01648529</Typography>
        </Box>
        <Box className="orderTableRow_item">
          <Typography className='tableWhiteText'>5.27456208</Typography>
        </Box>
      </Box>
    )
  }

  const checkBoxComp = () => {
    return (
      <>
        <Box className="checkBoxInnerBox">
          <Box onClick={() => setOfLong(!ofLong)}>
            {ofLong ? CheckboxTik : null}
          </Box>
          <Typography>TP/SL of Long</Typography>
        </Box>


        <Box className="checkBoxInnerBox">
          <Box onClick={() => setOfShort(!ofShort)}>
            {ofShort ? CheckboxTik : null}
          </Box>
          <Typography>TP/SL of Short</Typography>
        </Box>
      </>
    )
  }




  useEffect(() => {
    const handleClickOutside = (e) => {

      if (e?.target?.id !== "flpDrop") {
        setFlpDrop(false);
      } else {
        if (flpDrop) {
          setFlpDrop(false);
          return;
        } else {
          return;
        }
      }
      if (e?.target?.id !== "fbtcDrop") {
        setFbtcDrop(false);
      } else {
        if (fbtcDrop) {
          setFbtcDrop(false);
          return;
        } else {
          return;
        }
      }
      if (e?.target?.id !== "fCrossDrop") {
        setFCrossDrop(false);
      } else {
        if (fCrossDrop) {
          setFCrossDrop(false);
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
      <Box className="futuresContainer">
        <Box className="crossBox">
          <Box id="fCrossDrop" sx={{ width: "100px", marginBottom: "16px" }} className="navMenuItem" onClick={() => setFCrossDrop(!fCrossDrop)}>
            <Typography id="fCrossDrop">Cross</Typography>
            {fCrossDrop ?
              <KeyboardArrowUpIcon id="fCrossDrop" className='dwonArrow' sx={{ color: "#fff" }} /> :
              <KeyboardArrowDownIcon id="fCrossDrop" className='dwonArrow' sx={{ color: "#fff" }} />
            }
            <Box id="fCrossDrop" sx={{ height: fCrossDrop ? "auto" : "0px" }} className="dropMenu mpusd">
              <Box id="fCrossDrop" className="dropMenuItem usdItem">
                <Typography id="fCrossDrop">Item 1</Typography>
              </Box>
              <Box id="fCrossDrop" className="dropMenuItem usdItem">
                <Typography id="fCrossDrop">Item 2</Typography>
              </Box>
              <Box id="fCrossDrop" className="dropMenuItem usdItem">
                <Typography id="fCrossDrop">Item 3</Typography>
              </Box>
              <Box id="fCrossDrop" className="dropMenuItem usdItem">
                <Typography id="fCrossDrop">Item 4</Typography>
              </Box>
            </Box>
          </Box>

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
          {/* Amoutn */}
          {sideTab === 1 ? (
            <>
              <Typography className='sideMenuGText'>Amount</Typography>

              <Box className="usdTHeader">
                <Box className="usdTBox">
                  <Box px={1}><Typography>300 USDT </Typography></Box>
                  <Box px={1}><Typography>0.03 BTC </Typography></Box>
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
              <Typography className='sideMenuGText'>Leverage: X10</Typography>

              <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />

              <Box className="CheckBoxContainer">{checkBoxComp()}</Box>

              <Box className="sellAbuyBtnBox">
                <Box sx={{ background: "#61FF71" }} className="SABbtn">
                  <Typography>Buy/Long</Typography>
                </Box>
                <Box sx={{ background: "#F44336" }} className="SABbtn">
                  <Typography>Sell/Short</Typography>
                </Box>
              </Box>
              <Box className="FutuUSDTextBox">
                <Typography>Position Base: </Typography>
                <Typography>300 USDT</Typography>
              </Box>
              <Box className="FutuUSDTextBox">
                <Typography>Fees: </Typography>
                <Typography>0.2 USDT</Typography>
              </Box>
              <Box className="FutuUSDTextBox">
                <Typography>Remaining Balance: </Typography>
                <Typography>25 USDT</Typography>
              </Box>
            </>
          ) : sideTab === 2 ? (
            <>
              <Typography className='sideMenuGText'>Price</Typography>

              <Box className="usdTHeader">
                <Box px={1} className="usdTBox LPDrop">
                  <Box id="flpDrop" onClick={() => setFlpDrop(!flpDrop)}>
                    <Typography id="flpDrop" >{flpDropVal || "Last"}</Typography>
                    {flpDrop ?
                      <KeyboardArrowUpIcon id="flpDrop" className='dwonArrow' sx={{ color: "#fff" }} /> :
                      <KeyboardArrowDownIcon id="flpDrop" className='dwonArrow' sx={{ color: "#fff" }} />
                    }
                    <Box id="flpDrop" sx={{ height: flpDrop ? "auto" : "0px" }} className="dropMenu mpusd">
                      <Box onClick={(e) => setFlpDropVal(e.target.innerText)} id="flpDrop" className="dropMenuItem usdItem">
                        <Typography id="flpDrop">1 hour</Typography>
                      </Box>
                      <Box onClick={(e) => setFlpDropVal(e.target.innerText)} id="flpDrop" className="dropMenuItem usdItem">
                        <Typography id="flpDrop">2 hour</Typography>
                      </Box>
                      <Box onClick={(e) => setFlpDropVal(e.target.innerText)} id="flpDrop" className="dropMenuItem usdItem">
                        <Typography id="flpDrop">3 hour</Typography>
                      </Box>
                      <Box onClick={(e) => setFlpDropVal(e.target.innerText)} id="flpDrop" className="dropMenuItem usdItem">
                        <Typography id="flpDrop">4 hour</Typography>
                      </Box>
                      <Box onClick={(e) => setFlpDropVal(e.target.innerText)} id="flpDrop" className="dropMenuItem usdItem">
                        <Typography id="flpDrop">5 hour</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Typography>USDT</Typography>
                </Box>
              </Box>
              <Typography className='sideMenuGText'>Amount</Typography>

              <Box className="usdTHeader">
                <Box className="usdTBox">
                  <Box px={1}><Typography>300 USDT </Typography></Box>
                  <Box px={1}><Typography>0.03 BTC </Typography></Box>
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
              <Typography className='sideMenuGText'>Leverage: X10</Typography>

              <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />

              <Box className="CheckBoxContainer">{checkBoxComp()}</Box>

              <Box className="sellAbuyBtnBox">
                <Box sx={{ background: "#61FF71" }} className="SABbtn">
                  <Typography>Buy/Long</Typography>
                </Box>
                <Box sx={{ background: "#F44336" }} className="SABbtn">
                  <Typography>Sell/Short</Typography>
                </Box>
              </Box>
              <Box className="FutuUSDTextBox">
                <Typography>Position Base: </Typography>
                <Typography>300 USDT</Typography>
              </Box>
              <Box className="FutuUSDTextBox">
                <Typography>Fees: </Typography>
                <Typography>0.2 USDT</Typography>
              </Box>
              <Box className="FutuUSDTextBox">
                <Typography>Remaining Balance: </Typography>
                <Typography>25 USDT</Typography>
              </Box>
            </>
          ) : sideTab === 3 ? (
            <>
              {
                stopMDropVal === "Stop Market" ?
                  <>
                    <Typography className='sideMenuGText'>Trigger Price</Typography>

                    <Box className="usdTHeader">
                      <Box px={1} className="usdTBox LPDrop">
                        <Box id="flpDrop" onClick={() => setFlpDrop(!flpDrop)}>
                          <Typography id="flpDrop" >{flpDropVal || "Last"}</Typography>
                          {flpDrop ?
                            <KeyboardArrowUpIcon id="flpDrop" className='dwonArrow' sx={{ color: "#fff" }} /> :
                            <KeyboardArrowDownIcon id="flpDrop" className='dwonArrow' sx={{ color: "#fff" }} />
                          }
                          <Box id="flpDrop" sx={{ height: flpDrop ? "auto" : "0px" }} className="dropMenu mpusd">
                            <Box onClick={(e) => setFlpDropVal(e.target.innerText)} id="flpDrop" className="dropMenuItem usdItem">
                              <Typography id="flpDrop">1 hour</Typography>
                            </Box>
                            <Box onClick={(e) => setFlpDropVal(e.target.innerText)} id="flpDrop" className="dropMenuItem usdItem">
                              <Typography id="flpDrop">2 hour</Typography>
                            </Box>
                            <Box onClick={(e) => setFlpDropVal(e.target.innerText)} id="flpDrop" className="dropMenuItem usdItem">
                              <Typography id="flpDrop">3 hour</Typography>
                            </Box>
                            <Box onClick={(e) => setFlpDropVal(e.target.innerText)} id="flpDrop" className="dropMenuItem usdItem">
                              <Typography id="flpDrop">4 hour</Typography>
                            </Box>
                            <Box onClick={(e) => setFlpDropVal(e.target.innerText)} id="flpDrop" className="dropMenuItem usdItem">
                              <Typography id="flpDrop">5 hour</Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Typography>USDT</Typography>
                      </Box>
                    </Box>
                    <Typography className='sideMenuGText'>Amount</Typography>

                    <Box className="usdTHeader">
                      <Box className="usdTBox LPDrop smField">
                        <Typography>0.03</Typography>
                        <Typography>= 300 USDT</Typography>

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
                    <Typography className='sideMenuGText'>Leverage: X10</Typography>

                    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />

                    <Box className="CheckBoxContainer">{checkBoxComp()}</Box>

                    <Box className="sellAbuyBtnBox">
                      <Box sx={{ background: "#61FF71" }} className="SABbtn">
                        <Typography>Buy/Long</Typography>
                      </Box>
                      <Box sx={{ background: "#F44336" }} className="SABbtn">
                        <Typography>Sell/Short</Typography>
                      </Box>
                    </Box>
                    <Box className="FutuUSDTextBox">
                      <Typography>Position Base: </Typography>
                      <Typography>300 USDT</Typography>
                    </Box>
                    <Box className="FutuUSDTextBox">
                      <Typography>Fees: </Typography>
                      <Typography>0.2 USDT</Typography>
                    </Box>
                    <Box className="FutuUSDTextBox">
                      <Typography>Remaining Balance: </Typography>
                      <Typography>25 USDT</Typography>
                    </Box>
                  </>
                  :
                  <>
                    <Typography className='sideMenuGText'>Trigger Price</Typography>

                    <Box className="usdTHeader">
                      <Box px={1} className="usdTBox LPDrop">
                        <Box id="flpDrop" onClick={() => setFlpDrop(!flpDrop)}>
                          <Typography id="flpDrop" >{flpDropVal || "Last"}</Typography>
                          {flpDrop ?
                            <KeyboardArrowUpIcon id="flpDrop" className='dwonArrow' sx={{ color: "#fff" }} /> :
                            <KeyboardArrowDownIcon id="flpDrop" className='dwonArrow' sx={{ color: "#fff" }} />
                          }
                          <Box id="flpDrop" sx={{ height: flpDrop ? "auto" : "0px" }} className="dropMenu mpusd">
                            <Box onClick={(e) => setFlpDropVal(e.target.innerText)} id="flpDrop" className="dropMenuItem usdItem">
                              <Typography id="flpDrop">1 hour</Typography>
                            </Box>
                            <Box onClick={(e) => setFlpDropVal(e.target.innerText)} id="flpDrop" className="dropMenuItem usdItem">
                              <Typography id="flpDrop">2 hour</Typography>
                            </Box>
                            <Box onClick={(e) => setFlpDropVal(e.target.innerText)} id="flpDrop" className="dropMenuItem usdItem">
                              <Typography id="flpDrop">3 hour</Typography>
                            </Box>
                            <Box onClick={(e) => setFlpDropVal(e.target.innerText)} id="flpDrop" className="dropMenuItem usdItem">
                              <Typography id="flpDrop">4 hour</Typography>
                            </Box>
                            <Box onClick={(e) => setFlpDropVal(e.target.innerText)} id="flpDrop" className="dropMenuItem usdItem">
                              <Typography id="flpDrop">5 hour</Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Typography>USDT</Typography>
                      </Box>
                    </Box>
                    <Typography className='sideMenuGText'>Price</Typography>

                    <Box className="usdTHeader">
                      <Box px={1} className="usdTBox LPDrop smField">
                        <Typography></Typography>
                        <Typography>USDT</Typography>
                      </Box>
                    </Box>
                    <Typography className='sideMenuGText'>Amount</Typography>

                    <Box className="usdTHeader">
                      <Box className="usdTBox LPDrop smField">
                        <Typography>0.03</Typography>
                        <Typography>= 300 USDT</Typography>

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
                    <Typography className='sideMenuGText'>Leverage: X10</Typography>

                    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />

                    <Box className="CheckBoxContainer">{checkBoxComp()}</Box>

                    <Box className="sellAbuyBtnBox">
                      <Box sx={{ background: "#61FF71" }} className="SABbtn">
                        <Typography>Buy/Long</Typography>
                      </Box>
                      <Box sx={{ background: "#F44336" }} className="SABbtn">
                        <Typography>Sell/Short</Typography>
                      </Box>
                    </Box>
                    <Box className="FutuUSDTextBox">
                      <Typography>Position Base: </Typography>
                      <Typography>300 USDT</Typography>
                    </Box>
                    <Box className="FutuUSDTextBox">
                      <Typography>Fees: </Typography>
                      <Typography>0.2 USDT</Typography>
                    </Box>
                    <Box className="FutuUSDTextBox">
                      <Typography>Remaining Balance: </Typography>
                      <Typography>25 USDT</Typography>
                    </Box>
                  </>
              }

            </>
          ) : null}
        </Box>
        <Box className="orderBookBox">
          <Typography className='oderBookHeader'>Order Book</Typography>

          <Box className="orderTableRow">
            <Box className="orderTableRow_item">
              <Typography className='tableHeaderText'>Price (USDT)</Typography>
            </Box>
            <Box className="orderTableRow_item">
              <Typography className='tableHeaderText'>Amount(BTC)</Typography>
            </Box>
            <Box className="orderTableRow_item">
              <Typography className='tableHeaderText'>Total (BTC)</Typography>
            </Box>
          </Box>
          {tableRow({ textColor: "#ff7d61", heighLightRed: true })}
          {tableRow({ textColor: "#ff7d61" })}
          {tableRow({ textColor: "#ff7d61" })}
          {tableRow({ textColor: "#ff7d61" })}
          {tableRow({ textColor: "#ff7d61" })}
          {tableRow({ textColor: "#ff7d61" })}
          {tableRow({ textColor: "#ff7d61" })}
          <Box sx={{ background: "#18141C" }} className="orderTableRow">
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", width: "50%" }} className="orderTableRow_item">
              <Typography className='totalUSDText'>30.922.9 <span className='totalUSDspanText'> = 30.922.9 USD</span></Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "end", width: "50%" }} className="orderTableRow_item">
              <Typography className='totalUSDspanText'>30,921.4</Typography>
              <Typography className='totalUSDText'>Mark Price</Typography>
            </Box>
          </Box>
          {tableRow({ textColor: "#61FF71", heighLightGray: true, })}
          {tableRow({ textColor: "#61FF71" })}
          {tableRow({ textColor: "#61FF71" })}
          {tableRow({ textColor: "#61FF71" })}
          {tableRow({ textColor: "#61FF71" })}
          {tableRow({ textColor: "#61FF71" })}
        </Box>

        <Box className="graphBox FGraphBox">
          <Box className="graphTopPriceBox">
            <Box className="GTPTopBox">
              <Typography className='GTPTopHeader'>BTC/USDT</Typography>
              <Box id="fbtcDrop" onClick={() => setFbtcDrop(!fbtcDrop)} className="GTPDropBox">
                <Typography id="fbtcDrop" className='GTPTopBtnText'>BTC/USDT</Typography>
                {fbtcDrop ?
                  <KeyboardArrowUpIcon id="fbtcDrop" className='dwonArrow' sx={{ color: "#fff" }} /> :
                  <KeyboardArrowDownIcon id="fbtcDrop" className='dwonArrow' sx={{ color: "#fff" }} />
                }
                <Box id="fbtcDrop" sx={{ height: fbtcDrop ? "auto" : "0px" }} className="dropMenu mpusd">
                  <Box id="fbtcDrop" className="dropMenuItem usdItem">
                    <Typography id="fbtcDrop">Item 1</Typography>
                  </Box>
                  <Box id="fbtcDrop" className="dropMenuItem usdItem">
                    <Typography id="fbtcDrop">Item 2</Typography>
                  </Box>
                  <Box id="fbtcDrop" className="dropMenuItem usdItem">
                    <Typography id="fbtcDrop">Item 3</Typography>
                  </Box>
                  <Box id="fbtcDrop" className="dropMenuItem usdItem">
                    <Typography id="fbtcDrop">Item 4</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="GTPTabeBox">
              <Box className="GTPTabeItem FGTPTabeItem">
                <Typography>Price</Typography>
                <Typography>$70,000</Typography>
              </Box>
              <Box className="GTPTabeItem FGTPTabeItem">
                <Typography>24 Change</Typography>
                <Typography>+578%</Typography>
              </Box>
              <Box className="GTPTabeItem FGTPTabeItem">
                <Typography>Volume</Typography>
                <Typography>44k  BTC</Typography>
              </Box>
              <Box className="GTPTabeItem FGTPTabeItem">
                <Typography>24 High</Typography>
                <Typography>$71, 775</Typography>
              </Box>
              <Box className="GTPTabeItem FGTPTabeItem">
                <Typography>24 Low</Typography>
                <Typography>$69, 755</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="gtpTabBox ">

            <Box onClick={() => setGptTabe(0)} sx={{ background: gptTabe === 0 ? "#18141c" : "#FFFFFF0D" }} className="gtpTabItem">
              <Typography>BTC/USDT</Typography>
              <CloseIcon className='gptTabCorsIcon' />
            </Box>
            <Box onClick={() => setGptTabe(1)} sx={{ background: gptTabe === 1 ? "#18141c" : "#FFFFFF0D" }} className="gtpTabItem">
              <Typography>ETH/USDT</Typography>
              <CloseIcon className='gptTabCorsIcon' />
            </Box>
            <Box onClick={() => setGptTabe(2)} sx={{ background: gptTabe === 2 ? "#18141c" : "#FFFFFF0D" }} className="gtpTabItem">
              <Typography>SOL/USDT</Typography>
              <CloseIcon className='gptTabCorsIcon' />
            </Box>
          </Box>

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

        </Box>

      </Box >


    </>
  )
}
