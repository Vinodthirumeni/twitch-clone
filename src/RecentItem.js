import React from "react";
import "./RecentItem.css";

function RecentItem({ url, title }) {
  return (
    <div className="item">
      <iframe
        width="400"
        height="235"
        src={url}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      ></iframe>
      <div className="item__details">
        <img src="https://lh3.googleusercontent.com/ogw/ADGmqu8Fxmeu3PTD6yjwQ-WKVxD8WZCua6v5RdUXtqzx5Q=s64-c-mo" alt="" />
        <div className="item__detailsText">
          <h4>{title}</h4>
          <p>VinodThirumeni</p>
          <p>Programming & Learning</p>
        </div>
      </div>
    </div>
  );
}

export default RecentItem;
