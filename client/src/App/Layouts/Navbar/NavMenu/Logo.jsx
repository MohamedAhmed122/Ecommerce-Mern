import Lottie from 'react-lottie';
import cart from "../../../../Animation/cart.json"
import React from 'react'

export default function Logo({...props}) {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: cart,
      };
    return (
        <Lottie options={defaultOptions}
            height={50}
            width={50}
            />
    )
}
