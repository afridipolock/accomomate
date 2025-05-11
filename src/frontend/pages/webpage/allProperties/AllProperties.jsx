import React from "react";
import "./style.css";

const AllProperties = () => {
  return (
    <div className="desktop-window">
      <div className="desktop-all-properties">
        <div className="top">
          <div className="search">
            <div className="title">
              <span>Properties for rent</span>
            </div>
            <div className="sub-title">
              <span>Search the Bangladesh's largest choice of properties</span>
            </div>
            <div className="search-info">
              <span>Search using area or district or postcode</span>
            </div>
            <div className="inputs">
              <div className="input">
                <input
                  type="text"
                  placeholder="e.g. Gulshan or 1212 or Dhaka"
                />
              </div>
              <div className="button">
                <button type="button">Find Properties</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">bottom</div>
      </div>
    </div>
  );
};

export default AllProperties;
