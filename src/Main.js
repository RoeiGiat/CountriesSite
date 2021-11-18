import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryData from './CountryData';
import "./App.css"

const Main = () => {
    const [countries, setCountries] = useState([])
    const [countrySerchecd, setCountry] = useState("")
    const [region, setRegion] = useState("All")

    useEffect(async () => {
        let respFromAPI = await axios.get('https://restcountries.com/v3.1/all')
        setCountries(respFromAPI.data)
    }, [])

    /* עובד להעלות ל git */
    let relevantContinentCountries;
    region == "All" ? relevantContinentCountries = countries.map((country) => <CountryData data={country} />) : relevantContinentCountries = countries.filter(country => country.continents[0] == region).map((country) => <CountryData data={country} />)
    countrySerchecd != "" ? relevantContinentCountries = countries.filter((country) => country.name.common.includes(countrySerchecd)).map((country) => <CountryData data={country} />) : console.log();
    console.log(relevantContinentCountries);
    return (
        <div>
            <h1> Where in the world? </h1>
            <input type="text" className="input" placeholder="Search for a country..." onChange={(e) => { setCountry(e.target.value) }} />
            <select onChange={(e) => setRegion(e.target.value)}>
                <option value={"All"}> Filter by Region </option>
                <option value={"Africa"}> Africa </option>
                <option value={"America"}> America </option>
                <option value={"Asia"}> Asia </option>
                <option value={"Europe"}> Europe </option>
                <option value={"Oceania"}> Oceania </option>
            </select>
            <div className="flex"> {relevantContinentCountries}  </div>
        </div>
    );
};

export default Main;