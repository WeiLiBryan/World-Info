import React, { useState } from "react";
import "./style.css";
import Map from "../../Components/reactmap";
import Popup from "../../Components/Popup";
import API from "../../utils/API";

function MapPage() {
  const [articles, setArticles] = useState([]);
  const [displayState, setDisplayState] = useState(false);
  const [currentCountry, setCurrentCountry] = useState("");

  const articleSet = (data) => {
    setArticles(data);
  };

  const changeDisplayState = (bool) => {
    setDisplayState(bool);
  };

  const Subscribe = function () {
    API.updateTopic(currentCountry);
  };



  return (
    <div>
      <div
        className="popup"
        style={{
          display: displayState ? "block" : "none",
        }}
      >
        <button onClick={Subscribe}>Subscribe</button>

        {articles.splice(0, 5).map((item) => {
          return (
            <Popup
              id={0}
              title={item.title}
              content={item.content}
              description={item.description}
              author={item.author}
              image={item.urlToImage}
            />
          );
        })}
      </div>

      <Map
        articleSet={articleSet}
        changeDisplayState={changeDisplayState}
        setCurrentCountry={setCurrentCountry}
      />
    </div>
  );
}

export default MapPage;
