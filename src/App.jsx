import React, { useState } from "react";
import axios from "axios";
import City from "./components/City";
import Zip from "./components/Zip";
import SearchButton from "./components/SearchButton";
import Temperature from "./components/Tempreature";
import RecentSearches from "./components/RecentSearches";
import "./App.css";

const App = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setZipCode("");
  };

  const handleZipCodeChange = (zip) => {
    setZipCode(zip);
    setSelectedCity("");
  };

  const handleSearch = async () => {
    if (!selectedCity && !zipCode) {
      alert("Please select a city or enter a zipcode.");
      return;
    }

    if (selectedCity && zipCode) {
      alert("Please select either city or enter a zipcode, not both.");
      return;
    }

    let url;
    if (selectedCity) {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        selectedCity
      )}&appid=144146134279ec181fa0c5e95dcb2fae`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        zipCode
      )}&appid=144146134279ec181fa0c5e95dcb2fae`;
    }

    try {
      const response = await axios.get(url);
      const data = response.data;
      const temperature = data.main.temp - 273.15;
      const newResult = {
        city: selectedCity,
        temperature: temperature,
      };

      setSearchResults([newResult, ...searchResults].slice(0, 3));
      setRecentSearches([newResult, ...recentSearches].slice(0, 3));
    } catch (error) {
      alert("Error fetching weather data. Please try again.");
    }
  };

  const handleReset = () => {
    setSelectedCity("");
    setZipCode("");
    setSearchResults([]);
  };

  return (
    <div>
      <h1>Weather Widget</h1>
      <City value={selectedCity} onChange={handleCityChange} />
      <Zip value={zipCode} onChange={handleZipCodeChange} />
      <button onClick={handleReset}>Reset</button>
      <SearchButton onClick={handleSearch} />
      <RecentSearches recentSearches={recentSearches} />
      <Temperature results={searchResults} />
    </div>
  );
};

export default App;
