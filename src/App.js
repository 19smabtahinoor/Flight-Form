import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './App.css';
import Deparature from './components/Deparature';
import EventCode from './components/EventCode';
import FromInput from './components/FromInput';
import Passengers from './components/Passengers';
import RadioSelect from './components/RadioSelect';
import Return from './components/Return';
import ToInput from './components/ToInput';

function App() {
  return (
    <div className='bgPrimary'>
      {/* <CssBaseline /> */}
      <Container maxWidth="lg" sx={{ paddingTop: '40px' }}>
        <Box sx={{ bgcolor: '#fff', padding: '20px', borderRadius: '10px' }}>
          <Typography sx={{ color: '#EB143A', fontSize: '25px' }}>
            <Box sx={{ fontWeight: 'light', m: 1 }}>Flight deals with Virgin Atlantic
            </Box>
          </Typography>

          <RadioSelect />

          {/* 1st row   */}
          <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginBottom: 3 }}>
            <Grid item xs={4} sm={8} md={4} lg={4}>
              <FromInput />
            </Grid>
            <Grid item xs={4} sm={8} md={4} lg={4}>
              <ToInput />
            </Grid>

            {/* depature and return  */}
            <Grid item xs={4} sm={8} md={4} lg={4}>

              <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} >
                <Grid item xs={4} sm={8} md={6} lg={6}>
                  <Deparature />
                </Grid>
                <Grid item xs={4} sm={8} md={6} lg={6}>
                  <Return />
                </Grid>
              </Grid>

            </Grid>
          </Grid>


          {/* 2nd row  */}
          <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ marginTop: 5 }}>
            <Grid item xs={4} sm={8} md={4} lg={4}>
              <Passengers />
            </Grid>
            <Grid item xs={4} sm={8} md={4} lg={4}>
              <EventCode />
            </Grid>

            <Grid item xs={4} sm={8} md={4} lg={4} sx={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="contained" sx={{ background: '#EB143A', color: '#fff', width: '100%', height: "62%", marginTop: '24px' }} >Book Now</Button>
            </Grid>
          </Grid>


        </Box>
      </Container>
    </div>
  );
}

export default App;
