import { FilledInput, FormControl, Typography } from '@mui/material';
import React from 'react';

function EventCode() {
    return (
        <FormControl variant="filled" sx={{ width: '100%' }}>
            <Typography sx={{ marginBottom: 1 }}>Voucher or event code</Typography>
            <FilledInput
                placeholder="Enter Code"
                id="filled-adornment-from"
                // value={values.from}
                // onChange={handleChange('weight')}
                
                aria-describedby="filled-weight-helper-text"
                inputProps={{
                    'aria-label': 'from',
                }}
            />
        </FormControl>
    );
}

export default EventCode;
