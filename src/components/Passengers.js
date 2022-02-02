import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { FormControl, MenuItem, Select, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function Passengers(props) {
    const [travelClass, setTravelClass] = React.useState("Select")
    const [adultCount, setAdultCount] = React.useState(0);
    const [childCount, setChildCount] = React.useState(4);

    //adult increase 
    const handleAdultIncrease = () => {
        setAdultCount(adultCount + 1)
    }
    //adult decsreae 
    const handleAdultDescrease = () => {
        if (adultCount > 0) {
            setAdultCount(adultCount - 1)
        } else {
            setAdultCount(0)
        }

    }

    //child increase 
    const handleChildIncrease = () => {
        setChildCount(childCount + 1)
    }
    //child decsreae
    const handleChildDescrease = () => {
        if (adultCount > 0) {
            setChildCount(childCount - 1)
        } else {
            setChildCount(0)
        }

    }




    return (
        <FormControl variant="filled" sx={{ width: '100%' }}>
            <Typography sx={{ marginBottom: 1 }}>Passengers/travel class</Typography>
            <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value="dfs"
            // onChange={handleChange}
            >
                <Box sx={{ padding: 3 }}>
                    {/* travel class  */}
                    <FormControl variant="filled" sx={{ width: '100%' }}>
                        <Typography sx={{ marginBottom: 1 }}>Travel class</Typography>
                        <Select
                            labelId="demo-travel-select-filled-label"
                            id="demo-travel-select-filled"
                            value={travelClass}
                            onChange={(e) => setTravelClass(e.target.value)}

                        >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="economy">Economy</MenuItem>
                            <MenuItem value="premium">Premium</MenuItem>
                            <MenuItem value="upperclass">Upper Class</MenuItem>
                        </Select>
                    </FormControl>


                    {/* passengers  */}
                    <Box sx={{ marginTop: 3 }}>
                        <Typography sx={{ marginBottom: 1 }}>Passengers</Typography>

                        {/* adult  */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>

                            <Box>
                                <Typography sx={{ fontSize: '16px' }}>Adult</Typography>
                                <Typography sx={{ fontSize: '14px' }}>Age 16 and over</Typography>
                            </Box>
                            {/* counter  */}
                            <Box sx={{ display: 'flex', background: '#f4f4fa', alignItems: 'center', padding: 2, borderRadius: 2 }}>
                                <RemoveIcon sx={{
                                    color: '#EB143A', cursor: 'pointer', marginRight: 2
                                }} onClick={handleAdultDescrease} />
                                <Typography >{adultCount}</Typography>
                                <AddIcon sx={{
                                    color: '#EB143A', cursor: 'pointer', marginLeft: 2
                                }} onClick={handleAdultIncrease} />
                            </Box>
                        </Box>


                        {/* child  */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>

                            <Box>
                                <Typography sx={{ fontSize: '16px' }}>Child</Typography>
                                <Typography sx={{ fontSize: '14px' }}>Age 2-11 </Typography>
                            </Box>
                            {/* counter  */}
                            <Box sx={{ display: 'flex', background: '#f4f4fa', alignItems: 'center', padding: 2, borderRadius: 2 }}>
                                <RemoveIcon sx={{
                                    color: '#EB143A', cursor: 'pointer', marginRight: 2
                                }} onClick={handleChildDescrease} />
                                <Typography >{childCount}</Typography>
                                <AddIcon sx={{
                                    color: '#EB143A', cursor: 'pointer', marginLeft: 2
                                }} onClick={handleChildIncrease} />
                            </Box>
                        </Box>


                    </Box>
                </Box>

            </Select>
        </FormControl>
    );
}

export default Passengers;