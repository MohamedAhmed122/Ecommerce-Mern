import React from 'react'
import './StyleCustomInput.css'

export default function CustomInput({placeholder,Icon, ...otherpros}) {
    return (
        <div className='custom_input'>
            {Icon && <Icon style={{color: 'gray'}} />}
            <input className='custom_input__input' placeholder={placeholder} />
        </div>
    )
}
