import './App.css';
import DisplayWeather from './DisplayWeather';
// import Weather from './Weather';
import LoadWeather from './LoadWeather';

function App() {
  return (
    <div className="App">
      {/* <Weather /> */}
      <div id="WeatherForm">
        <LoadWeather />
      </div>
      <div id="DisplayResponse">
        <DisplayWeather />
      </div>
    </div>
  );
}

export default App;
