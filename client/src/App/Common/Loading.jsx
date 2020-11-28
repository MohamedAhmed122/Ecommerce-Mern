import { Backdrop, CircularProgress } from '@material-ui/core'
import React from 'react'

export default function Loading() {
    return (
        <Backdrop style={{zIndex: 100, color: '#fff', backgroundColor: '#000', }} open={true}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
