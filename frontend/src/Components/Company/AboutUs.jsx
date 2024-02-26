
import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import { ReactComponent as MissionIcon } from "../../Assests/Company/missionIcon.svg";
import { ReactComponent as VisionIcon } from "../../Assests/Company/visionIcon.svg";

function AboutUs() {
    const themeStyle = {
        heading: {
            color: "#1B2231",
            textAlign: "center",
            fontFamily: "Montserrat",
            fontSize: { lg: "2.5rem", md: "2.3rem", sm: "2rem", xs: "1.25rem" },
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "131.043%",
            textTransform: "capitalize"
        },
        paragraph: {
            color: "#4C5A67",
            fontFamily: "Inter",
            fontSize: { lg: '1rem', md: '1rem', sm: '1rem', xs: '0.875rem' },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "150%",


        }
    }
    return (
        <Container maxWidth="xl" >
            <Grid container spacing={5} p={2}   >
                <Grid item xs={12} sm={6} pr={2} pl={2} >

                    <Box sx={{ alignItems: 'start', paddingLeft: { lg: "2rem", md: '4rem', sm: '1rem', xs: '1em' }, paddingRight: { lg: "2rem", md: '4rem', sm: '1.5rem', xs: '1rem' } }}>

                        <Typography variant="h2" sx={{ ...themeStyle.heading, textAlign: { lg: 'start', md: 'start', sm: 'start', xs: 'centre' } }}>About Us</Typography>
                        <Typography variant="body1" sx={{ ...themeStyle.paragraph, textAlign: { lg: 'start', md: 'start', sm: 'start', xs: 'centre' } }}>At Octathorn, innovation is at the core of everything we do. Our dedicated team of experts combines technical prowess with creative thinking to develop solutions tailored to meet the evolving needs of our clients. We understand that every project is unique, and we approach each challenge with a fresh perspective, ensuring that our services align perfectly with our clients' goals. Our core competencies lie in the design and development of custom embedded systems and software, as well as the integration of these systems into our clients' products and processes. We have a strong track record of delivering high-quality, reliable solutions that meet the specific needs of our clients.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} pr={2} pl={2}>

                    <Box sx={{ alignItems: 'start', }}>
                        <Box sx={{ display: 'flex', gap: '2rem', paddingLeft: "1rem" }}>
                            <MissionIcon />
                            <Typography variant="h2" sx={{ ...themeStyle.heading, textAlign: 'start' }}>Mission</Typography>
                        </Box>

                        <Typography variant="body1" sx={{ ...themeStyle.paragraph, textAlign: 'start', paddingLeft: "6rem", paddingRight: { lg: "4rem", md: '4rem', sm: '1.5rem', xs: '4rem' } }}>To produce innovative products and services with exceptional technological know-how and robust procedures that operate flawlessly in order to become a true end-to-end technology solutions company and to contribute real value to our clients' businesses</Typography>
                    </Box>

                    <Box sx={{ alignItems: 'start', mt: 3 }}>
                        <Box sx={{ display: 'flex', gap: '2rem', paddingLeft: "1rem" }}>
                            <VisionIcon />
                            <Typography variant="h2" sx={{ ...themeStyle.heading, textAlign: 'start' }}>Vision</Typography>

                        </Box>
                        <Typography variant="body1" sx={{ ...themeStyle.paragraph, textAlign: 'start', mt: 2, paddingLeft: "6rem", paddingRight: { lg: "4rem", md: '4rem', sm: '1.5rem', xs: '4rem' }, }}>To become the leading provider of high-tech solutions for the future of  mobility and increase the automation of machines by creating high performance products and services based on the best technology.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
export default AboutUs;