import './App.css';
import ChartTopTen from './components/ChartTopTen'
import Intro from './components/Intro/Intro'
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground'
import ChartUsersYear from './components/ChartUsersYear'
import ChartUsersYearCountries from './components/ChartUsersYearCountry';
import MapGeo from './components/MapGeo/MapGeo';
function App() {
  return (
    <div>
      <div className='hero-section'>
        <AnimatedBackground />
        <Intro />
      </div>
      <ChartUsersYear />
      <ChartUsersYearCountries />
      <ChartTopTen />
      <MapGeo/>
    </div>
  );
}

export default App;
