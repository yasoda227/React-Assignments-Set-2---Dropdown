import React, { useState } from "react";
import Towns from "./Towns";
import Options from "./Options";
const Cities = ({ city }) => {
    const [cityValue, setCityValue] = useState(0);
    const onChangeSelect = (e) => {
        setCityValue(e.target.value);
    };
    return (
        <div>
            <div id="city-name" className="slection_box">
                <div>
                    <label htmlFor="city">{"Cities : "}</label>
                    <select
                        name="city"
                        id="city"
                        onChange={(e) => {
                            onChangeSelect(e);
                        }}
                    >
                        {city.map((city, index) => {
                            return <Options key={city.name} item={city} index={index} />;
                        })}
                    </select>
                </div>
                <div className="des_box">
                    <div id="city-title">{city[cityValue].name}</div>
                    <div id="city-description">{city[cityValue].description}</div>
                </div>
            </div>
            <Towns town={city[cityValue].landmarks} />
        </div>
    );
};

export default Cities;