import { useState, useEffect } from "react";
function InputComponent(props) {
    const [value, setValue] = useState(props.initial);
    useEffect(()=>{
        props.getValue(value);
    },[value]);
    useEffect(()=>{
        setValue(props.initial);
    },[props.initial])
    return (
        <input type="search" placeholder="longitude" value={value} className="inputField" onChange={(event) => {
            setValue(event.target.value)
        }} />
    )
}

export default InputComponent;