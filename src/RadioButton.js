import './RadioButton.css'

function RadioButton(props) {
    const {label, name, checked, onChange} = props

    return (
        <div className='radio'>
            <label>
                {label}
                <input
                id='metric'
                type="radio"
                name={name}
                checked={checked}
                onChange={onChange}
                />
            </label>
        </div>
    )
}

export default RadioButton