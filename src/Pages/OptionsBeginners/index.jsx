import React, { useState, useEffect } from 'react';
import "./style.css"
import { Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import axios from 'axios';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


//components
import NavBar from '../../Components/NavBar';
import LineChart from "../../Components/LineChart"
import CandlestickChart from "../../Components/TradingChart"
import { sBitIcon, redTriangle, I_icon } from "../../assets/Data"

import { jap_data } from '../../Components/constant';

const callCard = () => {
  return (
    <Box className="callCard">
      <Typography className='callCardHeader_text'>Call 06/28</Typography>
      <Box className="callBtcBox">
        {sBitIcon}
        <Typography ml={1}>Buy BTC : $31,000</Typography>
      </Box>
      <Box className="btcM_text_b callBtcBoxText">
        <Typography>Estimated Pml %</Typography>
        <Typography>Win Rate</Typography>
        <Typography>Break Even Price</Typography>
      </Box>
      <Box className="btcM_text_b">
        <Typography className='callCGText'>1.042%</Typography>
        <Typography className='callCRedText'>Medium</Typography>
        <Typography className='callCWText'>$31,000</Typography>
      </Box>
      <Box className="callCardBtnBox">
        <Box className="buyBtn">
          <Typography>Buy</Typography>
        </Box>
      </Box>
    </Box>
  )
}





export default function OptionsBeginners() {
  const [graphBtn, setGraphBtn] = useState(true)
  const [obfDrop, setObfdrop] = useState(false)
  const [obsDrop, setObsdrop] = useState(false)




  useEffect(() => {
    const handleClickOutside = (e) => {

      if (e?.target?.id !== "obfDrop") {
        setObfdrop(false);
      } else {
        if (obfDrop) {
          setObfdrop(false);
          return;
        } else {
          return;
        }
      }
      if (e?.target?.id !== "obsDrop") {
        setObsdrop(false);
      } else {
        if (obsDrop) {
          setObsdrop(false);
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
  const chartData2 = {
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

  console.log(chartData.options);

  return (
    <>
      <NavBar />
      <Box className="OptionsBeginners">
        <Box className="OBUsdBox">

          <Box px={1} onClick={() => setObfdrop(!obfDrop)} id="obfDrop" className="dropTab">
            <Typography id="obfDrop">BTC/USDT</Typography>
            {obfDrop ?
              <KeyboardArrowUpIcon id="obfDrop" className='dwonArrow' sx={{ color: "#fff" }} /> :
              <KeyboardArrowDownIcon id="obfDrop" className='dwonArrow' sx={{ color: "#fff" }} />
            }
            <Box id="obfDrop" sx={{ height: obfDrop ? "auto" : "0px" }} className="dropMenu mpusd">
              <Box id="obfDrop" className="dropMenuItem usdItem">
                <Typography id="obfDrop">Item 1</Typography>
              </Box>
              <Box id="obfDrop" className="dropMenuItem usdItem">
                <Typography id="obfDrop">Item 2</Typography>
              </Box>
              <Box id="obfDrop" className="dropMenuItem usdItem">
                <Typography id="obfDrop">Item 3</Typography>
              </Box>
              <Box id="obfDrop" className="dropMenuItem usdItem">
                <Typography id="obfDrop">Item 4</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="GTPTabeItem">
            <Typography>Price</Typography>
            <Typography>$70,000</Typography>
          </Box>
          <Box className="GTPTabeItem">
            <Typography>24 Change</Typography>
            <Typography>+578%</Typography>
          </Box>
          <Box className="GTPTabeItem">
            <Typography>Volume</Typography>
            <Typography>44k BTC</Typography>
          </Box>
          <Box className="GTPTabeItem">
            <Typography>24 High</Typography>
            <Typography>$71, 775</Typography>
          </Box>
          <Box className="GTPTabeItem">
            <Typography>24 Low</Typography>
            <Typography>$69, 755</Typography>
          </Box>


        </Box>


        <Box className="BTCGraphBox">
          <Box className="btcGHeader">
            <Box px={1} id="obsDrop" className="dropTab" onClick={() => setObsdrop(!obsDrop)}>
              <Typography id="obsDrop">BTC/USDT</Typography>
              {obsDrop ?
                <KeyboardArrowUpIcon id="obsDrop" className='dwonArrow' sx={{ color: "#fff" }} /> :
                <KeyboardArrowDownIcon id="obsDrop" className='dwonArrow' sx={{ color: "#fff" }} />
              }
              <Box id="obsDrop" sx={{ height: obsDrop ? "auto" : "0px" }} className="dropMenu mpusd">
                <Box id="obsDrop" className="dropMenuItem usdItem">
                  <Typography id="obsDrop">Item 1</Typography>
                </Box>
                <Box id="obsDrop" className="dropMenuItem usdItem">
                  <Typography id="obsDrop">Item 2</Typography>
                </Box>
                <Box id="obsDrop" className="dropMenuItem usdItem">
                  <Typography id="obsDrop">Item 3</Typography>
                </Box>
                <Box id="obsDrop" className="dropMenuItem usdItem">
                  <Typography id="obsDrop">Item 4</Typography>
                </Box>
              </Box>
            </Box>
            <Box className="btcGCenterHeader">
              <Box>
                {sBitIcon}
                <Typography ml={1} className='btc_header_P_text'>BTC Price</Typography>
              </Box>
              <Typography className='btcGCenterHeader_2Text'>$30,00</Typography>
              <Box>
                {redTriangle}
                <Typography ml={1} className='btc_Header_3Text'>30.922.9</Typography>
              </Box>
            </Box>
            <Box className="btc_header_btnBox">
              <Box sx={{ background: "#61FF71" }} className="SABbtn">
                <Typography>Buy/Long</Typography>
              </Box>
              <Box sx={{ background: "#F44336" }} className="SABbtn">
                <Typography>Sell/Short</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="CandlCartBox">
            <CandlestickChart chartData={chartData2} />
          </Box>
        </Box>



        <Box className="callandGrapghBox">
          <Box className="callBox">
            <Box className="callHeader">
              <Box>
                <Typography mr={1}>Buy A Call</Typography>{I_icon}
              </Box>
              <Box>
                <Box className="dropTabCalendar">
                  <LocalizationProvider sx={{ color: "#fff" }} dateAdapter={AdapterDayjs}>
                    <DatePicker className='datePicker' />
                  </LocalizationProvider>
                </Box>
              </Box>
            </Box>
            <Box className="callCardBox">
              {callCard()}
              {callCard()}
              {callCard()}
              {callCard()}
              {callCard()}
              {callCard()}
            </Box>
          </Box>
          <Box className="braph_Box">
            <Box className="spotGraphBox innerGraphBox obGraphBox">
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
        </Box>
      </Box>
    </>
  )
}
