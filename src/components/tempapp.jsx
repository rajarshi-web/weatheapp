import React, { useEffect, useState } from "react";
import LatComponent from "./shared-components/lat.component";
import LonComponent from "./shared-components/lon.component";
window.callAPITimeout = null;
const TempApp = () => {
    let [lat, setLat] = useState('');
    let [lon, setLon] = useState('');
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (pos) {
            setLat(pos.coords.latitude);
            setLon(pos.coords.longitude);
            callAPI();
        });
    }, []);

    const [response, setResponse] = useState({
        main: {
            temp: '',
            temp_min: '',
            temp_max: ''
        },
        name: ''
    });

    const fetchApi = async () => {
        console.log('fetch api called');
        try {
            if (lat != '' && lon != '') {
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bd5e378503939ddaee76f12ad7a97608`
                const response = await fetch(url);
                // console.log(response);
                const resJson = await response.json();
                console.log(resJson);
                // setlat(resJson);
                // setlon(resJson);
                setResponse(resJson);
            } else {
                throw new Error("lat long is empty");
            }
        } catch (error) {
            setResponse({
                main: {
                    temp: '',
                    temp_min: '',
                    temp_max: ''
                },
                name: ''
            });
        }
    }
    const getSearchValue = (value) => {
        setLat(value);
        callAPI();
    }
    const getSearch1Value = (value) => {
        setLon(value);
        callAPI();
    }
    const callAPI = () => {
        console.log('lat lon -> ', lat, lon);
        fetchApi();
    }
    useEffect(() => {
        fetchApi();
    }, []);
    useEffect(() => {
        console.log('component modified');
    });

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <LatComponent lat={lat} getLat={getSearchValue}></LatComponent>
                    <LonComponent lon={lon} getLon={getSearch1Value}></LonComponent>
                </div>
            </div>

            <div className="info">
                <h5 className="loaction"><span><i className="fa-solid fa-earth-oceania"></i></span>Latitute: {lat}</h5>
                <h5 className="loaction"><span><i className="fa-solid fa-earth-americas"></i></span>Longitude: {lon}</h5>
                <h3 className="city">City <b>{response.name}</b></h3>
                <h3 className="temp">{response.main?.temp ?? 'X'}°F</h3>
                <h5 className="tempin_max">Min {response.main?.temp_min ?? 'X'}°F | Max {response.main?.temp_max ?? 'X'}°F</h5>
            </div>
        </>
    )
}

export default TempApp