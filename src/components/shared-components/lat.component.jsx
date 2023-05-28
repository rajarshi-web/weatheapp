import { useEffect, useState } from "react";
import InputComponent from "./input.component";
function LatComponent(props) {
    const getLat = (value)=>{
        props.getLat(value);
    }
    return (
        <InputComponent initial={props.lat} getValue = {getLat}></InputComponent>
    )
  }
  
  export default LatComponent;