import React, { useState } from 'react';

const ChoosenCountry = (props) => {
    const [className, setClass] = useState("")
    return (
        <div>
            <div className={className}>
                <div className="popup">
                    <div className="flex">
                        <img src={props.country.flags.png} ></img> <br />
                        <a className="close" onClick={() => { setClass("overlay") }} href="#">&times;</a>
                        <h4> {props.country.name.common} </h4>
                    </div>
                    <br /><br />
                    <div className="flex">
                        <div>
                            <h5> Area: {props.country.area} </h5>
                            <h5> Fifa: {props.country.fifa} </h5>
                            <h5> UnMember: {props.country.unMember.toString()} </h5>
                        </div>
                        <div className="br">
                            <h5> Start Of Week: {props.country.startOfWeek} </h5>
                            <h5> Status: {props.country.status} </h5>
                            <h5> Subregion: {props.country.subregion} </h5>
                        </div>
                        <div className="br">
                            <h5> Land locked: {props.country.landlocked.toString()} </h5>
                            <h5> Flag: {props.country.flag} </h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChoosenCountry;