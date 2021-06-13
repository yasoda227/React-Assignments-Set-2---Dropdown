import React, { useState } from "react";
import Options from "./Options";
import Cities from "./Cities";

const States = ({ states }) => {
    const [stateValue, setStateValue] = useState(0);
    const onChangeSelect = (e) => {
        setStateValue(e.target.value);
    };

    return (
        <div>
            <div id="state-name" className="slection_box">
                <div>
                    <label htmlFor="state">{"States : "}</label>
                    <select
                        name="state"
                        id="state"
                        onChange={(e) => {
                            onChangeSelect(e);
                        }}
                    >
                        {states.map((state, index) => {
                            return <Options key={state.name} item={state} index={index} />;
                        })}
                    </select>
                </div>
                <div className="des_box">
                    <div id="state-title">{states[stateValue].name}</div>
                    <div id="state-description">{states[stateValue].description}</div>
                </div>
            </div>
            <Cities city={states[stateValue].city} />
        </div>
    );
};

export default States;