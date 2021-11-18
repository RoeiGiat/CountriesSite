import React, { useState } from 'react';
import "./App.css"
import ChoosenCountry from './ChoosenCountry';

const CountryData = (props) => {
    const [fleg, setFleg] = useState(false)
    let obj;
    fleg ? obj = <ChoosenCountry country={props.data} /> : console.log("nop")
    return (
        <div className="format">
            <img src={props.data.flags.png} ></img> <br />
            <div className="txt">
                <h3> {props.data.name.common} </h3>
                Population : {props.data.population} <br />
                Region : {props.data.continents[0]}<br />
                Capital : {props.data.capital}<br />
            </div>
            <a className="button" onClick={() => { setFleg(true) }}>More info</a>
            {obj}
        </div>


    );
};

export default CountryData;