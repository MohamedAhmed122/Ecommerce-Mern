import React from 'react'

import './StyleCustomButton.css'

export default function CustomButton({title, ...otherProps}) {
    return (
        <button className='customBtn' {...otherProps}>
            {title}
        </button>
    )
}
