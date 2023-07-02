import './App.css';
import ChartUsersYearCountries from './components/ChartUsersYearCountry';
import ChartTopTen from './components/ChartTopTen'

function App() {
  return (
    <div>
      <ChartUsersYearCountries />
      <ChartTopTen />
    </div>
  );
}

export default App;
