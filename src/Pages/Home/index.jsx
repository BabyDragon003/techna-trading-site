import React, { useState } from "react";
import "./style.css";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//components
import SideFloatingBar from "../../Components/SideFloatingBar";
import HomeNav from "./HomeNav";
import Footer from "../../Components/Footer";

//images

import homeico1 from "../../assets/img/home-ico-1.png";
import homeico2 from "../../assets/img/home-ico-2.png";
import homeico3 from "../../assets/img/home-ico-3.png";
import tmico6 from "../../assets/img/tmico-6.png";
import homefaqsidimg from "../../assets/img/home-faq-sidimg.png";
import com1 from "../../assets/img/com-1.png";
import com2 from "../../assets/img/com-2.png";
import com3 from "../../assets/img/com-3.png";
import com4 from "../../assets/img/com-4.png";
import com5 from "../../assets/img/com-5.png";

export default function Home() {
  const [sideNav, setSideNav] = useState(false);

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <SideFloatingBar />
      <div className="s_web_wrapper">
        <div className="s_hm_bg_line"></div>
        <div className="s_web_wrapper_in">
          <HomeNav setSideNav={setSideNav} sideNav={sideNav} />
          <section className=" ts_hm1_sec">
            <div className="container">
              <div className="row g-5">
                <div className="col-md-6">
                  <h1 className="srk_fw_700 ts_hm1_sec_hdng">
                    TRADE SMARTER <br />
                    WITH TECHNA
                  </h1>
                  <p className="srk srk_fs_1 srk_clr_white_1 srk_fw_300 srk_ln_1dot9 srk_mb_1dot9 ts_hm1_sec_hdng_p">
                    Maximize Your Trading Potential with TechNa's AI-Driven
                    Financial Devices Hybrid Blockchain, and Social Network for
                    Traders.
                  </p>
                  <div className="row srk_mb_1dot9">
                    <div className="col-6"><a href="/spot" className="ts_btn_comn w-100 ts_normal_font">
                      <img src={homeico1} className="ts_btn_comn_ico" alt="" /> Demo</a></div>
                    <div className="col-6"><a href="/tokem-sale" className="ts_btn_comn w-100 ts_normal_font">
                      <img src={homeico2} className="ts_btn_comn_ico" alt="" /> Buy TCN</a></div>
                  </div>
                  <div className="ts_hm1_shap1">
                    <div className="row w-100 g-5">
                      <div className="col">
                        <div className="srk srk_fs_2 srk_fw_400 srk_mb_1dot3 srk_clr_white_1 ts_normal_font">
                          TechNa (TCN)
                        </div>
                        <div className="srk srk_fs_3dot5 srk_fw_600   ts_normal_font srk_clr_brightgrn">
                          $1.324
                        </div>
                      </div>
                      <div className="col-auto">
                        <img
                          src={homeico3}
                          className="img-fluid ts_hm1_shap1_ico"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
            <div className="s_hm_botgirl"></div>
          </section>
          <section id='products' className=" ts_hm2_sec">
            <div className="container">
              <div className="ts_pg_sec_hdng_set text-center" style={{backdropFilter: 'blur(5px)'}}>
                <div className="ts_pg_sec_hdng">Products</div>
                <div className="ts_pg_sec_hdng_p"></div>
              </div>
              <div className="row g-5 mt-5">
                <div className="col-md-4">
                  <div className="ts_hm2_dv_2_out">
                    <div className="ts_hm2_dv_2">
                      <div className="ts_hm2_dv_2_in">
                        <div className="ts_hm2_dv_2_vid_out cursor-pointer">
                          <img
                            src={tmico6}
                            className="ts_hm2_dv_2_vid_in"
                            alt=""
                          />
                        </div>
                        <div className="srk srk_fs_1dot5 srk_clr_white_1 srk_fw_800 srk_mb_0dot5">
                          Hedging
                        </div>
                        <div className="srk srk_fs_0dot9 srk_clr_white_1 srk_fw_300 srk_ln_1dot6 pr65">
                          The AI-driven financial platform trader, Trade smarter
                          with our hedging tools and user-firendly devices.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="ts_hm2_dv_2">
                    <div className="ts_hm2_dv_2_vid_out">
                      <img src={tmico6} className="ts_hm2_dv_2_vid_in" alt="" />
                    </div>
                    <div className="srk srk_fs_1dot5 srk_clr_white_1 srk_fw_800 srk_mb_0dot5">
                      Hedging
                    </div>
                    <div className="srk srk_fs_0dot9 srk_clr_white_1 srk_fw_300 srk_ln_1dot6 pr65">
                      The AI-driven financial platform trader, Trade smarter
                      with our hedging tools and user-firendly devices.
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="ts_hm2_dv_2">
                    <div className="ts_hm2_dv_2_vid_out cursor-pointer">
                      <img src={tmico6} className="ts_hm2_dv_2_vid_in" alt="" />
                    </div>
                    <div className="srk srk_fs_1dot5 srk_clr_white_1 srk_fw_800 srk_mb_0dot5">
                      Hedging
                    </div>
                    <div className="srk srk_fs_0dot9 srk_clr_white_1 srk_fw_300 srk_ln_1dot6 pr65">
                      The AI-driven financial platform trader, Trade smarter
                      with our hedging tools and user-firendly devices.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id='roadmap' className=" ts_hm3_sec">
            <div className="container">
              <div className="ts_pg_sec_hdng_set text-center" style={{backdropFilter: 'blur(5px)'}}>
                <div className="ts_pg_sec_hdng">Roadmap</div>
                <div className="ts_pg_sec_hdng_p">
                  The largest and unique Super rare NFT marketplace
                  <br /> For crypto-collectibles
                </div>
              </div>
              <div className="row g-0 position-relative">
                <div className="ts_hm_road_cntr_line"></div>
                <div className="col-md-6">
                  <div className="ts_pg_road_dv ts_pg_road_dv_bg_1">
                    <div className="ts_pg_road_dvin">
                      <div className="srk srk_fs_1dot4 srk_fw_400 srk_mb_1 srk_clr_white_1 text-center">
                        January
                      </div>
                      <div className="srk srk_fs_2dot4 srk_fw_800 srk_mb_0dot5 srk_clr_white_1 ">
                        Brief
                      </div>
                      <div className="srk srk_fs_1dot2 srk_fw_300  srk_clr_white_0dot8 srk_ln_1dot4">
                        Lorem ipsum dolor sit amet consectetur. Elit massa erat
                        vitae non semper quis. Morbi sed aliquet donec failisis
                        senectus eget.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ts_pg_road_dv ts_pg_road_dv_bg_2">
                    <div className="ts_pg_road_dvin">
                      <div className="srk srk_fs_1dot4 srk_fw_400 srk_mb_1 srk_clr_white_1 text-center">
                        January
                      </div>
                      <div className="srk srk_fs_2dot4 srk_fw_800 srk_mb_0dot5 srk_clr_white_1 ">
                        Brief
                      </div>
                      <div className="srk srk_fs_1dot2 srk_fw_300  srk_clr_white_0dot8 srk_ln_1dot4">
                        Lorem ipsum dolor sit amet consectetur. Elit massa erat
                        vitae non semper quis. Morbi sed aliquet donec failisis
                        senectus eget.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ts_pg_road_dv ts_pg_road_dv_bg_1">
                    <div className="ts_pg_road_dvin">
                      <div className="srk srk_fs_1dot4 srk_fw_400 srk_mb_1 srk_clr_white_1 text-center">
                        January
                      </div>
                      <div className="srk srk_fs_2dot4 srk_fw_800 srk_mb_0dot5 srk_clr_white_1 ">
                        Brief
                      </div>
                      <div className="srk srk_fs_1dot2 srk_fw_300  srk_clr_white_0dot8 srk_ln_1dot4">
                        Lorem ipsum dolor sit amet consectetur. Elit massa erat
                        vitae non semper quis. Morbi sed aliquet donec failisis
                        senectus eget.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ts_pg_road_dv ts_pg_road_dv_bg_2">
                    <div className="ts_pg_road_dvin">
                      <div className="srk srk_fs_1dot4 srk_fw_400 srk_mb_1 srk_clr_white_1 text-center">
                        January
                      </div>
                      <div className="srk srk_fs_2dot4 srk_fw_800 srk_mb_0dot5 srk_clr_white_1 ">
                        Brief
                      </div>
                      <div className="srk srk_fs_1dot2 srk_fw_300  srk_clr_white_0dot8 srk_ln_1dot4">
                        Lorem ipsum dolor sit amet consectetur. Elit massa erat
                        vitae non semper quis. Morbi sed aliquet donec failisis
                        senectus eget.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ts_pg_road_dv ts_pg_road_dv_bg_1">
                    <div className="ts_pg_road_dvin">
                      <div className="srk srk_fs_1dot4 srk_fw_400 srk_mb_1 srk_clr_white_1 text-center">
                        January
                      </div>
                      <div className="srk srk_fs_2dot4 srk_fw_800 srk_mb_0dot5 srk_clr_white_1 ">
                        Brief
                      </div>
                      <div className="srk srk_fs_1dot2 srk_fw_300  srk_clr_white_0dot8 srk_ln_1dot4">
                        Lorem ipsum dolor sit amet consectetur. Elit massa erat
                        vitae non semper quis. Morbi sed aliquet donec failisis
                        senectus eget.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ts_pg_road_dv ts_pg_road_dv_bg_2">
                    <div className="ts_pg_road_dvin">
                      <div className="srk srk_fs_1dot4 srk_fw_400 srk_mb_1 srk_clr_white_1 text-center">
                        January
                      </div>
                      <div className="srk srk_fs_2dot4 srk_fw_800 srk_mb_0dot5 srk_clr_white_1 ">
                        Brief
                      </div>
                      <div className="srk srk_fs_1dot2 srk_fw_300  srk_clr_white_0dot8 srk_ln_1dot4">
                        Lorem ipsum dolor sit amet consectetur. Elit massa erat
                        vitae non semper quis. Morbi sed aliquet donec failisis
                        senectus eget.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className=" ts_hm4_sec">
            <div className="container">
              <div className="row g-5">
                <div className="col-md-5">
                  <div className="ts_pg_sec_hdng_set" style={{backdropFilter: 'blur(5px)'}}>
                    <div id='faq' className="ts_pg_sec_hdng">
                      Frequently Asked Questions
                    </div>
                    <div className="ts_pg_sec_hdng_p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed euismod odio non dui blanditLorem ipsum dolor sit
                      amet, consectetur adipiscing elit.{" "}
                    </div>
                  </div>
                  <img src={homefaqsidimg} className="img-fluid" alt="" />
                </div>
                <div className="col-md-7">
                  <div>
                    <Accordion
                      expanded={expanded === "panel1"}
                      onChange={handleChange("panel1")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Typography>Lorem ipsum dolor sit amet</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Praesent sed purus accumsan, dapibus diam eget,
                          congue nibh. Fusce eu pulvinar est. Pellentesque
                          eleifend vel ex eu iaculis. Suspendisse porttitor enim
                          turpis, sit amet fermentum tellus interdum at. Ut
                          molestie condimentum pharetra. Integer a mauris mi.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expanded === "panel2"}
                      onChange={handleChange("panel2")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                      >
                        <Typography>Lorem ipsum dolor sit amet consectetur</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Praesent sed purus accumsan, dapibus diam eget,
                          congue nibh. Fusce eu pulvinar est.
                        </Typography>
                        <Typography>
                          Pellentesque eleifend vel ex eu iaculis. Suspendisse
                          porttitor enim turpis, sit amet fermentum tellus
                          interdum at. Ut molestie condimentum pharetra. Integer
                          a mauris mi.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expanded === "panel3"}
                      onChange={handleChange("panel3")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                      >
                        <Typography>Lorem ipsum dolor sit amet consectetur adipiscing</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Praesent sed purus accumsan, dapibus diam eget,
                          congue nibh. Fusce eu pulvinar est. Pellentesque
                          eleifend vel ex eu iaculis. Suspendisse porttitor enim
                          turpis, sit amet fermentum tellus interdum at. Ut
                          molestie condimentum pharetra. Integer a mauris mi.
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Praesent sed purus accumsan, dapibus diam eget,
                          congue nibh. Fusce eu pulvinar est.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expanded === "panel4"}
                      onChange={handleChange("panel4")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                      >
                        <Typography>Lorem ipsum dolor sit amet Ut molestie</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Praesent sed purus accumsan, dapibus diam eget, congue
                          nibh. Fusce eu pulvinar est. Pellentesque eleifend vel
                          ex eu iaculis. Suspendisse porttitor enim turpis, sit
                          amet fermentum tellus interdum at. Ut molestie
                          condimentum pharetra. Integer a mauris mi.
                        </Typography>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expanded === "panel5"}
                      onChange={handleChange("panel5")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                      >
                        <Typography>Praesent sed purus accumsan dapibus</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Praesent sed purus accumsan, dapibus diam eget, congue
                          nibh. Fusce eu pulvinar est. Pellentesque eleifend vel
                          ex eu iaculis. Suspendisse porttitor enim turpis, sit
                          amet fermentum tellus interdum at.
                        </Typography>
                        <Typography>
                          Fusce eu pulvinar est. Pellentesque eleifend vel ex eu
                          iaculis. Suspendisse porttitor enim turpis, sit amet
                          fermentum tellus interdum at. Ut molestie condimentum
                          pharetra. Integer a mauris mi.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id='tokenomics' className=" ts_hm5_sec">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="ts_pg_sec_hdng_set text-center">
                    <div className="ts_pg_sec_hdng">Tokenomics Information</div>
                    <div className="ts_pg_sec_hdng_p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed euismod odio non dui blanditLorem ipsum dolor sit
                      amet, consectetur adipiscing elit.{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center text-center srk_mt_1dot5">
                <div className="col-md-3 col-6">
                  <div className="srk srk_fs_1 srk_fw_300 srk_clr_white_0dot9 srk_mb_1">
                    Token Name
                  </div>
                  <div className="srk srk_fs_3 srk_fw_800 srk_clr_white_1 srk_mb_1dot5">
                    TechNa
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="srk srk_fs_1 srk_fw_300 srk_clr_white_0dot9 srk_mb_1">
                    Token Symbol
                  </div>
                  <div className="srk srk_fs_3 srk_fw_800 srk_clr_white_1 srk_mb_1dot5">
                    TCN
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="srk srk_fs_1 srk_fw_300 srk_clr_white_0dot9 srk_mb_1">
                    Token Supply
                  </div>
                  <div className="srk srk_fs_2dot5 srk_fw_800 srk_clr_white_1 srk_mb_1dot5">
                    400M
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="srk srk_fs_1 srk_fw_300 srk_clr_white_0dot9 srk_mb_1">
                    Blockchain
                  </div>
                  <div className="srk srk_fs_3 srk_fw_800 srk_clr_white_1 srk_mb_1dot5">
                    Polygon
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className=" ts_hm7_sec">
            <div className="container">
              <div className="row h-md-100">
                <div className="col-md-7">
                  <div className="sk_pie_chart_out_div">
                    <div className="sk_pie_chart_out">
                      <div className="sk_pie_chart_in_ring"></div>
                      <div className="sk_pie_chart_in">
                        <div className="sk_pie_chart_in_h1">Total Supply</div>
                        <div className="sk_pie_chart_in_h2">
                          100.000.000.000 Tokens
                        </div>
                      </div>
                      <div className="sk_pie_chart_lbls">
                        <div className="sk_pie_chart_lbls_in skpchls-1">
                          15<span>%</span>
                          <div className="sk_pie_chart_lbls_in_l">Team</div>
                        </div>
                        <div className="sk_pie_chart_lbls_in skpchls-2">
                          12<span>%</span>
                          <div className="sk_pie_chart_lbls_in_l">
                            Strategic Partners & Advisors
                          </div>
                        </div>
                        <div className="sk_pie_chart_lbls_in skpchls-3">
                          21.5<span>%</span>
                          <div className="sk_pie_chart_lbls_in_l">
                            Exchange Listing & Liquidify
                          </div>
                        </div>
                        <div className="sk_pie_chart_lbls_in skpchls-4">
                          24.5<span>%</span>
                          <div className="sk_pie_chart_lbls_in_l">
                            Staking, In-game Rewards & Development
                          </div>
                        </div>
                        <div className="sk_pie_chart_lbls_in skpchls-5">
                          16<span>%</span>
                          <div className="sk_pie_chart_lbls_in_l">
                            Company Reserves
                          </div>
                        </div>
                        <div className="sk_pie_chart_lbls_in skpchls-6">
                          11<span>%</span>
                          <div className="sk_pie_chart_lbls_in_l">
                            Marketing
                          </div>
                        </div>
                      </div>
                      <div id="chartdiv"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="sk_chart_sid_dv_totout">
                    <div className="sk_chart_sid_dv mt-md-0">
                      <div className="row landingTeamBox">
                        <div className="col-md-7 col-6">
                          <div className="srk srk_fs_1dot2 srk_fw_600 srk_clr_bright_green srk_mb_0dot5">
                            15%{" "}
                            <span className="srk_fs_1dot2 srk_ml_0dot6 sk_chart_sid_dv_1">
                              Team
                            </span>
                          </div>
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  ">
                            Total Supply
                          </div>
                        </div>
                        <div className="col-md-5 col-6 text-end">
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  srk_mb_0dot5">
                            Tokens
                          </div>
                          <div className="srk srk_fs_1dot1 srk_fw_400 srk_clr_white_1 ">
                            15,000,000,000
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sk_chart_sid_dv">
                      <div className="row landingTeamBox">
                        <div className="col-md-7 col-6">
                          <div className="srk srk_fs_1dot2 srk_fw_600 srk_clr_bright_green srk_mb_0dot5">
                            15%{" "}
                            <span className="srk_fs_1dot2 srk_ml_0dot6 sk_chart_sid_dv_1">
                              Team
                            </span>
                          </div>
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  ">
                            Total Supply
                          </div>
                        </div>
                        <div className="col-md-5 col-6 text-end">
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  srk_mb_0dot5">
                            Tokens
                          </div>
                          <div className="srk srk_fs_1dot1 srk_fw_400 srk_clr_white_1 ">
                            15,000,000,000
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sk_chart_sid_dv">
                      <div className="row landingTeamBox">
                        <div className="col-md-7 col-6">
                          <div className="srk srk_fs_1dot2 srk_fw_600 srk_clr_bright_green srk_mb_0dot5">
                            15%{" "}
                            <span className="srk_fs_1dot2 srk_ml_0dot6 sk_chart_sid_dv_1">
                              Team
                            </span>
                          </div>
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  ">
                            Total Supply
                          </div>
                        </div>
                        <div className="col-md-5 col-6 text-end">
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  srk_mb_0dot5">
                            Tokens
                          </div>
                          <div className="srk srk_fs_1dot1 srk_fw_400 srk_clr_white_1 ">
                            15,000,000,000
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sk_chart_sid_dv">
                      <div className="row landingTeamBox">
                        <div className="col-md-7 col-6">
                          <div className="srk srk_fs_1dot2 srk_fw_600 srk_clr_bright_green srk_mb_0dot5">
                            15%{" "}
                            <span className="srk_fs_1dot2 srk_ml_0dot6 sk_chart_sid_dv_1">
                              Team
                            </span>
                          </div>
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  ">
                            Total Supply
                          </div>
                        </div>
                        <div className="col-md-5 col-6 text-end">
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  srk_mb_0dot5">
                            Tokens
                          </div>
                          <div className="srk srk_fs_1dot1 srk_fw_400 srk_clr_white_1 ">
                            15,000,000,000
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sk_chart_sid_dv">
                      <div className="row landingTeamBox">
                        <div className="col-md-7 col-6">
                          <div className="srk srk_fs_1dot2 srk_fw_600 srk_clr_bright_green srk_mb_0dot5">
                            15%{" "}
                            <span className="srk_fs_1dot2 srk_ml_0dot6 sk_chart_sid_dv_1">
                              Team
                            </span>
                          </div>
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  ">
                            Total Supply
                          </div>
                        </div>
                        <div className="col-md-5 col-6 text-end">
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  srk_mb_0dot5">
                            Tokens
                          </div>
                          <div className="srk srk_fs_1dot1 srk_fw_400 srk_clr_white_1 ">
                            15,000,000,000
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sk_chart_sid_dv">
                      <div className="row landingTeamBox">
                        <div className="col-md-7 col-6">
                          <div className="srk srk_fs_1dot2 srk_fw_600 srk_clr_bright_green srk_mb_0dot5">
                            15%{" "}
                            <span className="srk_fs_1dot2 srk_ml_0dot6 sk_chart_sid_dv_1">
                              Team
                            </span>
                          </div>
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  ">
                            Total Supply
                          </div>
                        </div>
                        <div className="col-md-5 col-6 text-end">
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  srk_mb_0dot5">
                            Tokens
                          </div>
                          <div className="srk srk_fs_1dot1 srk_fw_400 srk_clr_white_1 ">
                            15,000,000,000
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sk_chart_sid_dv">
                      <div className="row landingTeamBox">
                        <div className="col-md-7 col-6">
                          <div className="srk srk_fs_1dot2 srk_fw_600 srk_clr_bright_green srk_mb_0dot5">
                            15%{" "}
                            <span className="srk_fs_1dot2 srk_ml_0dot6 sk_chart_sid_dv_1">
                              Team
                            </span>
                          </div>
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  ">
                            Total Supply
                          </div>
                        </div>
                        <div className="col-md-5 col-6 text-end">
                          <div className="srk srk_fs_0dot9 srk_clr_white_07 srk_fw_400  srk_mb_0dot5">
                            Tokens
                          </div>
                          <div className="srk srk_fs_1dot1 srk_fw_400 srk_clr_white_1 ">
                            15,000,000,000
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className=" ts_hm6_sec">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="ts_pg_sec_hdng_set text-center">
                    <div id='community' className="ts_pg_sec_hdng">Community</div>
                    <div className="ts_pg_sec_hdng_p">Join Us At</div>
                  </div>
                </div>
              </div>
              <div className="ts_hm_com_set">
                <div className="row justify-content-center text-center srk_mt_1dot5">
                  <div className="col-md col-6">
                    <a href="#">
                      <img src={com1} className="ts_hm_com_ico" alt="" />
                      <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1 srk_mb_1">
                        Discord
                      </div>
                    </a>
                  </div>
                  <div className="col-md col-6">
                    <a href="#">
                      <img src={com2} className="ts_hm_com_ico" alt="" />
                      <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1 srk_mb_1">
                        Reddit
                      </div>
                    </a>
                  </div>
                  <div className="col-md col-6">
                    <a href="#">
                      <img src={com3} className="ts_hm_com_ico" alt="" />
                      <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1 srk_mb_1">
                        Telegram
                      </div>
                    </a>
                  </div>
                  <div className="col-md col-6">
                    <a href="#">
                      <img src={com4} className="ts_hm_com_ico" alt="" />
                      <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1 srk_mb_1">
                        Twitter
                      </div>
                    </a>
                  </div>
                  <div className="col-md col-6">
                    <a href="#">
                      <img src={com5} className="ts_hm_com_ico" alt="" />
                      <div className="srk srk_fs_1 srk_fw_400 srk_clr_white_1 srk_mb_1">
                        Tiktok
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
}
