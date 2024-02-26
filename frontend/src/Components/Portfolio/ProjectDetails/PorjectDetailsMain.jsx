import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  Container,
  Fade,
  Box,
} from "@mui/material";
import "./StickyNavbar.css";


import { ReactComponent as IEPHome } from "../../../Assests/Portfolio/main.svg";

import ServiceLaptopImg from "../../../Assests/Portfolio/projectDetails/mainDesktop.png";
import ServiceTabImg from "../../../Assests/Portfolio/projectDetails/mainTab.png";
import ServiceMobileImg from "../../../Assests/Portfolio/projectDetails/mainMobile.png";



function PorjectDetailsMain({ project }) {
  const isLG = useMediaQuery("(min-width: 1280px)");
  const isMD = useMediaQuery("(min-width: 900px) and (max-width: 1279px)");
  const isSM = useMediaQuery("(min-width: 600px) and (max-width: 900px)");
  const isXS = useMediaQuery("(max-width: 599px)");

  //............
  const isMobileView = useMediaQuery("(max-width: 600px)");
  const isTabletView = useMediaQuery("(max-width: 900px)");
  const isVvSmallLaptop = useMediaQuery("(max-width: 999px)");
  const isVerySmallLaptop = useMediaQuery("(max-width: 1450px)");
  const isSmallLaptop = useMediaQuery("(max-width: 1650px)");
  const widthValue = isVvSmallLaptop
    ? "90%"
    : isVerySmallLaptop
      ? "70%"
      : isSmallLaptop
        ? "70%"
        : "100%";

  const marginLeftValue = isVvSmallLaptop
    ? "0rem"
    : isVerySmallLaptop
      ? "0rem"
      : isSmallLaptop
        ? "0rem"
        : "10rem";


  let ServiceImage;

  if (isLG || isMD) {
    ServiceImage = ServiceLaptopImg;
  } else if (isSM) {
    ServiceImage = ServiceTabImg;
  } else if (isXS) {
    ServiceImage = ServiceMobileImg;
  }

  //items handeling
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      const sticky = navbar.offsetTop;

      if (window.pageYOffset >= sticky) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

    window.addEventListener('scroll', handleScroll);

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [selectedItem, setSelectedItem] = useState(null);

  const links = [
    { to: 'overview', offset: -350, text: 'Overview' },
    { to: 'feature-list', offset: -400, text: 'Feature List' },
    { to: 'engagement-model', offset: -200, text: 'Engagement Model' },
    { to: 'faqs', offset: -200, text: 'FAQ’s' },
    { to: 'contact-us', offset: -150, text: 'Contact us' },
  ];
  return (
    <Grid
      container
      sx={{
        padding: {
          lg: "2rem 0rem",
          md: "2rem 0rem",
          sm: "2rem 1rem",
          xs: "2rem 1rem",
        },
        marginTop: "5rem",
      }}
    >
      {/* <Box border={"2px solid blue"}> */}

      {/* </Box> */}
      <Grid
        item
        container
        lg={6}
        md={6}
        sm={6}
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { lg: "1.1rem", sm: "1rem", xs: "1rem" },
          alignItems: { lg: "start", md: "start", sm: "start", xs: "center" },
          paddingLeft: { lg: "3rem", md: "2rem", sm: "1rem", xs: "0rem" },
          marginTop: "1rem",
          justifyContent: {
            lg: "center",
            md: "center",
            sm: "start",
            xs: "center",
          },

          // border: "2px solid black",
        }}
      >
        <Typography
          component="h1"
          sx={[
            {
              color: "#1B2231",
              fontSize: { lg: "2.5rem", md: "2.3rem", sm: "2rem", xs: "1.25" },
              fontWeight: "600",
              fontFamily: "Montserrat",
              textAlign: { lg: "left", md: "left", sm: "left", xs: "center" },
              textTransform: "uppercase",
              animation: "slideInFromLeft 0.8s ease-in-out",
              "@keyframes slideInFromLeft": {
                from: {
                  transform: "translateX(-100%)",
                  opacity: 0,
                },
                to: {
                  transform: "translateX(0)",
                  opacity: 1,
                },
              },


            },
          ]}
        >
          {project?.title}
        </Typography>

        {/* <Typography
          sx={{
            borderRadius: "1.8125rem 0.375rem",
            backgroundColor: "#0E4366",
            color: "#fff",
            width: "auto",
            height: "auto",
            padding: "0.18rem 1.2rem",
            fontFamily: "Montserrat",
            fontSize: { lg: "2.5rem", md: "2.3rem", sm: "2rem", xs: "1.25" },
            fontStyle: "normal",
            fontWeight: 600,
            marginLeft: "-1rem",
            marginTop: { lg: "-1.5rem", md: "-1.5rem", sm: "-1.5rem", xs: "-1rem" },
          }}
        > Portfolio
        </Typography> */}

        {/* Button */}

        <Typography
          color="#4c5a67"
          sx={{
            width: { lg: "73%", md: "85%" },
            fontSize: { lg: "16px", sm: "14px", xs: "12px" },
            fontWeight: 400,
            fontFamily: "Inter",
            textAlign: { lg: "left", sm: "left", xs: "center" },
            //   display: { xs: "none", sm: "block" },
            paddingBottom: { lg: "3rem", md: "3rem", sm: "2rem", xs: "1rem" },
            animation: "slideInFromLeft 0.8s ease-in-out",
            "@keyframes slideInFromLeft": {
              from: {
                transform: "translateX(-100%)",
                opacity: 0,
              },
              to: {
                transform: "translateX(0)",
                opacity: 1,
              },
            },

          }}
        >
          {project?.description}
        </Typography>
        <Fade in={true} timeout={3000}>
          <Button
            variant="outlined"
            sx={{
              // width: "auto",
              // height: "auto",
              width: { lg: "170px", md: "170px", sm: "130px", xs: "130px" },
              height: { lg: "49px", md: "49px", sm: "38px", xs: "38px" },
              fontSize: { lg: "15px", md: "15px", sm: "12px", xs: "12px" },
              fontWeight: 500,
              fontFamily: "Montserrat",
              backgroundColor: "#0E4366",
              "&:hover": {
                backgroundColor: "#0E4366",
              },
              borderColor: "#F6F6F6",
              border: "1px",
              borderRadius: "4px",
              color: "#ffffff",
              textTransform: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "#00000026",
            }}
          >
            Consult
          </Button>
        </Fade>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={6}
        sx={{
          // gap: "15px",
          display: {
            lg: "flex",
            md: "flex",
            sm: "flex",
            xs: "flex",
          },
          flexDirection: "column",
          alignItems: {
            lg: "center",
            md: "center",
            sm: "center",
            xs: "center",
          },
          justifyContent: {
            lg: "center",
            md: "center",
            sm: "center",
            xs: "center",
          },
          marginTop: { lg: "-1rem", md: "-1rem", sm: "-1rem", xs: "3rem" },
          // border: "2px solid red",
        }}
      >

        <Fade in={true} timeout={3000}>
          <Box>
            {/* <ServiceSvg /> */}
            <img src={ServiceImage} width={widthValue} alt={project?.title} />
          </Box>
        </Fade>

      </Grid>
      {/* Last Section */}
      <Grid
        item
        xs={12}
        lg={12}
        md={12}
        sm={12}
        sx={{
          marginTop: { lg: "5rem", md: "3rem", sm: "2.5rem", xs: "1rem" },
          padding: "1.5rem 0rem",
          marginLeft: "-2.5rem", // Cancel out the left padding of the main page container
          marginRight: "-2.5rem", // Cancel out the right padding of the main page container
          // width: "100%",  
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",

        }}

        borderTop={"1px solid #CACACA"}
        borderBottom={"1px solid #CACACA"}
        display={{ lg: "unset", md: "unset", sm: "none", xs: "none" }}
        id="navbar"
        className={isSticky ? 'sticky' : ''}
      >

        <ul style={{
          display: "flex",
          flexDirection: "row",
          color: "#757575",
          textAlign: "center",
          fontFamily: "Montserrat",
          fontSize: { lg: "1rem", md: "1rem", sm: "0.7rem", xs: "0.6rem" },
          fontStyle: "normal",
          fontWeight: 500,
          gap: "3rem",
          listStyle: "none",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}>
          {links.map((link, index) => (
            <li key={index}>
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                offset={link.offset}
                spy={true} // Add this
                onSetActive={() => setSelectedItem(link.to)} // And this
                style={{
                  textDecoration: "none",
                  color: selectedItem === link.to ? '#1B2231' : "#757575",
                  cursor: "pointer",
                  borderBottom: selectedItem === link.to ? '3px solid #1B2231' : 'none',
                }}
                onClick={() => setSelectedItem(link.to)}
              >
                {link.text}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
}

export default PorjectDetailsMain;
