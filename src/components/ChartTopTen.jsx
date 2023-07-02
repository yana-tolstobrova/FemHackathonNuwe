import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartUsersYear = () => {
  const [chartData, setChartData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const countriesResponse = await axios.get('https://femhack-ii-frontend-challenge.onrender.com/countries');
      const countries = countriesResponse.data.Countries;

      const chartData = [];
      for (let year = 1990; year <= 2020; year++) {
        const yearResponse = await axios.get(`https://femhack-ii-frontend-challenge.onrender.com/year/${year}`);
        const yearData = yearResponse.data.Data;

        const topCountries = getTopCountries(yearData, countries, 10);

        chartData.push({ year, data: topCountries });
      }

      setChartData(chartData);
    };

    fetchData();
  }, []);

  const getTopCountries = (yearData, countries, count) => {
    const countriesData = Object.entries(yearData).map(([country, data]) => ({
      country,
      internet_users_number: data.internet_users_number,
    }));

    const sortedCountries = countriesData.sort((a, b) => b.internet_users_number - a.internet_users_number);

    return sortedCountries.slice(0, count);
  };

  useEffect(() => {
    if (chartData && chartData.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % chartData.length);
      }, 2000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [chartData]);

  return (
    <div>
      {chartData && chartData.length > 0 && (
        <BarChart
          width={1200}
          height={500}
          data={chartData[currentIndex].data}
          layout="vertical" // Set layout to "vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" /> {/* Use XAxis as numeric axis */}
          <YAxis dataKey="country" type="category" /> {/* Use YAxis as category axis */}
          <Tooltip />
          <Legend />
          <Bar
            dataKey="internet_users_number"
            fill="rgba(75, 192, 192, 0.2)"
            stroke="rgba(75, 192, 192, 1)"
                  />

            <text x="50%" y={30} textAnchor="middle">
            Year: {chartData[currentIndex].year}
          </text>
        </BarChart>
      )}
    </div>
  );
};

export default ChartUsersYear;
