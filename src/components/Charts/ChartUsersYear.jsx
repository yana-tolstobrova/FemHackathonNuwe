import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Charts() {
  const [chartData, setChartData] = useState([]);
  const [animationIndex, setAnimationIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = 'https://femhack-ii-frontend-challenge.onrender.com/internet-users/';
      const startYear = 1990;
      const endYear = 2020;
      const dataPromises = [];

      for (let year = startYear; year <= endYear; year++) {
        const url = `${baseUrl}${year}`;
        dataPromises.push(axios.get(url));
      }

      try {
        const responses = await Promise.all(dataPromises);
        const chartData = responses.map((response, index) => ({
          year: startYear + index,
          data: response.data.Data.Total
        }));
        setChartData(chartData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const animateChart = () => {
      if (animationIndex < chartData.length) {
        setTimeout(() => {
          setAnimationIndex(animationIndex + 1);
        }, 1000);
      }
    };

    animateChart();
  }, [animationIndex, chartData]);

  const formatYAxisValue = (value) => {
    if (value >= 1000000) {
      return `${value / 1000000000}B`;
    }
    return value;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label}`}</p>
          <p className="intro">{`Internet users: ${data.data}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: '700px', height: '400px' }}>
      {chartData.length > 0 ? (
        <LineChart width={700} height={400} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={formatYAxisValue} />
          <Tooltip content={<CustomTooltip />} />
          <Legend payload={[{ value: 'Years', type: 'line' }]} />
          <Line
            type="monotone"
            dataKey="data"
            stroke="#3E98C7"
            strokeWidth={2}
            isAnimationActive={false}
            dot={false}
          />
          {animationIndex < chartData.length && (
            <Line
              type="monotone"
              data={chartData.slice(0, animationIndex + 1)}
              dataKey="data"
              stroke="#3E98C7"
              strokeWidth={2}
              animationDuration={1000}
              dot={false}
            />
          )}
        </LineChart>
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
}
