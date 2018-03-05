import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { sBitIcon } from "../../assets/Data"

import "./style.css"


//components
import SideFloatingBar from "../../Components/SideFloatingBar"
import HomeNav from "../Home/HomeNav"
import Footer from "../../Components/Footer"

//images

import icoeth from "../../assets/img/ico-eth.png"
import icotcn from "../../assets/img/ico-tcn.png"
import ETHI from "../../assets/Images/E4bc3598cd3721b16fa31a60ab91c0b04.png";
import USDT from "../../assets/Images/USDT icon.png"
import USDC from "../../assets/Images/USDC.png"
import BUSD from "../../assets/Images/BUSD.png"
import MATIC from "../../assets/Images/MATIC.png"
import BNB from "../../assets/Images/BNB.png"


export default function TokemSale() {
  const [sideNav, setSideNav] = useState(false)
  const [mpusd, setMpusd] = useState(false)
  const [mpusdVal, setMpusdVal] = useState("ETH")



  const handelDropContaint = () => {
    if (mpusdVal === "ETH") {
      return (
        <>
          <img id="mpusd" src={ETHI} />
        </>
      )
    }
    if (mpusdVal === "USDT") {
      return (
        <>
          <img id="mpusd" src={USDT} />
        </>
      )
    }
    if (mpusdVal === "USDC") {
      return (
        <>
          <img id="mpusd" src={USDC} />
        </>
      )
    }
    if (mpusdVal === "BUSD") {
      return (
        <>
          <img id="mpusd" src={BUSD} />
        </>
      )
    }
    if (mpusdVal === "MATIC") {
      return (
        <>
          <img id="mpusd" src={MATIC} />
        </>
      )
    }
    if (mpusdVal === "BNB") {
      return (
        <>
          <img id="mpusd" src={BNB} />
        </>
      )
    }

  }


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e?.target?.id !== "spotSM") {

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

      };
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };

  }, [])



  return (
    <>
      <SideFloatingBar />
      <div className="s_web_wrapper">
        <div className="s_hm_bg_line_token"></div>
        <div className="s_web_wrapper_in">
          <HomeNav setSideNav={setSideNav} sideNav={sideNav} />
          <section className="ts_mid_sec">
            <div className="container tokemInnerContainer">
              <h1 className="srk_fw_700 ts_hm1_sec_hdng_token w-100 text-center srk_mb_2dot5">Earn More With TechNA</h1>
              <div className="row g-5 align-items-center">
                <div className="col-md-7">
                  <div className="ts_comn_pnl tokemInputMainBox">
                    <div className="srk srk_fs_1dot5 srk_fw_600 srk_clr_white_1 srk_mb_1 w-100 text-center">
                      TechNa Swap</div>
                    <div className="srk srk_fs_1 srk_fw_300 srk_clr_white_1 srk_mb_2dot6 w-100 text-center">Buy
                      TCN on the polygon network</div>
                    <div className="ts_input_set">
                      <div className="ts_input_lbl TokemScrollOuterBox">
                        <Box className="usdTHeader">
                          <Box onClick={() => setMpusd(!mpusd)} id="mpusd" className="usdSelectorBox2">
                            {handelDropContaint()}
                            <Typography id="mpusd">{mpusdVal}</Typography>
                            {mpusd ?
                              <KeyboardArrowUpIcon id="mpusd" className='dwonArrow' sx={{ color: "#fff" }} /> :
                              <KeyboardArrowDownIcon id="mpusd" className='dwonArrow' sx={{ color: "#fff" }} />
                            }
                            <Box id="mpusd" sx={{ height: mpusd ? "auto" : "0px" }} className="dropMenu mpusd">
                              <Box onClick={(e) => setMpusdVal(e.target.innerText)} id="mpusd" className="dropMenuItem usdItem">
                                <img id="mpusd" src={ETHI} />
                                <Typography id="mpusd">ETH</Typography>
                              </Box>
                              <Box onClick={(e) => setMpusdVal(e.target.innerText)} id="mpusd" className="dropMenuItem usdItem">
                                <img id="mpusd" src={USDT} />
                                <Typography id="mpusd">USDT</Typography>
                              </Box>
                              <Box onClick={(e) => setMpusdVal(e.target.innerText)} id="mpusd" className="dropMenuItem usdItem">
                                <img id="mpusd" src={USDC} />
                                <Typography id="mpusd">USDC</Typography>
                              </Box>
                              <Box onClick={(e) => setMpusdVal(e.target.innerText)} id="mpusd" className="dropMenuItem usdItem">
                                <img id="mpusd" src={BUSD} />
                                <Typography id="mpusd">BUSD</Typography>
                              </Box>
                              <Box onClick={(e) => setMpusdVal(e.target.innerText)} id="mpusd" className="dropMenuItem usdItem">
                                <img id="mpusd" src={MATIC} />
                                <Typography id="mpusd">MATIC</Typography>
                              </Box>
                              <Box onClick={(e) => setMpusdVal(e.target.innerText)} id="mpusd" className="dropMenuItem usdItem">
                                <img id="mpusd" src={BNB} />
                                <Typography id="mpusd">BNB</Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </div>
                      <div className='tokemFInput'>
                        <input type="text" name="" id="" className="ts_input_box" placeholder="0.00" />
                      </div>
                    </div>
                    <div className="ts_input_set ">
                      <div className="ts_input_lbl"><img src={icotcn} alt="" />
                        <span className="ts_input_lbl_select">TCN</span>
                      </div>
                      <input type="text" name="" id="" className="ts_input_box" placeholder="0.00" />
                    </div>
                    <div className="row justify-content-center srk_mt_2dot6">
                      <div className="col-7 connectWalBtn">
                        <a href="#" className="ts_btn_outline w-100">Connect Wallet</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 ts_tok_lineset_out">
                  <div className="srk srk_fs_1dot5 srk_fw_700 srk_clr_white_1 srk_mb_2">Phase 0</div>
                  <div className="ts_tok_lineset">
                    <div className="row">
                      <div className="col-7">
                        <div className="srk srk_fs_1dot1 srk_clr_white_1 ">Current Token Price
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="srk srk_fs_1dot1 srk_fw_700 srk_clr_white_1 w-100 text-end">0.00</div>
                      </div>
                    </div>
                  </div>
                  <div className="ts_tok_lineset">
                    <div className="row">
                      <div className="col-7">
                        <div className="srk srk_fs_1dot1 srk_clr_white_1 ">Token Balance
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="srk srk_fs_1dot1 srk_fw_700 srk_clr_white_1 w-100 text-end">0.00</div>
                      </div>
                    </div>
                  </div>
                  <div className="ts_tok_lineset">
                    <div className="row">
                      <div className="col-7">
                        <div className="srk srk_fs_1dot1 srk_clr_white_1 ">Sold Token
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="srk srk_fs_1dot1 srk_fw_700 srk_clr_white_1 w-100 text-end">0.00</div>
                      </div>
                    </div>
                  </div>
                  <div className="ts_tok_lineset">
                    <div className="row">
                      <div className="col-7">
                        <div className="srk srk_fs_1dot1 srk_clr_white_1 ">Token
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="srk srk_fs_1dot1 srk_fw_700 srk_clr_white_1 w-100 text-end">0x89757</div>
                      </div>
                    </div>
                  </div>
                  <div className="ts_tok_lineset">
                    <div className="row">
                      <div className="col-7">
                        <div className="srk srk_fs_1dot1 srk_clr_white_1 ">Presale
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="srk srk_fs_1dot1 srk_fw_700 srk_clr_white_1 w-100 text-end">0x61...f0c73</div>
                      </div>
                    </div>
                  </div>
                  <div className="srk srk_fs_1dot5 srk_fw_700 srk_clr_white_1 srk_mt_2dot9 srk_mb_1dot4">Your
                    Refferal Link</div>
                  <a href="#"
                    className="ts_tok_undl srk srk_fs_1 srk_fw_700 srk_clr_white_1 srk_mb_1dot5">https://technasale.netlify.app/?ref=null</a>
                  <div className="row justify-content-center srk_mt_2dot6">
                    <div className="col-6">
                      <a href="#" className="ts_btn_outline ts_btn_outline_n w-100">Copy</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section style={{ textDecoration: "underline", backdropFilter: 'blur(15px)' }} className="ts_bot_sec">Need Help ? Join Us At our <a href="#">Discord</a> Community</section>
          <Footer />
        </div>
      </div>
    </>
  )
}
