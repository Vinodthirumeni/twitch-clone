import React from "react";
import "./Profile.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import CallMadeIcon from "@material-ui/icons/CallMade";
import RecentItem from "./RecentItem";
import Stream from "./Stream";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__topLeft">
        <img
          src="https://lh3.googleusercontent.com/ogw/ADGmqu8Fxmeu3PTD6yjwQ-WKVxD8WZCua6v5RdUXtqzx5Q=s64-c-mo"
          alt="#logo"
        />
        <div className="profile__topLeftDetails">
          <h1>vinodthirumeni</h1>
          <h3>10M Followers</h3>
        </div>
      </div>
      <div className="profile__topRight">
        <FavoriteIcon />
        <NotificationsIcon />
        <DonutLargeIcon />
      </div>
      <Stream />
      <div className="profile__menu">
        <h2 className="active">Home</h2>
        <h2>About</h2>
        <h2>Schedule</h2>
        <h2>Videos</h2>
        <CallMadeIcon />
        <h2>Chat</h2>
      </div>

      <div className="profile__recent">
        <h2>Recent Broadcasts</h2>
        <div className="profile__recentItems">
          <RecentItem
            url={"https://www.youtube.com/embed/DGQwd1_dpuc"}
            title={"Relaxing Music with Beautiful Nature"}
          />
          <RecentItem
            url={"https://www.youtube.com/embed/SMKPKGW083c"}
            title={"Norway AMAZING Beautiful Nature"}
          />
          <RecentItem
            url={"https://www.youtube.com/embed/I5B1kxr2TQQ"}
            title={"Splendors of Switzerland"}
          />
          <RecentItem
            url={"https://www.youtube.com/embed/IdejM6wCkxA"}
            title={"Dubai, United Arab Emirates"}
          />
        </div>
        <div className="profile__categories">
          <h2>The channel recently streamed</h2>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/718fdvaSujL.jpg"
            alt="#pic"
          />
          <h3>Computer Science & Technology</h3>
        </div>
      </div>
    </div>
  );
}

export default Profile;
