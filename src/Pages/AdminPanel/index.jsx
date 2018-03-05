import React, { useState } from 'react';
import "./style.css"


//components
import SideFloatingBar from "../../Components/SideFloatingBar"
import HomeNav from "../Home/HomeNav"
import Footer from "../../Components/Footer"

//images



export default function AdminPanel() {
  const [sideNav, setSideNav] = useState(false)

  return (
    <>
      <SideFloatingBar />
      <div className="s_web_wrapper">
        <div className="s_hm_bg_line"></div>
        <div className="s_web_wrapper_in">
          <HomeNav setSideNav={setSideNav} sideNav={sideNav} />
          <section className="ts_mid_sec">
            <div className="container">
              <h1 className="srk_fw_700 ts_hm1_sec_hdng w-100  srk_mb_2dot5">Admin Panel</h1>
              <div className="row gx-4 align-items-center adminFistContainder">
                <div className="col-md-6">
                  <div className="ts_comn_pnl adminInnerBox">
                    <div className="srk srk_fs_1dot5 srk_fw_600 srk_clr_white_1 srk_mb_1dot7 w-100 ">Create New
                    </div>
                    <div className="row adminInputBox">
                      <div className="col-md-6">
                        <div className="ts_input_set">
                          <div className="ts_input_lbl">
                            <span className="ts_input_lbl_select">Enter Price</span>
                          </div>
                          <input type="text" className="ts_input_box AInputBox" placeholder="0.0" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="ts_input_set">
                          <div className="ts_input_lbl">
                            <span className="ts_input_lbl_select">Amount for Sale</span>
                          </div>
                          <input type="text" className="ts_input_box AInputBox" placeholder="0.0" />
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center ">
                      <div className="col-12">
                        <a href="#" className="ts_btn_outline   w-100">Submit</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ts_comn_pnl adminInnerBox">
                    <div className="srk srk_fs_1dot5 srk_fw_600 srk_clr_white_1 srk_mb_1dot7 w-100 ">Update New
                    </div>
                    <div className="row adminInputBox">
                      <div className="col-md-6">
                        <div className="ts_input_set">
                          <div className="ts_input_lbl">
                            <span className="ts_input_lbl_select">Enter Price</span>
                          </div>
                          <input type="text" className="ts_input_box AInputBox" placeholder="0.0" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="ts_input_set">
                          <div className="ts_input_lbl">
                            <span className="ts_input_lbl_select">Amount for Sale</span>
                          </div>
                          <input type="text" className="ts_input_box AInputBox" placeholder="0.0" />
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center ">
                      <div className="col-12">
                        <a href="#" className="ts_btn_outline   w-100">Submit</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 adminSBox">
                  <div className="ts_comn_pnl adminInnerBox adminL4Box">
                    <div className="srk srk_fs_1dot5 srk_fw_600 srk_clr_white_1 srk_mb_1dot7 w-100 ">Start Phase
                    </div>
                    <div className="row justify-content-center ">
                      <div className="col-12">
                        <a href="#" className="ts_btn_outline adminBtn w-100">Submit</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 adminSBox">
                  <div className="ts_comn_pnl adminInnerBox adminL4Box">
                    <div className="srk srk_fs_1dot5 srk_fw_600 srk_clr_white_1 srk_mb_1dot7 w-100 ">End Phase
                    </div>
                    <div className="row justify-content-center ">
                      <div className="col-12">
                        <a href="#" className="ts_btn_outline adminBtn w-100">Submit</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 adminSBox">
                  <div className="ts_comn_pnl adminInnerBox adminL4Box">
                    <div className="srk srk_fs_1dot5 srk_fw_600 srk_clr_white_1 srk_mb_1dot7 w-100 ">Pause Phase
                    </div>
                    <div className="row justify-content-center ">
                      <div className="col-12">
                        <a href="#" className="ts_btn_outline adminBtn w-100">Submit</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 adminSBox">
                  <div className="ts_comn_pnl adminInnerBox adminL4Box">
                    <div className="srk srk_fs_1dot5 srk_fw_600 srk_clr_white_1 srk_mb_1dot7 w-100 ">Unpause
                      Phase</div>
                    <div className="row justify-content-center ">
                      <div className="col-12">
                        <a href="#" className="ts_btn_outline w-100 adminBtn">Submit</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ts_comn_pnl adminInnerBox">
                <div className="row g-5 align-items-center">
                  <div className="col-md-6">
                    <div className="row align-items-center adminBBox">
                      <div className="col-md-5">
                        <div className="ts_lll_admin_lbl">St Referral Status</div>
                      </div>
                      <div className="col-md-7 adminBtnBox gap-4">
                        <a href="#" className="ts_btn_outline ts_btn_outline_n br30 admin_btn">Yes</a>
                        <a href="#" className="ts_btn_outline ts_btn_outline_n br30 admin_btn">No</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row align-items-center adminBBox">
                      <div className="col-md-5">
                        <div className="ts_lll_admin_lbl">Referral Length</div>
                      </div>
                      <div className="col-md-7">
                        <div className="row g-3">
                          <div className="col-8">
                            <input type="text" className="ts_input_box" />
                          </div>
                          <div className="col-4">
                            <a href="#" className="ts_btn_outline  w-100 adminBtn">Submit</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row align-items-center adminBBox">
                      <div className="col-md-5">
                        <div className="ts_lll_admin_lbl">Referral Percentage</div>
                      </div>
                      <div className="col-md-7">
                        <div className="row g-3">
                          <div className="col-8">
                            <input type="text" className="ts_input_box" />
                          </div>
                          <div className="col-4">
                            <a href="#" className="ts_btn_outline  w-100 adminBtn">Submit</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row align-items-center adminBBox">
                      <div className="col-md-5">
                        <div className="ts_lll_admin_lbl">Transfer Ownership</div>
                      </div>
                      <div className="col-md-7">
                        <div className="row g-3">
                          <div className="col-8">
                            <input type="text" className="ts_input_box" />
                          </div>
                          <div className="col-4">
                            <a href="#" className="ts_btn_outline  w-100 adminBtn">Submit</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section style={{ textDecoration: "underline" }} className="ts_bot_sec">Need Help ? Join Us At our <a href="#">Discord</a> Community</section>
          <Footer />
        </div>
      </div>
    </>
  )
}
