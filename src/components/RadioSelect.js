import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

function RadioSelect() {
    return (
        <FormControl>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"

            >
                <FormControlLabel value="One way" control={<Radio />} label="One way" />
                <FormControlLabel value="Round trip" control={<Radio />} label="Round trip" />

                {/* radio button  */}
            </RadioGroup>

           
            
        </FormControl>
    );
}

export default RadioSelect;