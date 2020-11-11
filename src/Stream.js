import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./Stream.css";

function Stream() {
  return (
    <div className="stream">
      <div className="stream__container">
        <div className="stream__status">
          <div className="stream__statusContainer">
            <div className="stream__statusContainerTop">
              <div className="stream__statusIndicator">OFFLINE</div>
              <h2>Check out below videos</h2>
            </div>
            <div className="stream__stausInfo">
              <NotificationsIcon />
              <p>You will be notified</p>
            </div>
          </div>
        </div>
        <div className="stream__videoEmbed">
          <iframe
            width="500"
            height="295"
            src="https://www.youtube.com/embed/DGQwd1_dpuc"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Stream;
