import React, { useState, useEffect } from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import { geoNaturalEarth1 } from 'd3-geo';
import countriesData from './countries.json';
import marImage from '../assets/map-img.png';
const numberOfCountries = 213

const hoverCountries = new Map();


const MapGeo = () => {
  const [selectedYear, setSelectedYear] = useState(2000);
  const [tooltipContent, setTooltipContent] = useState({ x: 0, y: 0, countryName: '', percentage: '0.00'});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://femhack-ii-frontend-challenge.onrender.com/countries');
        const data = await response.json();
        const countries = data.Countries;
        hoverCountries.clear()

        const countryDataPromises = countries.map(async (countryName) => {
          try {
            const countryForHTTP = countryName.replace(' ', '_');
            const countryResponse = await fetch(`https://femhack-ii-frontend-challenge.onrender.com/country/${countryForHTTP}/year/${selectedYear}`);
            const countryData = await countryResponse.json();

            hoverCountries.set(countryName, countryData.Data[countryName].internet_users_percentatge.toFixed(2));
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
  console.log(countriesData.features)

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
    <div style={{ position: 'relative', width: '40%', height: '670px' }}>
      <img src={marImage} alt="Mar" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4  }} />
      <div style={{ position: 'absolute', top: '0px', left: '0', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <label htmlFor="yearInput" style={{ fontSize: '26px', color: 'gray', marginTop: '45px' }}>Select Year</label>
          <input type="range" id="yearInput" value={selectedYear} onChange={handleYearChange} min={1980} max={2020} style={{ fontSize: '26px', marginLeft: '10px', width: '300px', marginTop: '45px'  }}/>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0px' }}>
          <span style={{ fontSize: '26px', color: 'gray', marginBottom: '30px' }}>{selectedYear}</span>
        </div>
    <ResponsiveChoropleth
        data={countriesData.features}
        features={countriesData.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 100]}
        unknownColor="#666666"
        label="properties.nombre"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={false}
        borderWidth={0.5}
        borderColor="#152538"
        projection={geoNaturalEarth1} 
        defs={[

        {
            id: 'linearGradientBlue',
            type: 'linearGradient',
            colors: [
                { offset: 0, color: '#0049d1' }, 
                { offset: 100, color: '#065dff' }, 
            ],
        },
         {
            id: 'linearGradientGreen',
            type: 'linearGradient',
            colors: [
                { offset: 0, color: '#00FF00' }, 
                { offset: 100, color: '#40ff40' }, 
            ],
        },
        {
            id: 'linearGradientPurple',
            type: 'linearGradient',
            colors: [
                { offset: 0, color: '#800080' }, 
                { offset: 100, color: '#900090' }, 
            ],
        },
        {
            id: 'linearGradientPink',
            type: 'linearGradient',
            colors: [
                { offset: 0, color: '#FF4081' }, 
                { offset: 100, color: '#ff2879' }, 
            ],
        }, 
        {
            id: 'yellow',
            type: 'linearGradient',
            colors: [
                { offset: 0, color: '#ffc107' }, 
                { offset: 100, color: '#ffd148' }, 
            ],
        }, 
        {
            id: 'red',
            type: 'linearGradient',
            colors: [
                { offset: 0, color: '#F02D12' }, 
                { offset: 100, color: '#ff1800' }, 
            ],
        },
        {
            id: 'darkGreen',
            type: 'linearGradient',
            colors: [
                { offset: 0, color: '#0E4A07' }, 
                { offset: 100, color: '#0b3b06' }, 
            ],
        },
        {
            id: 'lightGreen',
            type: 'linearGradient',
            colors: [
                { offset: 0, color: '#69F958' }, 
                { offset: 100, color: '#59ff44' }, 
            ],
        },
        {
            id: 'teal',
            type: 'solid',
            type: 'linearGradient',
            colors: [
                { offset: 0, color: '#39E7BA' }, 
                { offset: 100, color: '#8DD7C4' }, 
            ],
        },
        {
            id: 'brightYellow',
            type: 'linearGradient',
            colors: [
                { offset: 0, color: '#D7F712' }, 
            { offset: 100, color: '#EAD905' }, 
            ],
        },
        {
            id: 'gray',
            type: 'linearGradient',
            colors: [
                { offset: 0, color: '#cbcbcb' }, 
            { offset: 100, color: '#c0c0c0' }, 
            ],
        },
        {
            id: 'darkPurple',
            type: 'linearGradient',
            colors: [
                { offset: 0, color: '#7B05EA' }, 
                { offset: 100, color: '#AD5DF7' }, 
            ],
        },
        {
            id: 'vibrantOrange',
            type: 'linearGradient',
            colors: [
                { offset: 0, color: '#F7A35D' }, 
                { offset: 100, color: '#DC690A' }, 
            ],
        },
        {
            id: 'skyBlue',
            type: 'linearGradient',
            colors: [
                { offset: 0, color: '#0ACCDC' }, 
                { offset: 100, color: '#72E9F3' }, 
            ],
        },
        {
            id: 'babyBlue',
            type: 'linearGradient',
            colors: [
                { offset: 0, color: '#96D1F3' }, 
                { offset: 100, color: '#3E8FBD' }, 
            ],
        },
        {
            id: 'steelBlue',
            type: 'linearGradient',
            colors: [
                { offset: 0, color: '#2440BD' }, 
                { offset: 100, color: '#3B5AE8' }, 
          ],
        },
        {
            id: 'lightGray',
            type: 'linearGradient',
            colors: [
                { offset: 0, color: '#f0f0f0' }, 
                { offset: 100, color: '#f5f5f5' }, 
          ],
        },
    ]}
    fill={[
        {match: { id: 'AFG' },id: 'linearGradientGreen',},
        {match: { id: 'AGO' }, id: 'linearGradientPurple',},
        {match: { id: 'ALB' },id: 'linearGradientPink',},
        {match: { id: 'ARE' },id: 'yellow', },
        {match: { id: 'ARG' },id: 'red',},
        {match: { id: 'ARM' },id: 'gray',},
        {match: { id: 'ATA' },id: 'linearGradientBlue',},
        {match: { id: 'ATF' },id: 'linearGradientGreen',},
        {match: { id: 'AUS' },id: 'linearGradientPurple',},
        {match: { id: 'AUT' }, id: 'linearGradientPink',},
        {match: { id: 'AZE' },id: 'red',},
        {match: { id: 'BDI' },id: 'darkGreen',},
        {match: { id: 'BEL' },id: 'ligthGreen', },
        {match: { id: 'BEN' },id: 'teal',},
        {match: { id: 'BFA' },id: 'brightYellow',},
        {match: { id: 'BGD' },id: 'vibrantOrange',},
        {match: { id: 'BGR' },id: 'skyBlue',},
        {match: { id: 'BHS' },id: 'brightYellow',},
        {match: { id: 'BIH' }, id: 'babyBlue',},
        {match: { id: 'BLR' },id: 'steelBlue',},
        {match: { id: 'BLZ' },id: 'red',},
        {match: { id: 'BOL' },id: 'lightGreen', },
        {match: { id: 'BRA' },id: 'brightYellow',},
        {match: { id: 'BRN' },id: 'teal',},
        {match: { id: 'BTN' },id: 'gray',},
        {match: { id: 'BWA' },id: 'steelBlu',},
        {match: { id: 'CAF' },id: 'babyBlue',},
        {match: { id: 'CAN' }, id: 'darkGreen',},
        {match: { id: 'CHE' },id: 'teal',},
        {match: { id: 'CHL' },id: 'red',},
        {match: { id: 'CHN' },id: 'darkGreen', },
        {match: { id: 'CIV' },id: 'linearGradientPink',},
        {match: { id: 'CRI' },id: 'linearGradientBlue',},
        {match: { id: 'COL' },id: 'vibrantOrange',},
        {match: { id: 'COG' },id: 'babyBlue',},
        {match: { id: 'COD' },id: 'red',},
        {match: { id: 'CMD' }, id: 'steelBlue',},
        {match: { id: 'CYP' },id: 'darkPurple',},
        {match: { id: 'CZE' }, id: 'vibrantOrange',},
        {match: { id: 'DEU' },id: 'babyBlue',},
        {match: { id: 'DJI' },id: 'steelBlue', },
        {match: { id: 'DNK' },id: 'brightYellow',},
        {match: { id: 'DOM' },id: 'gray',},
        {match: { id: 'DZA' },id: 'linearGradientBlue',},
        {match: { id: 'ECU' },id: 'linearGradientGreen',},
        {match: { id: 'EGY' },id: 'linearGradientPurple',},
        {match: { id: 'ERI' }, id: 'linearGradientPink',},
        {match: { id: 'ESP' },id: 'red',},
        {match: { id: 'EST' },id: 'darkGreen',},
        {match: { id: 'ETH' },id: 'ligthGreen', },
        {match: { id: 'FIN' },id: 'teal',},
        {match: { id: 'FJI' },id: 'brightYellow',},
        {match: { id: 'FLK' },id: 'vibrantOrange',},
        {match: { id: 'FRA' },id: 'vibrantOrange',},
        {match: { id: 'GAB' },id: 'skyBlue',},
        {match: { id: 'GBR' }, id: 'babyBlue',},
        {match: { id: 'GEO' },id: 'steelBlue',},
        {match: { id: 'GHA' },id: 'darkPurple',},
        {match: { id: 'GIN' },id: 'lightGreen', },
        {match: { id: 'GMB' },id: 'darkGreen',},
        {match: { id: 'GNB' },id: 'brightYellow',},
        {match: { id: 'GNQ' },id: 'gray',},
        {match: { id: 'GRC' },id: 'steelBlu',},
        {match: { id: 'GRL' },id: 'babyBlue',},
        {match: { id: 'GTM' }, id: 'vibrantOrange',},
        {match: { id: 'GUY' },id: 'teal',},
        {match: { id: 'HND' },id: 'red',},
        {match: { id: 'HRV' },id: 'darkGreen', },
        {match: { id: 'HTI' },id: 'linearGradientPink',},
        {match: { id: 'HUN' },id: 'linearGradientBlue',},
        {match: { id: 'IDN' },id: 'vibrantOrange',},
        {match: { id: 'IND' },id: 'babyBlue',},
        {match: { id: 'IRL' },id: 'red',},
        {match: { id: 'IRN' }, id: 'steelBlue',},
        {match: { id: 'IRQ' },id: 'babyBlue',},
        {match: { id: 'ISL' }, id: 'steelBlue',},
        {match: { id: 'ISR' },id: 'teal',},
        {match: { id: 'ITA' },id: 'red',},
        {match: { id: 'JAM' },id: 'linearGradientBlue',},
        {match: { id: 'JOR' },id: 'linearGradientGreen',},
        {match: { id: 'JPN' },id: 'linearGradientPurple',},
        {match: { id: 'KAZ' }, id: 'linearGradientPink',},
        {match: { id: 'KEN' },id: 'gray',},
        {match: { id: 'KGZ' },id: 'darkPurple',},
        {match: { id: 'KHM' }, id: 'brightYellow',},
        {match: { id: 'OSA' },id: 'darkGreen',},
        {match: { id: 'KWT' },id: 'red', },
        {match: { id: 'LAO' },id: 'gray',},
        {match: { id: 'LBN' },id: 'lightGreen',},
        {match: { id: 'LBR' },id: 'linearGradientBlue',},
        {match: { id: 'LBY' },id: 'linearGradientGreen',},
        {match: { id: 'LKA' },id: 'linearGradientPurple',},
        {match: { id: 'LSO' }, id: 'linearGradientPink',},
        {match: { id: 'LTU' },id: 'red',},
        {match: { id: 'LUX' },id: 'darkGreen',},
        {match: { id: 'LVA' },id: 'ligthGreen', },
        {match: { id: 'MAR' },id: 'teal',},
        {match: { id: 'MDA' },id: 'brigthYellow',},
        {match: { id: 'MDG' },id: 'vibrantOrange',},
        {match: { id: 'MEX' },id: 'skyBlue',},
        {match: { id: 'MKD' },id: 'skyBlue',},
        {match: { id: 'MLI' }, id: 'babyBlue',},
        {match: { id: 'MMR' },id: 'steelBlue',},
        {match: { id: 'MNE' },id: 'gray',},
        {match: { id: 'MOZ' },id: 'yellow', },
        {match: { id: 'MRT' },id: 'linearGradientPink',},
        {match: { id: 'MWI' },id: 'linearGradientPurple',},
        {match: { id: 'MYS' },id: 'linearGradientGreen',},
        {match: { id: 'NAM' },id: 'steelBlue',},
        {match: { id: 'NCL' },id: 'babyBlue',},
        {match: { id: 'NER' }, id: 'teal',},
        {match: { id: 'NGA' },id: 'teal',},
        {match: { id: 'NIC' },id: 'red',},
        {match: { id: 'NLD' },id: 'darkGreen', },
        {match: { id: 'NOR' },id: 'linearGradientPink',},
        {match: { id: 'NPL' },id: 'linearGradientBlue',},
        {match: { id: 'NZL' },id: 'vibrantOrange',},
        {match: { id: 'OMN' },id: 'brightYellow',},
        {match: { id: 'PAK' },id: 'red',},
        {match: { id: 'PAN' }, id: 'steelBlue',},
        {match: { id: 'PER' },id: 'red',},
        {match: { id: 'PHL' }, id: 'gray',},
        {match: { id: 'PNG' },id: 'darkGreen',},
        {match: { id: 'POL' },id: 'brightYellow', },
        {match: { id: 'PRI' },id: 'darkPurple',},
        {match: { id: 'PRT' },id: 'gray',},
        {match: { id: 'PRY' },id: 'linearGradientBlue',},
        {match: { id: 'QAT' },id: 'linearGradientGreen',},
        {match: { id: 'ROU' },id: 'linearGradientPurple',},
        {match: { id: 'RUS' }, id: 'lightGray',},
        {match: { id: 'RWA' },id: 'red',},
        {match: { id: 'ESH' },id: 'darkGreen',},
        {match: { id: 'SDN' },id: 'ligthGreen', },
        {match: { id: 'SDS' },id: 'teal',},
        {match: { id: 'SEN' },id: 'brightYellow',},
        {match: { id: 'SLB' },id: 'vibrantOrange',},
        {match: { id: 'SLE' },id: 'red',},
        {match: { id: 'SLV' },id: 'skyBlue',},
        {match: { id: 'ABV' }, id: 'babyBlue',},
        {match: { id: 'SOM' },id: 'steelBlue',},
        {match: { id: 'SRB' },id: 'vibrantOrange',},
        {match: { id: 'SUR' },id: 'steelBlu',},
        {match: { id: 'SVK' },id: 'babyBlue',},
        {match: { id: 'SVN' }, id: 'red',},
        {match: { id: 'SWE' },id: 'teal',},
        {match: { id: 'SWZ' },id: 'red',},
        {match: { id: 'SYR' },id: 'darkGreen', },
        {match: { id: 'TCD' },id: 'linearGradientPink',},
        {match: { id: 'TGO' },id: 'linearGradientBlue',},
        {match: { id: 'THA' },id: 'vibrantOrange',},
        {match: { id: 'TJK' },id: 'lightGray',},
        {match: { id: 'TKM' },id: 'red',},
        {match: { id: 'TLS' }, id: 'steelBlue',},
        {match: { id: 'TTO' },id: 'babyBlue',},
        {match: { id: 'TUN' }, id: 'red',},
        {match: { id: 'TUK' },id: 'darkPurple',},
        {match: { id: 'TWN' },id: 'red',},
        {match: { id: 'TZA' },id: 'linearGradientBlue',},
        {match: { id: 'UGA' },id: 'linearGradientGreen',},
        {match: { id: 'UKR' },id: 'teal',},
        {match: { id: 'URY' }, id: 'linearGradientPink',},
        {match: { id: 'USA' },id: 'steelBlue',},
        {match: { id: 'UZB' },id: 'red',},
        {match: { id: 'VEN' }, id: 'steelBlue',},
        {match: { id: 'VNM' },id: 'babyBlue',},
        {match: { id: 'VUT' }, id: 'red',},
        {match: { id: 'PSE' },id: 'teal',},
        {match: { id: 'YEM' },id: 'red',},
        {match: { id: 'ZAF' },id: 'red',},
        {match: { id: 'ZMB' },id: 'darkGreen',},
        {match: { id: 'ZWE' },id: 'ligthGreen', },
        {match: { id: 'KOR' },id: 'teal',},
    ]}
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
      />
      </div>
        </div>
    </div>
  );
};

export default MapGeo;

