import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react';

function Return() {
    const [value, setValue] = React.useState(null);

    return (
        <div>

            <LocalizationProvider dateAdapter={AdapterDateFns} >
                <Typography sx={{ marginBottom: 1 }}>Return</Typography>

                <DatePicker
                    label="Select Dates"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} variant="filled" sx={{ width: '100%' }}/>}
                />
            </LocalizationProvider>
        </div>
    );
}

export default Return;
