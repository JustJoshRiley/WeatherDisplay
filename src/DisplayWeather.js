import { useSelector } from 'react-redux'
import './WeatherDisplay.css'


function DisplayWeather() {
	const weather = useSelector(state => state.weather)
	
	if (weather === null) {
		return null
	}

	console.log(weather)

	return (
		<div className="WeatherDisplay">
            <h1>Temperature: {weather.temp}</h1>
            <h6>Feels Like: {weather.feelsLike}</h6>
            <p>{weather.description}</p>
        </div>
	)
}

export default DisplayWeather