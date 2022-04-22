export const LOAD_WEATHER = 'LOAD_WEATHER'

export const loadWeather = (zip) => {
	return async (dispatch) => {
		const apikey = '1a226c5722a5a37173253cabe929e4d3'
		const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=imperial`
		const res = await fetch(path)
		const json = await res.json()
		const { cod, message } = json
        const feelsLike = json.main.feels_like
        const description = json.weather[0].description
		if (cod !== 200) {
			dispatch({
				type: LOAD_WEATHER,
				payload: { cod, message}
			})
			return
		}

		const { temp } = json.main
		// console.log(json)
		dispatch({
			type: LOAD_WEATHER,
			payload: { cod, temp, feelsLike, description }
		})
	}
}