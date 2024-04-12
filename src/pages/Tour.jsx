import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";

import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion";
import BasicModal from "../components/Modal";

const Tour = () => <Container sx={{width: 900}}>
    <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
    </Typography>
    <Box marginTop={3} sx={{display: "flex"}}>
      <img src="https://media.timeout.com/images/105124791/750/422/image.jpg" height={325}></img>
      <ImageCollage></ImageCollage>
    </Box>
     <Box>
     <Typography variant="h6" component="h4" marginTop={3}>
        About this ticket
    </Typography>
    <Typography variant="paragraph" component="p" marginTop={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        At quasi, quo aut nobis quae recusandae molestias reiciendis eaque rem quaerat tenetur aperiam ea ex, ut distinctio vero dolorum ab?
         Sed.
    </Typography>
     </Box>
     <Box marginBottom={10}>
     <Typography variant="h6" component="h4" marginTop={3}>
        Frequently asked questions.
    </Typography>
    <CustomizedAccordions></CustomizedAccordions>
     </Box>
     <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>  
            <BasicModal></BasicModal>       
        </BottomNavigation>
      </Paper>
    </Container>

export default Tour;