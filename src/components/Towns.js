import React, { useState } from "react";
import Options from "./Options";
const Towns = ({ town }) => {
    const [townValue, setTownValue] = useState(0);
    const onChangeSelect = (e) => {
        setTownValue(e.target.value);
    };
    return (
        <div id="landmark-name" className="slection_box">
            <div>
                <label htmlFor="landmark">{"Towns : "}</label>
                <select
                    name="landmark"
                    id="landmark"
                    onChange={(e) => {
                        onChangeSelect(e);
                    }}
                >
                    {town.map((town, index) => {
                        return <Options key={town.name} item={town} index={index} />;
                    })}
                </select>
            </div>
            <div className="des_box">
                <div id="landmark-title">{town[townValue].name}</div>
                <div id="landmark-description">{town[townValue].description}</div>
            </div>
        </div>
    );
};

export default Towns;