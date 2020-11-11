import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import InboxIcon from "@material-ui/icons/Inbox";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import BugReportIcon from "@material-ui/icons/BugReport";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__leftLogo"
          src="https://icons-for-free.com/iconfiles/png/512/network+social+twitch+twitch+icon+twitch-1320136412871218227.png"
          alt="#logo"
        />
        <p>Following</p>
        <p>Browse</p>
        <p>Esports</p>
        <p>Music</p>
        <p>...</p>
      </div>
      <div className="header__center">
        <input placeholder="Search..." />
        <SearchIcon />
      </div>
      <div className="header__right">
        <AccountBalanceIcon />
        <InboxIcon />
        <ChatBubbleIcon />
        <div className="header__rightBits">
          <BugReportIcon />
          <p>Get bits</p>
        </div>
        <Avatar>V</Avatar>
      </div>
    </div>
  );
}

export default Header;
