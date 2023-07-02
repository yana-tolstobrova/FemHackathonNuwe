import './App.css';
import ChartTopTen from './components/ChartTopTen'
import Intro from './components/Intro/Intro'
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground'
import Map from './components/MapGeo'
import ChartUsersYear from './components/ChartUsersYear'
import ChartUsersYearCountries from './components/ChartUsersYearCountry';
function App() {
  return (
    <div>
      <AnimatedBackground />
      <Intro />
      <ChartTopTen />
      <ChartUsersYear />
      <ChartUsersYearCountries />
      <Map />
    </div>
  );
}

export default App;
