import React from "react";
import "./Sidebar.css";
import Channel from "./Channel";
import SearchIcon from "@material-ui/icons/Search";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>FOLLOWED CHANNEL</h5>
        <Channel
          avatar="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          name="Test Channel 1"
          followers="123k"
        />
        <Channel
          avatar="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          name="Test Channel 2"
          followers="233k"
        />
        <h5>RECOMMENDED CHANNEL</h5>
        <Channel
          avatar="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          name="Test Channel 3"
          followers="234k"
        />
        <p className="sidebar__topShowMore">Show more</p>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer">
          <SearchIcon />
          <input type="text" placeholder="Search to add friends" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
