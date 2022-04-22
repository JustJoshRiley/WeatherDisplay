import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loadWeather } from './actions'
import './LoadWeather.css'

function LoadWeather() {
	const [zip, setZip] = useState('')
    const dispatch = useDispatch()

	return (
        <div className='Weather'>
            <form 
                
                onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(loadWeather(zip))
                }}
            >
                <input 
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder='Enter Zip'
                    type="text"
                />
                <button id="submit-button" type='submit'>Submit</button>
            </form>
        </div>
	)
}

export default LoadWeather