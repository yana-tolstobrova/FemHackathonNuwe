import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

export default function Charts() {
  const [chartData, setChartData] = useState([]);

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
          x: startYear + index,
          y: response.data.Data.Total
        }));
        setChartData(chartData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: '1200px', height: '400px' }}>
      {chartData.length > 0 ? (
        <Chart
          options={{
            chart: {
              id: 'line-chart',
            },
            xaxis: {
              type: 'numeric',
              title: {
                text: 'Year',
              },
            },
            yaxis: {
              title: {
                text: 'Data',
              },
            },
          }}
          series={[
            {
              name: 'Data',
              data: chartData,
            },
          ]}
          type="line"
          height={400}
        />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
}
