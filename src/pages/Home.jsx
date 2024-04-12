//import AppBar2 from './components/AppBar2';
import TourCard from '../components/TourCard';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";

//import {SearchAppComponent}  from 'searchappbar'
import Typography from "@mui/material/Typography";

import cities from "../data.json";


const Home = () => (
    <div>
     
      
      <Container sx={{marginY: 5}}>
        {
            cities.map(
              (city) => (
               <> 
                   <Typography key={city.id} variant="h4" component="h2" marginTop={5} marginBottom={3}>
                     Top  {city.name}  tours
                   </Typography>
                   <Grid container spacing={5}>
                      {
                      city.tours.map((tour, index) => (<TourCard tour={tour} key={index}></TourCard>)
                                             )
                      
                      }
                    </Grid>
                </> 
              )
               )
                
       }
         
        </Container>
     
      </div>
)


export default Home;