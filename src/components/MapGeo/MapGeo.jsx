import React, { useState, useEffect } from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import { geoNaturalEarth1 } from 'd3-geo';
import countriesData from './countries.json';
import marImage from '../../assets/map-img.png';
const numberOfCountries = 213;

const hoverCountries = new Map();
const yearPercentageData = {};

const generateFillConfig = (data) => {
    const fill = [];
    const defs = [];
  
    if (data) {
      Object.entries(data).forEach(([range, countries]) => {
        const gradientId = `gradient-${range}`;
  
        defs.push({
          id: gradientId,
          type: 'linearGradient',
          colors: getGradientColors(range),
        });
  
        countries.forEach((country) => {
          fill.push({
            match: { id: country },
            id: gradientId,
          });
        });
      });
    }
  
    return { fill, defs };
  };

  const getGradientColors = (range) => {
    switch (range) {
      case '0-20':
        return [
          { offset: 0, color: '#F92510' },
          { offset: 100, color: '#F92510' },
        ];
      case '21-40':
        return [
          { offset: 0, color: '#FFC300 ' },
          { offset: 100, color: '#FFC300 ' },
        ];
      case '41-60':
        return [
          { offset: 0, color: '#218426' },
          { offset: 100, color: '#218426' },
        ];
      case '61-80':
        return [
          { offset: 0, color: '#0869D7' },
          { offset: 100, color: '#0869D7' },
        ];
      case '81-100':
        return [
          { offset: 0, color: '#8E3EC2' },
          { offset: 100, color: '#8E3EC2' },
        ];

      default:
        return [];
    }
  };
   

const MapGeo = () => {
  const [selectedYear, setSelectedYear] = useState(2000);
  const [tooltipContent, setTooltipContent] = useState({ x: 0, y: 0, countryName: '', percentage: '0.00' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://femhack-ii-frontend-challenge.onrender.com/countries');
        const data = await response.json();
        const countries = data.Countries;
        hoverCountries.clear();

        const countryDataPromises = countries.map(async (countryName) => {
          try {
            const countryForHTTP = countryName.replace(' ', '%20');
            const countryResponse = await fetch(`https://femhack-ii-frontend-challenge.onrender.com/country/${countryForHTTP}/year/${selectedYear}`);
            const countryData = await countryResponse.json();

            const percentage = countryData.Data[countryName].internet_users_percentatge.toFixed(2);
            hoverCountries.set(countryName, percentage);

            if (!yearPercentageData[selectedYear]) {
              yearPercentageData[selectedYear] = {
                '0-20': [],
                '21-40': [],
                '41-60': [],
                '61-80': [],
                '81-100': []
              };
            }

            if (percentage >= 0 && percentage <= 20) {
              yearPercentageData[selectedYear]['0-20'].push(countryName);
            } else if (percentage >= 21 && percentage <= 40) {
              yearPercentageData[selectedYear]['21-40'].push(countryName);
            } else if (percentage >= 41 && percentage <= 60) {
              yearPercentageData[selectedYear]['41-60'].push(countryName);
            } else if (percentage >= 61 && percentage <= 80) {
              yearPercentageData[selectedYear]['61-80'].push(countryName);
            } else if (percentage >= 81 && percentage <= 100) {
              yearPercentageData[selectedYear]['81-100'].push(countryName);
            }

            return { id: countryName, ...countryData.Data[countryName].internet_users_percentatge };
          } catch (error) {
            hoverCountries.set(countryName, '0.00');
            console.log(`Error al obtener datos para ${countryName}:`, error);
            return null;
          }
        });

        const countryData = await Promise.all(countryDataPromises);
        setTooltipContent(countryData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedYear]);

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  const handleMouseLeave = () => {
    setTooltipContent({ x: 0, y: 0, countryName: '', percentage: '0.00' });
  };

  const fillConfig = generateFillConfig(yearPercentageData[selectedYear]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
      <div style={{ position: 'relative', width: '100%', height: '900px' }}>
        <img src={marImage} alt="Mar" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
        <div style={{ position: 'absolute', top: '0px', left: '0', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <label htmlFor="yearInput" style={{ fontSize: '26px', color: 'black', marginTop: '45px' }}>Select Year</label>
            <input type="range" id="yearInput" value={selectedYear} onChange={handleYearChange} min={1980} max={2020} style={{ fontSize: '26px', marginLeft: '10px', width: '300px', marginTop: '45px' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0px' }}>
            <span style={{ fontSize: '26px', color: 'black', marginBottom: '30px' }}>{selectedYear}</span>
          </div>
          <ResponsiveChoropleth
            data={countriesData.features}
            features={countriesData.features}
            margin={{ top: 40, right: 0, bottom: 0, left: 0 }}
            colors="nivo"
            domain={[0, 100]}
            unknownColor="#666666"
            label="properties.nombre"
            valueFormat=".2s"
            projectionScale={160}
            projectionTranslation={[0.5, 0.5]}
            projectionRotation={[0, 0, 0]}
            enableGraticule={false}
            borderWidth={0.5}
            borderColor="#152538"
            projection={geoNaturalEarth1}
            defs={fillConfig.defs}
            fill={fillConfig.fill}
            tooltip={({ feature }) => (
              <div className="bg-white p-4 rounded-md" style={{ backgroundColor: "white", padding: "10px", fontSize: "16px" }}>
                <strong>{feature.properties.name}</strong>
                <br />
                {hoverCountries.size >= numberOfCountries ? (
                  hoverCountries.has(feature.properties.name) ? (
                    <>
                      Internet Users: {hoverCountries.get(feature.properties.name)}%
                      <br />
                    </>
                  ) : (
                    'No Data'
                  )
                ) : (
                  'Loading...'
                )}
              </div>
            )}
            onMouseLeave={handleMouseLeave}
            legends={[
                {
                  anchor: 'bottom-left',
                  direction: 'column',
                  justify: false,
                  translateX: 150,
                  translateY: -250,
                  itemsSpacing: 1,
                  itemWidth: 65,
                  itemHeight: 25,
                  itemDirection: 'left-to-right',
                  itemTextColor: '#444444',
                  itemOpacity: 0.9,
                  symbolSize: 20,
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemTextColor: '#000000',
                        itemOpacity: 1
                      }
                    }
                  ],
                  title: 'Legend', 
                  data: [
                    {
                      label: '0-20%',
                      id: '0-20',
                      color: '#F92510'
                    },
                    {
                      label: '21-40%',
                      id: '21-40',
                      color: '#FFC300'
                    },
                    {
                      label: '41-60%',
                      id: '41-60',
                      color: '#218426'
                    },
                    {
                      label: '61-80%',
                      id: '61-80',
                      color: '#0869D7'
                    },
                    {
                      label: '81-100%',
                      id: '81-100',
                      color: '#8E3EC2'
                    },
                    {
                        label: 'Nan',
                        id: '00',
                        color: '#5D6D7E'
                    }
                  ], 
                }
              ]}
               
          />
        </div>
      </div>
    </div>
  );
};

export default MapGeo;
