import './App.css';
import ChartUsersYearCountries from './components/ChartUsersYearCountry';
import ChartTopTen from './components/ChartTopTen'
import MapGeo from './components/MapGeo';

function App() {
  return (
    <div>
      <MapGeo />
      <ChartUsersYearCountries />
      <ChartTopTen />
    </div>
  );
}

export default App;
