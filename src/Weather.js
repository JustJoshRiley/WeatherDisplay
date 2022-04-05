import { useState } from 'react';
import RadioButton from './RadioButton';
import WeatherDisplay from './WeatherDisplay';
import './Weather.css'

function Weather() {
    const [zip, setZip] = useState('')
    const [unit, setUnit] = useState('')
    const [data, setData] = useState()

    async function fetchWeather() {
        const apikey = '1a226c5722a5a37173253cabe929e4d3'
        const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${unit}`
        const res = await fetch(path)
        const json = await res.json()

        const cod = json.cod
        const message = json.message

        if (cod !== 200) {
            setData({cod, message})
            return
        }

        const temp = json.main.temp
        const feelsLike = json.main.feels_like
        const description = json.weather[0].description

        setData({
            cod,
            message,
            temp,
            feelsLike,
            description
        })
    }

    return (
        <div className='Weather'>
            <div>
                {data && <WeatherDisplay {...data}/>}
                <h1>{zip}</h1>
                <h4>{unit}</h4>
            </div>
            <form onSubmit={e => {
                e.preventDefault()
                fetchWeather()
            }}>
                <div className='form-container'>
                    <input
                    placeholder='Enter Zip Code'
                    value={zip}
                    onChange={e => setZip(e.target.value)}
                    />
                    <select 
                        onChange={e => setUnit(e.target.value)}
                        value={unit}
                    >
                        <option value="metric">Celcius</option>
                        <option value="imperial">Farenhiett</option>
                        <option value="standard">Kelvin</option>
                    </select>
                    <div className='radio-container'>
                        <RadioButton
                        label="Metric"
                        name="unit"
                        checked={unit === 'metric'}
                        onChange={() => setUnit('metric')}
                        />
                        <RadioButton
                        label="Imperial"
                        name="unit"
                        checked={unit === 'imperial'}
                        onChange={() => setUnit('imperial')}
                        />
                        <RadioButton
                        label="Standard"
                        name="unit"
                        checked={unit === 'standard'}
                        onChange={() => setUnit('standard')}
                        />
                    </div>
                </div>
                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}

export default Weather