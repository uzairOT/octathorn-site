import { Grid, Box, Avatar, Typography, Button, Container } from '@mui/material'
import React from 'react'
import Arrow from "../../Assests/contactAssets/ContactArrow.svg"
import { Link, useNavigate } from 'react-router-dom'
import { animateScroll as scroll } from "react-scroll";
import { useSpring, animated } from 'react-spring';
import "./ContactRefer.scss"


function ContactRefer() {
  const navigate = useNavigate();


  const buttonSpring = useSpring({
    backgroundColor: "#319AC7", // Change to the desired color
    transform: 'scale(1)', // Initial scale
    config: { tension: 300, friction: 20 }, // Adjust the spring animation config
    onHover: { transform: 'scale(1.1)', backgroundColor: '#0E4366' }, // Scale and color change on hover
  });
  function handleClick() { // Add parentheses here
    navigate("/contact");
    scroll.scrollToTop({ duration: 2000 });
  }


  return (

    <Container maxWidth='xl'>
      <Box sx={
        {
          display: "flex",
          flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
          padding: { lg: '6rem', md: '6rem', sm: '6rem', xs: '4rem' },
          alignItems: { lg: "start", md: "start", sm: "center", xs: "center" },
          justifyContent: { lg: "start", md: "start", sm: "center", xs: "center" },
        }
      }>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { lg: "start", md: "start", sm: "center", xs: "center" },
            justifyContent: { lg: "start", md: "start", sm: "center", xs: "center" },
            textAlign: { lg: "start", md: "start", sm: "center", xs: "center" },
          }}>
          <Typography variant="h1" sx={{
            color: '#1B2231',

            fontFamily: 'Montserrat',
            fontSize: { lg: '2.5rem', md: "2rem", sm: "1.5rem", xs: "1.5rem" },
            fontStyle: 'normal',
            fontWeight: 600,
            textTransform: 'capitalize'
          }}>
            start a project with us?
          </Typography>
          <Typography variant="p" component="p" sx={{
            color: '#4c5a67',
            fontFamily: 'Inter',
            fontSize: { lg: '1rem', md: "0.9rem", sm: "0.8rem", xs: "0.75rem" },
            fontStyle: 'normal',
            fontWeight: 400,
            marginTop: "0.5rem",

            letterSpacing: '0.0125rem',
            maxWidth: "34rem"
          }}>
            At our core, we offer automated solutions that simplify your problems. Name your challenge, and our tech-based solutions are here for you.
          </Typography>

        </Box>


        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: { lg: "auto", md: "auto", sm: "none", xs: "none" }

          }} >
          <button className="learn-more" onClick={handleClick}>
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text"><span className="getin" >Get in</span><span> Touch</span></span>
          </button>
        </Box>
      </Box>
    </Container>
  )
}

export default ContactRefer

