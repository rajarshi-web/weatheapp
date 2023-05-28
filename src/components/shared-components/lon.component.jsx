import { useState, useEffect } from "react";
import InputComponent from "./input.component";
function LonComponent(props) {
    const getLon = (value)=>{
        props.getLon(value);
    }
    return (
        // <input type="search" placeholder="longitude" value={search1} className="inputField" onChange={(event) => {
        //     setSearch1(event.target.value)
        // }} />
        <InputComponent initial={props.lon} getValue = {getLon}></InputComponent>
    )
}

export default LonComponent;