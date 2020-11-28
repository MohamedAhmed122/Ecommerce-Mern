import { FormControl, MenuItem, Select } from '@material-ui/core'
import React from 'react'

export default function FromSelect({children,selectValue, onChange, maniValue}) {
    return (
        <FormControl>
            <Select variant='outlined' value={selectValue} onChange={onChange}>
            <MenuItem value={maniValue}> {maniValue} </MenuItem>
               {children}
            </Select>
        </FormControl>
    )
}
