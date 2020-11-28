import { Backdrop } from '@material-ui/core'
import Lottie from 'react-lottie';
import Loader from '../../Animation/8721-loading.json'
import React from 'react'

export default function Loading({...props}) {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: Loader,
      };
    return (
        <Backdrop style={{zIndex: 100, color: '#fff', backgroundColor: '#000', }}{...props} open={true}>
            <Lottie options={defaultOptions}
              height={400}
              width={400}
              />
        </Backdrop>
    )
}
