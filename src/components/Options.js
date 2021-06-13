import React from "react";

const Options = ({ item, index }) => {
    return <option value={index}>{item.name}</option>;
};

export default Options;