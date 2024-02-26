import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import {
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  Fade

} from "@mui/material";
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import { Box, height, padding } from "@mui/system";
import IndustryLaptopImg from "../../Assests/Industries/IndustDesktop.png";
import ServiceTabImg from "../../Assests/Industries/IndustTabMob.png";
import ServiceMobileImg from "../../Assests/Industries/IndustTabMob.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// import HowWeWorkSvg from "../../../Assests/HowWeWorkSvg";
// import HowWeWorkSvg1 from "../../../Assests/HowWeWorkSvg1";
// import HowWeWorkSvg2 from "../../../Assests/HowWeWorkSvg2";

function IndustriesComp() {


  let { heading } = useParams();

  if (heading === "healthcare") {
    heading = "Health care"
  }
  else if (heading === "publicsector") {
    heading = "Public Sector"
  }
  const capitalizeFirstLetter = (str) => {
    const words = str.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
  };
  const capitalizedTitle = capitalizeFirstLetter(heading);
  const headingWithoutSpaces = capitalizedTitle.replace(
    /\s/g,
    ""
  ).toLowerCase();
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
  const isLG = useMediaQuery("(min-width: 1280px)");
  const isMD = useMediaQuery("(min-width: 900px) and (max-width: 1279px)");
  const isSM = useMediaQuery("(min-width: 600px) and (max-width: 900px)");
  const isXS = useMediaQuery("(max-width: 599px)");

  let IndustryImage;

  if (isLG) {
    IndustryImage = IndustryLaptopImg;
  } else if (isSM || isMD) {
    IndustryImage = ServiceTabImg;
  } else if (isXS) {
    IndustryImage = ServiceMobileImg;
  }


  //items handeling
  const [selectedItem, setSelectedItem] = useState(null);

  const links = [
    { to: 'feature-projects', offset: -350, text: 'Feature Projects' },
    { to: 'how-we-work', offset: -400, text: 'How We Work ?' },
    { to: 'engagement-model', offset: -200, text: 'Engagement Model' },
    { to: 'why-choose-us', offset: -200, text: 'Why Clients Choose Us ?' },
    { to: 'testimonials', offset: -150, text: 'Testimonials' },
    { to: 'our-clients', offset: -150, text: 'Our Clients' },
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
        position: "relative",
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
          marginTop: { lg: "1rem", md: "1rem", sm: "1rem", xs: "-1rem" },
          justifyContent: {
            lg: "center",
            md: "center",
            sm: "start",
            xs: "center",
          },

          // border: "2px solid black",
        }}
      >

        <Helmet>
          <title>{`Octathorn - ${capitalizedTitle}`}</title>
          <link rel="canonical" href={`https://octathorn.com/industries/${headingWithoutSpaces}`} />
          <meta name="description" content={` ${heading}  At Octathorn, we drive forward with relentless innovation, embracing technology to redefine possibilities. We specialize in crafting seamless user experiences through our mastery in Front-End and Back-End development, ensuring reliability and innovation in every project. Our commitment to technological excellence fuels our drive to innovate across Embedded Systems, IoT, PCB, Front-End, Back-End, Mobile, and Database technologies. `} />
          <meta name="keywords"
            content="Unlock the future trusted next-generation hardware software solutions quality focus customer-centric insights-driven 20+ happy clients hardware embedded systems software scalability product development IoT platform development research and development PCB design technical consultation web applications mobile applications ERP development industry expertise transformative growth innovative vision tailored solutions user-centric approach efficient integration domain expertise cost-effective solutions diverse service offerings embedded systems IoT software development real-time AI computer vision UI/UX product development technology and platform stack Raspberry Pi LoRa ESP32 FPGA Arduino Azure IoT Hub AWS IoT Agile Methodology adaptability technological excellence client-centric approach continuous support and updates high client retention efficient integration transparent communication" />
        </Helmet>

        <Typography
          component="h1"
          sx={{
            borderRadius: "1.8125rem 0.375rem",
            textTransform: "uppercase",
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
          {heading}
        </Typography>

        {/* Button */}

        <Typography
          variant="subtitle2"
          component="p"
          color="#4c5a67"
          sx={{
            width: { lg: "73%", md: "85%" },
            marginTop: "2rem",
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
          At Octathorn, we drive forward with relentless innovation, embracing technology to redefine possibilities.
          We specialize in crafting seamless user experiences through our mastery in Front-End and Back-End development, ensuring reliability and innovation in every project.

          Our commitment to technological excellence fuels our drive to innovate across Embedded Systems, IoT, PCB, Front-End, Back-End, Mobile, and Database technologies.
        </Typography>
        <Link to="/contact" style={{ textDecoration: "none", color: "#fff" }}>
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
        </Link>
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
            <img src={IndustryImage} alt={capitalizedTitle} />
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

export default IndustriesComp;
