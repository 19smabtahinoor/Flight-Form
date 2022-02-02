import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react';

function Deparature() {
    const [value, setValue] = React.useState(null);

    return (
        <div>

            <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ width: '100%' }}>
                <Typography sx={{ marginBottom: 1 }}>Departure</Typography>

                <DatePicker
                    label="Select Dates"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} variant="filled" sx={{ width: '100%' }} />}
                />
            </LocalizationProvider>
        </div>
    );
}

export default Deparature;