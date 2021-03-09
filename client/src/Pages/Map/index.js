import React, { useState } from "react";
import "./style.css"
import Map from "../../Components/reactmap";
import Popup from "../../Components/Popup";

function MapPage() {
    const [articles, setArticles] = useState([]);
    const [displayState, setDisplayState] = useState(false);

    const articleSet = (data) => {
        setArticles(data);
    }

    const changeDisplayState = (bool) => {
        setDisplayState(bool);
    }

    return (
        <div>

            <div
                className="popup"
                style={{
                    display: displayState ? "block" : "none",
                }}
            >

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
            {/* <Popup 
                title={item.title}
                content={item.content}
                description={item.description}
                author={item.author}
                image={item.urlToImage}
            /> */}


            <Map
                articleSet={articleSet}
                changeDisplayState={changeDisplayState}
            />
        </div>
    )
}

export default MapPage