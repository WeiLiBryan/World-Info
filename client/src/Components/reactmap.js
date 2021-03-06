import React, { useState } from "react";
import ReactMapGL, {Layer, Source} from "react-map-gl";
import {styleLayer} from "./map-style"
import API from "../utils/API.js"

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 37.7406,
    longitude: -122.4217,
    width: "100vw",
    height: "100vh",
    zoom: 2,
    minZoom: 2 
  });



  const handleCountrySel = function handleCountrySel (e) {
    var countryName = e.features[0].properties.NAME
    console.log(countryName);
    API.newsArticles(countryName).then(function (res) {
      console.log("news articles", res);
    })
  }; 

  // const onClick = (event => {
  //   // const country = event.features[0];
  //   const countryName = event.features[0].properties.NAME
  //   // console.log (country); 
  //   console.log (countryName);
  // })
  


  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1Ijoic3BlbnJhZCIsImEiOiJja2x3bWZoc2EwMGFwMnVxa3NueXZmMHlnIn0.m_FPTC7C4JhyOtzp2KwcKg"
      mapStyle= 'mapbox://styles/mapbox/light-v9'
      onViewportChange={viewport => {
          setViewport(viewport);
          
      }}
      onClick={handleCountrySel}
    >
        <Source type= 'vector' url= 'mapbox://byfrost-articles.74qv0xp0'>
        <Layer {...styleLayer}/>
        </Source>

    </ReactMapGL>
  );
}

export default Map;
