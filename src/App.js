// In App.js
import React from "react";
import { BucketListWrapper } from "./Components/BucketListWrapper";
import { Map } from "./Components/Map";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bucket-list-container">
        <div className="bucket-list-wrapper">
          <BucketListWrapper />
        </div>
        <div className="map-container">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
