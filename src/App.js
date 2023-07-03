import './App.css';
import ChartTopTen from './components/Charts/ChartTopTen'
import Intro from './components/Intro/Intro'
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground'
import ChartUsersYear from './components/Charts/ChartUsersYear'
import ChartUsersYearCountries from './components/Charts/ChartUsersYearCountry';
import MapGeo from './components/MapGeo/MapGeo';
function App() {
  return (
    <div>
      <div className='hero-section'>
        <AnimatedBackground />
        <Intro />
      </div>
      <div className='block'>
        <ChartUsersYear />
        <h2>How many Internet users could access the Internet per year?</h2>
      </div>
      <div>
        <h2 className='line'>How many Internet users each country could access the Internet?</h2>
        <ChartUsersYearCountries />
      </div>
      <div className='block'>
        <h2>Top 10 Countries with the largest number of internet users</h2>
        <ChartTopTen />
      </div>
      <MapGeo/>
    </div>
  );
}

export default App;
