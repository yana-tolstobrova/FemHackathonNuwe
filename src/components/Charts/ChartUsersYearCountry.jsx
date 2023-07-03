import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ChartUsersYearCountries() {
  const [countries, setCountries] = useState([]);
  const [countryData, setCountryData] = useState(null);
  const [currentYear, setCurrentYear] = useState(1990);
  const [countryName, setCountryName] = useState('');
  const [chartColor, setChartColor] = useState('#3E98C7'); // Default color

  useEffect(() => {
    const fetchData = async () => {
      const countriesResponse = await axios.get('https://femhack-ii-frontend-challenge.onrender.com/countries');
      const countries = countriesResponse.data.Countries;
      setCountries(countries);

      const countryResponse = await axios.get(`https://femhack-ii-frontend-challenge.onrender.com/country/${countries[0]}`);
      const countryData = countryResponse.data.Data;

      setCountryName(countries[0]);
      setCountryData(countryData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear((prevYear) => (prevYear >= 2020 ? 1990 : prevYear + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getPercentage = (yearData) => {
    const data = yearData[currentYear.toString()];
    return data ? data.internet_users_percentatge : 0;
  };

  const handleYearChange = (e) => {
    setCurrentYear(parseInt(e.target.value));
  };

  const handleCountryChange = async (e) => {
    const selectedCountry = e.target.value;
    setCountryName(selectedCountry);

    const countryResponse = await axios.get(`https://femhack-ii-frontend-challenge.onrender.com/country/${selectedCountry}`);
    const countryData = countryResponse.data.Data;
    setCountryData(countryData);

    const randomColor = generateRandomColor();
    setChartColor(randomColor);
  };

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      {countryData && (
        <div style={{ textAlign: 'center', width:'80%', margin: '60px auto'}}>
        <div style={{ display: 'flex', justifyContent: 'space-evently', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '20%' }}>
            <span style={{ color:'white', fontSize: '16px'}}>1990</span>
            <input type="range" min="1990" max="2020" value={currentYear} onChange={handleYearChange} />
            <span style={{ color:'white', fontSize: '16px'}}>2020</span>
          </div>
          <div style={{ width: '20em', margin: '0 auto 20px auto' }}>
            <CircularProgressbar
              value={getPercentage(countryData)}
              text={`${getPercentage(countryData).toFixed(2)}%`}
              styles={{
                path: {
                  stroke: chartColor,
                  strokeLinecap: 'butt',
                  transition: 'ease-in-out 0.1s ease 0s',
                },
                trail: {
                  stroke: '#D6D6D6',
                  strokeLinecap: 'butt',
                },
                text: {
                  fill: chartColor,
                  fontSize: '16px',
                },
              }}
            />
            </div>
            <h2 style={{ fontSize:'24px', textAlign: 'center', width: '20%', color:'white'}} > {currentYear}</h2>
          
          </div>
        <select value={countryName} onChange={handleCountryChange} style={{ textAlign: 'center', fontSize:'22px', marginBottom:'20px' }}>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select></div>
      )}
    </div>
  );
}
