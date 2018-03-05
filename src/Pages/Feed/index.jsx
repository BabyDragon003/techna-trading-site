import React, { useState } from "react";
import "./style.css";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

//icons
import AddIcon from "@mui/icons-material/Add";

//images
import Logo from "../../assets/img/logo.png";
import avatar from "../../assets/img/avatar.jpg";
import avatar2 from "../../assets/img/avatar2.png";
import avatar3 from "../../assets/img/avatar3.png";
import avatargroup from "../../assets/img/avatar-group.png";
import iconhome from "../../assets/img/icon-home.svg";
import iconrules from "../../assets/img/icon-rules.svg";
import iconevents from "../../assets/img/icon-events.svg";
import iconclasses from "../../assets/img/icon-classes.svg";
import iconcompetitions from "../../assets/img/icon-competitions.svg";
import iconfaq from "../../assets/img/icon-faq.svg";
import iconlinks from "../../assets/img/icon-links.svg";
import iconsettings from "../../assets/img/icon-settings.svg";
import iconcheckbox from "../../assets/img/checkbox.png";
import iconconnect from "../../assets/img/icon-connect.svg";
import ChatCircle from "../../assets/img/ChatCircle.svg";
import heart from "../../assets/img/heart.svg";
import repost from "../../assets/img/repost.svg";
import share from "../../assets/img/share.svg";

//components
import SideFloatingBar from "../../Components/SideFloatingBar";
import { Box } from "@mui/material";

export default function Feed() {
  const [sideBar, setSeideBar] = useState(false)


  return (
    <>
      <section className="profile-section">
        <SideFloatingBar />
        <div className="profile-sidebar">
          <div onClick={() => setSeideBar(!sideBar)} className="avatar">
            <a href="#">
              <img src={avatar} alt="" />
            </a>
          </div>
          <div className="designation">
            Direct <span className="badge">+1</span>
          </div>
          <hr />
          <div className="grey-box">
            <a href="#">Pirates</a>
          </div>
          <div className="grey-box">
            <a href="#">Group 2</a>
          </div>
          <div className="grey-box">
            <a href="#">Group 3</a>
          </div>
          <div className="grey-box">
            <a href="#">Group 4</a>
          </div>
          <div className="grey-box">
            <a href="#">
              <AddIcon />
            </a>
          </div>
        </div>
        <Box sx={{ width: sideBar ? "265px" : "0px" }} className="profile-menu">
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
          </div>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={iconhome} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={iconrules} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="Rules" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={iconevents} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="Events" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={iconclasses} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="Classes" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={iconcompetitions} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="Competitions" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={iconfaq} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="FAQ" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={iconlinks} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="Links" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={iconsettings} alt="" />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
        <div className="profile-content">
          <div className="heading">
            <div className="left">
              <h2>Pirates of Crypto</h2>
              <h6>
                <img src={iconcheckbox} alt="" /> 365k Follower
              </h6>
            </div>
            <div className="group"><img src={avatargroup} alt="" /></div>
          </div>
          <div className="post-box">
            <div className="avatar">
              <img src={avatar} alt="" />
            </div>
            <div className="form">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="What’s on your mind?"
              ></textarea>
              <input type="submit" value="POST" />
            </div>
          </div>
          <div className="comment-box">
            <div className="comment">
              <div className="avatar">
                <figure>
                  <img src={avatar3} alt="" />
                </figure>
                <div className="conntent">
                  <img src={iconconnect} alt="" /> <span>Connect</span>
                </div>
              </div>
              <div className="content">
                <div className="top-comment-content">
                  <h3>
                    Kelly Wearstler <span>about 1 hour ago</span>
                  </h3>
                  <h4>
                    <span>567 Connections</span> Level 2
                  </h4>
                </div>
                <div className="mid-comment-content">
                  <p>
                    I was able to keep it from getting personal, and the
                    coworker in the discussion began to make my argument for me.
                  </p>
                </div>
                <div className="bot-comment-content">
                  <div className="left">
                    <div className="badge">
                      <a href="#">
                        <img src={heart} alt="" /> 1
                      </a>
                    </div>
                    <a href="#">
                      <img src={repost} alt="" />
                    </a>
                    <a href="#">
                      <img src={share} alt="" />
                    </a>
                  </div>
                  <div className="right">
                    <img src={ChatCircle} alt="" />
                    COMMENT <span className="badge">46</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment-post">
              <div className="avatar">
                <img src={avatar2} alt="" />
              </div>
              <div className="form">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="What’s on your mind?"
                ></textarea>
                <input type="submit" value="POST" />
              </div>
            </div>
          </div>
          <div className="comment-box">
            <div className="comment">
              <div className="avatar">
                <figure>
                  <img src={avatar3} alt="" />
                </figure>
                <div className="conntent">
                  <img src={iconconnect} alt="" /> <span>Connect</span>
                </div>
              </div>
              <div className="content">
                <div className="top-comment-content">
                  <h3>
                    Kelly Wearstler <span>about 1 hour ago</span>
                  </h3>
                  <h4>
                    <span>567 Connections</span> Level 2
                  </h4>
                </div>
                <div className="mid-comment-content">
                  <p>
                    I was able to keep it from getting personal, and the
                    coworker in the discussion began to make my argument for me.
                  </p>
                </div>
                <div className="bot-comment-content">
                  <div className="left">
                    <div className="badge">
                      <a href="#">
                        <img src={heart} alt="" /> 1
                      </a>
                    </div>
                    <a href="#">
                      <img src={repost} alt="" />
                    </a>
                    <a href="#">
                      <img src={share} alt="" />
                    </a>
                  </div>
                  <div className="right">
                    <img src={ChatCircle} alt="" />
                    COMMENT <span className="badge">46</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment-post">
              <div className="avatar">
                <img src={avatar2} alt="" />
              </div>
              <div className="form">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="What’s on your mind?"
                ></textarea>
                <input type="submit" value="POST" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
