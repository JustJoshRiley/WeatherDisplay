import './WeatherDisplay.css'

function WeatherDisplay(props) {
    const {temp, feelsLike, description, cod, message} = props

    if (cod !== 200) {
        return (
            <small className='Error'>Error: {message}</small>
        )
    }

    return (
        
        <div className="WeatherDisplay">
            <h1>Temperature: {temp}</h1>
            <small>Feels Like: {feelsLike}</small>
            <p>{description}</p>
        </div>
    )
}

export default WeatherDisplay