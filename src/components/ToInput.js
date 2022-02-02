import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FilledInput, FormControl, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import React from 'react';

function ToInput() {
    return (
        <FormControl variant="filled" sx={{ width: '100%' }}>
            <Typography sx={{marginBottom:1}}>To</Typography>
            <FilledInput
            placeholder="Select Departure"
                id="filled-adornment-from"
                // value={values.from}
                // onChange={handleChange('weight')}
                startAdornment={<InputAdornment position="start"><LocationOnIcon /></InputAdornment>}
                aria-describedby="filled-weight-helper-text"
                inputProps={{
                    'aria-label': 'from',
                }}
            />
        </FormControl>
    );
}

export default ToInput;
