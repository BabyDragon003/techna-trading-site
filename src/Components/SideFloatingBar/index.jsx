import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import "./style.css";

//images
import bitcoinLogo from "../../assets/img/bitcoin logo.png";

export default function SideFloatingBar() {
  const [chatSlide, setChatSlide] = useState(false);
  const [liqutation, setLiqutation] = useState(false);
  const [token, setToken] = useState(false);
  const [trad, setTrad] = useState(false);
  const [drop, setDrop] = useState(false);
  const [topGL, setTopGL] = useState(false);

  const handleSlide = (e) => {
    if (e?.target?.id === "chatSlide") {
      setChatSlide(!chatSlide);
      setLiqutation(false);
      setToken(false);
      setTrad(false);
      setDrop(false);
      setTopGL(false);
    }
    if (e?.target?.id === "liqutation") {
      setLiqutation(!liqutation);
      setChatSlide(false);
      setToken(false);
      setTrad(false);
      setDrop(false);
      setTopGL(false);
    }
    if (e?.target?.id === "token") {
      setToken(!token);
      setLiqutation(false);
      setChatSlide(false);
      setTrad(false);
      setDrop(false);
      setTopGL(false);
    }
    if (e?.target?.id === "trad") {
      setTrad(!trad);
      setToken(false);
      setLiqutation(false);
      setChatSlide(false);
      setDrop(false);
      setTopGL(false);
    }
    if (e?.target?.id === "drop") {
      setDrop(!drop);
      setTrad(false);
      setToken(false);
      setLiqutation(false);
      setChatSlide(false);
      setTopGL(false);
    }
    if (e?.target?.id === "topGL") {
      setTopGL(!topGL);
      setDrop(false);
      setTrad(false);
      setToken(false);
      setLiqutation(false);
      setChatSlide(false);
    }
  };

  return (
    <>
      <div className="tn_sid_bar_totset">
        <div className="tn_right_sid_bar">
          <i
            onClick={handleSlide}
            className={
              chatSlide
                ? "fab fa-bitcoin tn_right_sid_bar_i tn_right_sid_bar_iActive"
                : "fab fa-bitcoin tn_right_sid_bar_i"
            }
            id="chatSlide"
            data-navn="t1"
          ></i>
          <i
            onClick={handleSlide}
            className={
              liqutation
                ? "tn_right_sid_bar_iActive fas fa-volume tn_right_sid_bar_i"
                : "fas fa-volume tn_right_sid_bar_i"
            }
            id="liqutation"
            data-navn="t2"
          ></i>
          <i
            onClick={handleSlide}
            className={
              token
                ? "tn_right_sid_bar_iActive fas fa-presentation-screen tn_right_sid_bar_i"
                : "fas fa-presentation-screen tn_right_sid_bar_i"
            }
            id="token"
            data-navn="t3"
          ></i>
          <i
            onClick={handleSlide}
            className={
              trad
                ? "tn_right_sid_bar_iActive fas fa-chart-line-up tn_right_sid_bar_i"
                : "fas fa-chart-line-up tn_right_sid_bar_i"
            }
            id="trad"
            data-navn="t4"
          ></i>
          <i
            onClick={handleSlide}
            className={
              drop
                ? "tn_right_sid_bar_iActive fas fa-droplet tn_right_sid_bar_i"
                : "fas fa-droplet tn_right_sid_bar_i"
            }
            id="drop"
            data-navn="t5"
          ></i>
          <i
            onClick={handleSlide}
            className={
              topGL
                ? "tn_right_sid_bar_iActive fas fa-messages-question tn_right_sid_bar_i"
                : "fas fa-messages-question tn_right_sid_bar_i"
            }
            id="topGL"
            data-navn="t6"
          ></i>
        </div>
        <div
          className={
            chatSlide
              ? "tn_right_sid_bar_tab"
              : "tn_right_sid_bar_tab slideOff "
          }
          data-navn="t1"
        >
          <div className="tn_right_sid_bar_tab_innn">
            <div className="tn_right_sid_bar_tab_hd">
              Chat
              {/* <i className="tn_right_sid_bar_tab_cls_ico fas fa-times"></i> */}
            </div>
            <div
              className="tn_rs_chatbox mCustomScrollbar"
              data-mcs-theme="minimal"
            >
              <Scrollbars className="sideBarScrollBox">
                <div className="tn_rs_chatbox_in">
                  <div className="tn_rs_chatbox_chatting_out">
                    <div className="tn_rs_chatbox_chatting">
                      Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                      <div className="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                    </div>
                  </div>
                  <div className="tn_rs_chatbox_chatting_out">
                    <div className="tn_rs_chatbox_chatting">
                      Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                      <div className="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                    </div>
                  </div>
                  <div className="tn_rs_chatbox_chatting_out tn_rs_chatbox_chatting_out_left">
                    <div className="tn_rs_chatbox_chatting">
                      Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                      <div className="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                    </div>
                  </div>
                  <div className="tn_rs_chatbox_chatting_out">
                    <div className="tn_rs_chatbox_chatting">
                      Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                      <div className="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                    </div>
                  </div>
                  <div className="tn_rs_chatbox_chatting_out tn_rs_chatbox_chatting_out_left">
                    <div className="tn_rs_chatbox_chatting">
                      Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                      <div className="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                    </div>
                  </div>
                  <div className="tn_rs_chatbox_chatting_out">
                    <div className="tn_rs_chatbox_chatting">
                      Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                      <div className="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                    </div>
                  </div>
                  <div className="tn_rs_chatbox_chatting_out tn_rs_chatbox_chatting_out_left">
                    <div className="tn_rs_chatbox_chatting">
                      Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                      <div className="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                    </div>
                  </div>
                  <div className="tn_rs_chatbox_chatting_out">
                    <div className="tn_rs_chatbox_chatting">
                      Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                      <div className="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                    </div>
                  </div>
                  <div className="tn_rs_chatbox_chatting_out">
                    <div className="tn_rs_chatbox_chatting">
                      Lorem ipsum donea kdjhfkjhd sdfhdfkjhdf sdfd sfsdfsdfsdf
                      <div className="tn_rs_chatbox_chatting_date">1.05 Pm</div>
                    </div>
                  </div>
                </div>
              </Scrollbars>
            </div>
            <div className="tn_rs_chatbox_input">
              <a href="#">
                <i className="tn_rs_chatbox_input_in_ico fas fa-paper-plane-top"></i>
              </a>
              <input
                type="text"
                placeholder="Type here"
                className="tn_rs_chatbox_input_in"
              />
            </div>
          </div>
        </div>
        <div
          className={
            liqutation
              ? "tn_right_sid_bar_tab"
              : "tn_right_sid_bar_tab slideOff"
          }
          data-navn="t2"
        >
          <div className="tn_right_sid_bar_tab_hd">
            Liqutation
            {/* <i className="tn_right_sid_bar_tab_cls_ico fas fa-times"></i> */}
          </div>
          <div
            className="tn_rs_ld_set_scrl mCustomScrollbar"
            data-mcs-theme="minimal"
          >
            <Scrollbars className="sideBarScrollBox">
              <div className="tn_rs_ld_set">
                <div className="row">
                  <div className="col-auto">
                    <img src={bitcoinLogo} className="tn_rs_ld_ico" alt="" />
                  </div>
                  <div className="col">
                    <div className="srk srk_fs_1dot5 srk_fw_800 srk_clr_white_1 srk_mb_0dot8">
                      $ 6767.45
                    </div>
                    <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1">
                      ~ $ 6767.45
                    </div>
                  </div>
                </div>
              </div>

              <div className="tn_rs_ld_set">
                <div className="row">
                  <div className="col-auto">
                    <img src={bitcoinLogo} className="tn_rs_ld_ico" alt="" />
                  </div>
                  <div className="col">
                    <div className="srk srk_fs_1dot5 srk_fw_800 srk_clr_white_1 srk_mb_0dot8">
                      $ 6767.45
                    </div>
                    <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1">
                      ~ $ 6767.45
                    </div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_ld_set">
                <div className="row">
                  <div className="col-auto">
                    <img src={bitcoinLogo} className="tn_rs_ld_ico" alt="" />
                  </div>
                  <div className="col">
                    <div className="srk srk_fs_1dot5 srk_fw_800 srk_clr_white_1 srk_mb_0dot8">
                      $ 6767.45
                    </div>
                    <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1">
                      ~ $ 6767.45
                    </div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_ld_set">
                <div className="row">
                  <div className="col-auto">
                    <img src={bitcoinLogo} className="tn_rs_ld_ico" alt="" />
                  </div>
                  <div className="col">
                    <div className="srk srk_fs_1dot5 srk_fw_800 srk_clr_white_1 srk_mb_0dot8">
                      $ 6767.45
                    </div>
                    <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1">
                      ~ $ 6767.45
                    </div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_ld_set">
                <div className="row">
                  <div className="col-auto">
                    <img src={bitcoinLogo} className="tn_rs_ld_ico" alt="" />
                  </div>
                  <div className="col">
                    <div className="srk srk_fs_1dot5 srk_fw_800 srk_clr_white_1 srk_mb_0dot8">
                      $ 6767.45
                    </div>
                    <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1">
                      ~ $ 6767.45
                    </div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_ld_set">
                <div className="row">
                  <div className="col-auto">
                    <img src={bitcoinLogo} className="tn_rs_ld_ico" alt="" />
                  </div>
                  <div className="col">
                    <div className="srk srk_fs_1dot5 srk_fw_800 srk_clr_white_1 srk_mb_0dot8">
                      $ 6767.45
                    </div>
                    <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1">
                      ~ $ 6767.45
                    </div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_ld_set">
                <div className="row">
                  <div className="col-auto">
                    <img src={bitcoinLogo} className="tn_rs_ld_ico" alt="" />
                  </div>
                  <div className="col">
                    <div className="srk srk_fs_1dot5 srk_fw_800 srk_clr_white_1 srk_mb_0dot8">
                      $ 6767.45
                    </div>
                    <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1">
                      ~ $ 6767.45
                    </div>
                  </div>
                </div>
              </div>
            </Scrollbars>
          </div>
        </div>
        <div
          className={
            token ? "tn_right_sid_bar_tab" : "tn_right_sid_bar_tab slideOff"
          }
          data-navn="t3"
        >
          <div className="tn_right_sid_bar_tab_hd mb-0">
            {/* <i className="tn_right_sid_bar_tab_cls_ico fas fa-times"></i> */}
          </div>
          <select className="tn_rs_chs_select">
            <option value="0">Choose Token</option>
            <option value="0">BTC</option>
            <option value="0">ETH</option>
          </select>
          <div className="row g-2 srk_mb_1">
            <div className="col-4">
              {" "}
              <div className="tn_rs_chs_txt">SYMBOL</div>
            </div>
            <div className="col-4 text-center">
              {" "}
              <div className="tn_rs_chs_txt">OI</div>
            </div>
            <div className="col-4 text-end">
              {" "}
              <div className="tn_rs_chs_txt">RATE</div>
            </div>
          </div>
          <div
            className="tn_rs_chs_list_scrl2 mCustomScrollbar"
            data-mcs-theme="minimal"
          >
            <Scrollbars className="sideBarScrollBox">
              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-4">
                    {" "}
                    <div className="tn_rs_chs_txt">103.332</div>
                  </div>
                  <div className="col-4 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">103.332</div>
                  </div>
                  <div className="col-4 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt">- 24%</div>
                  </div>
                </div>
              </div>

              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-4">
                    {" "}
                    <div className="tn_rs_chs_txt">103.332</div>
                  </div>
                  <div className="col-4 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">103.332</div>
                  </div>
                  <div className="col-4 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt">- 24%</div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-4">
                    {" "}
                    <div className="tn_rs_chs_txt">103.332</div>
                  </div>
                  <div className="col-4 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">103.332</div>
                  </div>
                  <div className="col-4 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt">- 24%</div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-4">
                    {" "}
                    <div className="tn_rs_chs_txt">103.332</div>
                  </div>
                  <div className="col-4 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">103.332</div>
                  </div>
                  <div className="col-4 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt">- 24%</div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-4">
                    {" "}
                    <div className="tn_rs_chs_txt">103.332</div>
                  </div>
                  <div className="col-4 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">103.332</div>
                  </div>
                  <div className="col-4 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt">- 24%</div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-4">
                    {" "}
                    <div className="tn_rs_chs_txt">103.332</div>
                  </div>
                  <div className="col-4 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">103.332</div>
                  </div>
                  <div className="col-4 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt">- 24%</div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-4">
                    {" "}
                    <div className="tn_rs_chs_txt">103.332</div>
                  </div>
                  <div className="col-4 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">103.332</div>
                  </div>
                  <div className="col-4 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt">- 24%</div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-4">
                    {" "}
                    <div className="tn_rs_chs_txt">103.332</div>
                  </div>
                  <div className="col-4 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">103.332</div>
                  </div>
                  <div className="col-4 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt">- 24%</div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-4">
                    {" "}
                    <div className="tn_rs_chs_txt">103.332</div>
                  </div>
                  <div className="col-4 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">103.332</div>
                  </div>
                  <div className="col-4 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt">- 24%</div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-4">
                    {" "}
                    <div className="tn_rs_chs_txt">103.332</div>
                  </div>
                  <div className="col-4 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">103.332</div>
                  </div>
                  <div className="col-4 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt">- 24%</div>
                  </div>
                </div>
              </div>
            </Scrollbars>
          </div>
        </div>
        <div
          className={
            trad ? "tn_right_sid_bar_tab" : "tn_right_sid_bar_tab slideOff"
          }
          data-navn="t4"
        >
          <div className="tn_right_sid_bar_tab_hd mb-0">
            {/* <i className="tn_right_sid_bar_tab_cls_ico fas fa-times"></i> */}
          </div>
          <div className="row g-2 srk_mb_1 tn_right_sid_bar_tab_tbhd">
            <div className="col-3">
              {" "}
              <div className="tn_rs_chs_txt">SYMBOL</div>
            </div>
            <div className="col-3 text-center">
              {" "}
              <div className="tn_rs_chs_txt">Last</div>
            </div>
            <div className="col-3 text-center">
              {" "}
              <div className="tn_rs_chs_txt">%</div>
            </div>
            <div className="col-3 text-end">
              {" "}
              <div className="tn_rs_chs_txt">Vol</div>
            </div>
          </div>
          <div
            className="tn_rs_chs_list_scrl mCustomScrollbar"
            data-mcs-theme="minimal"
          >
            <Scrollbars className="sideBarScrollBox">
              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-3">
                    {" "}
                    <img
                      src={bitcoinLogo}
                      className="tn_hh_chs_list_ico"
                      alt=""
                    />
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">133.222</div>
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">20</div>
                  </div>
                  <div className="col-3 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt srk_fw_800">- 30%</div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-3">
                    {" "}
                    <img
                      src={bitcoinLogo}
                      className="tn_hh_chs_list_ico"
                      alt=""
                    />
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">133.222</div>
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">20</div>
                  </div>
                  <div className="col-3 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt srk_fw_800">- 30%</div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-3">
                    {" "}
                    <img
                      src={bitcoinLogo}
                      className="tn_hh_chs_list_ico"
                      alt=""
                    />
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">133.222</div>
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">20</div>
                  </div>
                  <div className="col-3 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt srk_fw_800">- 30%</div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-3">
                    {" "}
                    <img
                      src={bitcoinLogo}
                      className="tn_hh_chs_list_ico"
                      alt=""
                    />
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">133.222</div>
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">20</div>
                  </div>
                  <div className="col-3 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt srk_fw_800">- 30%</div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-3">
                    {" "}
                    <img
                      src={bitcoinLogo}
                      className="tn_hh_chs_list_ico"
                      alt=""
                    />
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">133.222</div>
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">20</div>
                  </div>
                  <div className="col-3 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt srk_fw_800">- 30%</div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-3">
                    {" "}
                    <img
                      src={bitcoinLogo}
                      className="tn_hh_chs_list_ico"
                      alt=""
                    />
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">133.222</div>
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">20</div>
                  </div>
                  <div className="col-3 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt srk_fw_800">- 30%</div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-3">
                    {" "}
                    <img
                      src={bitcoinLogo}
                      className="tn_hh_chs_list_ico"
                      alt=""
                    />
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">133.222</div>
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">20</div>
                  </div>
                  <div className="col-3 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt srk_fw_800">- 30%</div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-3">
                    {" "}
                    <img
                      src={bitcoinLogo}
                      className="tn_hh_chs_list_ico"
                      alt=""
                    />
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">133.222</div>
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">20</div>
                  </div>
                  <div className="col-3 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt srk_fw_800">- 30%</div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-3">
                    {" "}
                    <img
                      src={bitcoinLogo}
                      className="tn_hh_chs_list_ico"
                      alt=""
                    />
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">133.222</div>
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">20</div>
                  </div>
                  <div className="col-3 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt srk_fw_800">- 30%</div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-3">
                    {" "}
                    <img
                      src={bitcoinLogo}
                      className="tn_hh_chs_list_ico"
                      alt=""
                    />
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">133.222</div>
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">20</div>
                  </div>
                  <div className="col-3 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt srk_fw_800">- 30%</div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-3">
                    {" "}
                    <img
                      src={bitcoinLogo}
                      className="tn_hh_chs_list_ico"
                      alt=""
                    />
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">133.222</div>
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">20</div>
                  </div>
                  <div className="col-3 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt srk_fw_800">- 30%</div>
                  </div>
                </div>
              </div>
              <div className="tn_rs_chs_list">
                <div className="row g-2">
                  <div className="col-3">
                    {" "}
                    <img
                      src={bitcoinLogo}
                      className="tn_hh_chs_list_ico"
                      alt=""
                    />
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">133.222</div>
                  </div>
                  <div className="col-3 text-center">
                    {" "}
                    <div className="tn_rs_chs_txt">20</div>
                  </div>
                  <div className="col-3 text-end">
                    {" "}
                    <div className="tn_rs_chs_txt srk_fw_800">- 30%</div>
                  </div>
                </div>
              </div>
            </Scrollbars>
          </div>
        </div>
        <div
          className={
            drop ? "tn_right_sid_bar_tab" : "tn_right_sid_bar_tab slideOff"
          }
          data-navn="t5"
        >
          <div
            className="tn_rs_ld_set_scrl tn_right_sid_bar_tab_t5 mCustomScrollbar"
            data-mcs-theme="minimal"
          >
            <Scrollbars className="sideBarScrollBox">
              <div className="tn_rs_ld_set">
                <div className="srk srk_fs_1dot4 srk_fw_600 srk_clr_white_1 srk_mb_0dot6">
                  {" "}
                  A Simple & secure way to buy Bitcon
                </div>
                <div className="srk srk_fs_1 srk_fw_400 srk_clr_bright_green ">
                  {" "}
                  A Simple & secure way to buy Bitcon
                </div>
              </div>
              <div className="tn_rs_ld_set">
                <div className="srk srk_fs_1dot4 srk_fw_600 srk_clr_white_1 srk_mb_0dot6">
                  {" "}
                  A Simple & secure way to buy Bitcon
                </div>
                <div className="srk srk_fs_1 srk_fw_400 srk_clr_bright_green ">
                  {" "}
                  A Simple & secure way to buy Bitcon
                </div>
              </div>
              <div className="tn_rs_ld_set">
                <div className="srk srk_fs_1dot4 srk_fw_600 srk_clr_white_1 srk_mb_0dot6">
                  {" "}
                  A Simple & secure way to buy Bitcon
                </div>
                <div className="srk srk_fs_1 srk_fw_400 srk_clr_bright_green ">
                  {" "}
                  A Simple & secure way to buy Bitcon
                </div>
              </div>
              <div className="tn_rs_ld_set">
                <div className="srk srk_fs_1dot4 srk_fw_600 srk_clr_white_1 srk_mb_0dot6">
                  {" "}
                  A Simple & secure way to buy Bitcon
                </div>
                <div className="srk srk_fs_1 srk_fw_400 srk_clr_bright_green ">
                  {" "}
                  A Simple & secure way to buy Bitcon
                </div>
              </div>
            </Scrollbars>
          </div>
        </div>
        <div
          className={
            topGL ? "tn_right_sid_bar_tab" : "tn_right_sid_bar_tab slideOff"
          }
          data-navn="t6"
        >
          <Scrollbars className="sideBarScrollBox">
            <div className="tn_right_sid_bar_tab_hd">
              Top Gainers
              {/* <i className="tn_right_sid_bar_tab_cls_ico fas fa-times"></i> */}
            </div>
            <div className="tn_rs_ld_set srk_mb_0dot8">
              <div className="row srk_mb_1">
                <div className="col-2">
                  <img
                    src={bitcoinLogo}
                    className="tn_hh_chs_list_ico"
                    alt=""
                  />
                </div>
                <div className="col-5 text-center">
                  {" "}
                  <div className="tn_rs_chs_txt">20</div>
                </div>
                <div className="col-5 text-end">
                  {" "}
                  <div className="tn_rs_chs_txt srk_fw_800">- 30%</div>
                </div>
              </div>
              <div className="row srk_mb_0dot8">
                <div className="col-2">
                  <img
                    src={bitcoinLogo}
                    className="tn_hh_chs_list_ico"
                    alt=""
                  />
                </div>
                <div className="col-5 text-center">
                  {" "}
                  <div className="tn_rs_chs_txt">20</div>
                </div>
                <div className="col-5 text-end">
                  {" "}
                  <div className="tn_rs_chs_txt srk_fw_800">- 30%</div>
                </div>
              </div>
              <div className="row srk_mb_0dot8">
                <div className="col-2">
                  <img
                    src={bitcoinLogo}
                    className="tn_hh_chs_list_ico"
                    alt=""
                  />
                </div>
                <div className="col-5 text-center">
                  {" "}
                  <div className="tn_rs_chs_txt">20</div>
                </div>
                <div className="col-5 text-end">
                  {" "}
                  <div className="tn_rs_chs_txt srk_fw_800">- 30%</div>
                </div>
              </div>
              <div className="row ">
                <div className="col-2">
                  <img
                    src={bitcoinLogo}
                    className="tn_hh_chs_list_ico"
                    alt=""
                  />
                </div>
                <div className="col-5 text-center">
                  {" "}
                  <div className="tn_rs_chs_txt">20</div>
                </div>
                <div className="col-5 text-end">
                  {" "}
                  <div className="tn_rs_chs_txt srk_fw_800">- 30%</div>
                </div>
              </div>
            </div>
            <div className="tn_right_sid_bar_tab_hd srk_mt_2">Top losers</div>
            <div className="tn_rs_ld_set mb-0">
              <div className="row srk_mb_0dot8">
                <div className="col-2">
                  <img
                    src={bitcoinLogo}
                    className="tn_hh_chs_list_ico"
                    alt=""
                  />
                </div>
                <div className="col-5 text-center">
                  {" "}
                  <div className="tn_rs_chs_txt">20</div>
                </div>
                <div className="col-5 text-end">
                  {" "}
                  <div className="tn_rs_chs_txt srk_fw_800">- 30%</div>
                </div>
              </div>
              <div className="row srk_mb_0dot8">
                <div className="col-2">
                  <img
                    src={bitcoinLogo}
                    className="tn_hh_chs_list_ico"
                    alt=""
                  />
                </div>
                <div className="col-5 text-center">
                  {" "}
                  <div className="tn_rs_chs_txt">20</div>
                </div>
                <div className="col-5 text-end">
                  {" "}
                  <div className="tn_rs_chs_txt srk_fw_800">- 30%</div>
                </div>
              </div>
              <div className="row srk_mb_0dot8">
                <div className="col-2">
                  <img
                    src={bitcoinLogo}
                    className="tn_hh_chs_list_ico"
                    alt=""
                  />
                </div>
                <div className="col-5 text-center">
                  {" "}
                  <div className="tn_rs_chs_txt">20</div>
                </div>
                <div className="col-5 text-end">
                  {" "}
                  <div className="tn_rs_chs_txt srk_fw_800">- 30%</div>
                </div>
              </div>
              <div className="row srk_mb_0dot8">
                <div className="col-2">
                  <img
                    src={bitcoinLogo}
                    className="tn_hh_chs_list_ico"
                    alt=""
                  />
                </div>
                <div className="col-5 text-center">
                  {" "}
                  <div className="tn_rs_chs_txt">20</div>
                </div>
                <div className="col-5 text-end">
                  {" "}
                  <div className="tn_rs_chs_txt srk_fw_800">- 30%</div>
                </div>
              </div>
              <div className="row ">
                <div className="col-2">
                  <img
                    src={bitcoinLogo}
                    className="tn_hh_chs_list_ico"
                    alt=""
                  />
                </div>
                <div className="col-5 text-center">
                  {" "}
                  <div className="tn_rs_chs_txt">20</div>
                </div>
                <div className="col-5 text-end">
                  {" "}
                  <div className="tn_rs_chs_txt srk_fw_800">- 30%</div>
                </div>
              </div>
            </div>
          </Scrollbars>
        </div>
      </div>
    </>
  );
}
