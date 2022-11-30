import React, { useState } from "react";
import LightItem from "./lightItem.jsx";

const TrafficLight = () => {
    const [lightOn, setLightOn] = useState("");
    const [purpleRender, setPurpleRender] = useState(false);

    const purpleToggle = () => {
        purpleRender? setPurpleRender(false) : setPurpleRender(true);
    };

    const cyclicLightOn = () => {
        let colors = ["green", "yellow", "red", "purple"];
        let colorIndex = 0;

        setInterval(() => {
            if (colorIndex <= colors.length) {
                setLightOn(colors[colorIndex]);
                colorIndex++;
            } else {
                return false
            }
        }, 500);
    };

    return (
        <div className="container">
            <div className="title">
                <h1>TRAFFIC LIGHT</h1>
            </div>
            <div className="traffic-light">
                <LightItem 
                    event={() => {lightOn === "green"? setLightOn("") : setLightOn("green")}} 
                    styles={"light light-green " + (lightOn === "green"? "green-on" : "")} 
                />
                <LightItem 
                    event={() => {lightOn === "yellow"? setLightOn("") : setLightOn("yellow")}} 
                    styles={"light light-yellow " + (lightOn === "yellow"? "yellow-on" : "")} 
                />
                <LightItem 
                    event={() => {lightOn === "red"? setLightOn("") : setLightOn("red")}} 
                    styles={"light light-red " + (lightOn === "red"? "red-on" : "")} 
                />
                {purpleRender? 
                    <LightItem 
                        event={() => {lightOn === "purple"? setLightOn("") : setLightOn("purple")}} 
                        styles={"light light-purple " + (lightOn === "purple"? "purple-on" : "")} 
                    /> 
                : null}
            </div>
            <div className="buttons-container">
                <button onClick={purpleToggle} className="purple-button">
                    PURPLE
                </button>
                <button onClick={cyclicLightOn} className="cyclic-button">
                    CYCLIC
                </button>
            </div>
            <div className="footer">
                Desing by <a href="https://github.com/s3rtr3s" target="_blank">Pedro Peña</a> with 🚥 
            </div>
        </div>
    )
};

export default TrafficLight;
