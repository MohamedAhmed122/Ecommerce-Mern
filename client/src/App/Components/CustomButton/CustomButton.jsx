import React from 'react'

import './StyleCustomButton.css'

export default function CustomButton({title, inverted, ...otherProps}) {
    return (
        <button className={inverted? 'customB customBtn_plus' :'customB customBtn'} {...otherProps}>
            {title}
        </button>
    )
}
