import React from "react";
import "./style.css";

//images
import Logo from "../../assets/img/logo.png";
import ftr1 from "../../assets/img/ftr-1.png";
import ftr2 from "../../assets/img/ftr-2.png";
import ftr3 from "../../assets/img/ftr-3.png";

export default function Footer() {
  return (
    <>
      <footer className="ts_ftr_sec">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-4">
              <a href="#" className="">
                <img src={Logo} className="ts_ftr_sec_logo" alt="" />
              </a>
              <p className="srk srk_fs_1 srk_fw_400 ts_ftr_sec_logo_p srk_ln_1dot6 srk_clr_white_1 srk_mb_1dot5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna
                ultrices amet tellus ornare. Faucibus id posuere massa.
              </p>
              <div className="ts_ftr_scico">
                <a href="#" className="ts_ftr_sico_a">
                  <img src={ftr1} className="ts_ftr_sico" alt="" />
                </a>
                <a href="#" className="ts_ftr_sico_a">
                  <img src={ftr2} className="ts_ftr_sico" alt="" />
                </a>
                <a href="#" className="ts_ftr_sico_a">
                  <img src={ftr3} className="ts_ftr_sico" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-7">
              <div className="row g-5">
                <div className="col-md-4">
                  <div className="ts_ftr_sec_hd">Site Map</div>
                  <a href="#products" className="ts_ftr_sec_li">
                    Products Videos
                  </a>
                  <a href="#faq" className="ts_ftr_sec_li">
                    FAQ’s
                  </a>
                  <a href="#tokenomics" className="ts_ftr_sec_li">
                    Tokenomics
                  </a>
                  <a href="#roadmap" className="ts_ftr_sec_li">
                    Road map
                  </a>
                  <a href="#community" className="ts_ftr_sec_li">
                    Community
                  </a>
                </div>
                <div className="col-md-4">
                  <div className="ts_ftr_sec_hd">Company</div>
                  <a href="#" className="ts_ftr_sec_li">
                    Help & Support
                  </a>
                  <a href="#" className="ts_ftr_sec_li">
                    Terms & Conditions
                  </a>
                  <a href="#" className="ts_ftr_sec_li">
                    Privacy Policy
                  </a>
                </div>
                <div className="col-md-4">
                  <div className="ts_ftr_sec_hd">Resource</div>
                  <a href="#" className="ts_ftr_sec_li">
                    Partner
                  </a>
                  <a href="#" className="ts_ftr_sec_li">
                    Blog
                  </a>
                  <a href="#" className="ts_ftr_sec_li">
                    Newsletter
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="ts_ftr_sec_cpy">
                Copyright <span className="srk_clr_brightgrn">Tokenomics</span>{" "}
                core 2022 All right reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
