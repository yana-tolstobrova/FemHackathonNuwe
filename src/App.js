import './App.css';
import ChartUsersYearCountries from './components/ChartUsersYearCountry';
import ChartTopTen from './components/ChartTopTen'
import MapGeo from './components/MapGeo';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <MapGeo />
      <ChartUsersYearCountries />
      <ChartTopTen />
      <Footer />
    </div>
  );
}

export default App;
