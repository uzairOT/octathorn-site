

import React, { useState,useRef } from 'react';
import { Box, Grid, Typography, useMediaQuery, Container } from "@mui/material";
import {
  EmbeddedService,
  ErpService,
  IotService,
  MobileService,
  PcbService,
  ProductService,
  RDService,
  TechnicalService,
  WebService,
} from "../../Components/ServicesComponents/SecondServiceComps/ServiceData";
import ResponsiveCard from "../UI/Cards/ResponsiveCard";
import Product from "../../Assests/home/services/Product.svg";
import Embedded from "../../Assests/home/services/Embedded.svg";
import IOT from "../../Assests/home/services/IOT.svg";
import Research from "../../Assests/home/services/Research.svg";
import PCB from "../../Assests/home/services/PCB.svg";
import Technical from "../../Assests/home/services/Technical.svg";
import Web from "../../Assests/home/services/Web.svg";
import Mobile from "../../Assests/home/services/Mobile.svg";
import ERP from "../../Assests/home/services/ERP.svg";

// const servicesData = [
//   { image: Product, title: "Product Development" ,description:"Innovative hardware and software product development pioneers at Octathorn, shaping the future with technology and creativity."},
//   { image: Embedded, title: "Embedded System",description:"Efficient and precise innovation in interconnected tech landscapes. Advanced embedded system services for improved performance and integration." },
//   { image: IOT, title: "IoT Platform Development",description:"Crafting Connected Futures: Expert IoT Platform Development for Seamless Innovation and Connectivity." },
//   { image: Research, title: "Research & Development",description:"Exploring new frontiers with our Research & Development service, pioneering advancements for tomorrow's technology." },
//   { image: PCB, title: "PCB Design",description:"Our PCB (Printed Circuit Board) service delivers precision-engineered solutions, driving innovation and reliability in electronic designs." },
//   { image: Technical, title: "Technical Consultation",description:"Expert guidance for your technical needs. Our consultation service offers tailored solutions to optimize and elevate your project's success." },
//   { image: Web, title: "Web Application",description:"Crafting Dynamic Web Applications: Tailored solutions that seamlessly blend innovation and functionality for your business's digital success." },
//   { image: Mobile, title: "Mobile Application" ,description:"Revolutionize On-the-Go Experiences: Expert Mobile App Development Solutions Tailored for Your Needs."},
//   { image: ERP, title: "ERP Development",description:"Streamline Operations with Comprehensive ERP Solutions. Optimize efficiency, integrate processes, and drive growth." },
// ];

const servicesData = [
  { 
    image: Product, 
    title: "Product Development",
    description:"Pioneering innovative hardware and software products at Octathorn.",
    state: ProductService

  },
  { 
    image: Embedded, 
    title: "Embedded System",
    description:"Enhancing performance and integration with advanced embedded system services.",
    state: EmbeddedService

  },
  { 
    image: IOT, 
    title: "IoT Platform Development",
    description:"Crafting seamless innovation and connectivity with expert IoT platform development.",
    state: IotService
  },
  { 
    image: Research, 
    title: "Research & Development",
    description:"Pioneering advancements for future technology with our R&D service.",
    state: RDService
  },
  { 
    image: PCB, 
    title: "PCB Design",
    description:"Driving innovation and reliability with precision-engineered PCB solutions.",
    state: PcbService
  },
  { 
    image: Technical, 
    title: "Technical Consultation",
    description:"Offering expert guidance and tailored solutions for your technical needs.",
    state: TechnicalService
  },
  { 
    image: Web, 
    title: "Web Application",
    description:"Crafting dynamic web applications that blend innovation and functionality.",
    state: WebService
  },
  { 
    image: Mobile, 
    title: "Mobile Application",
    description:"Developing expert mobile app solutions tailored for your needs.",
    state: MobileService
  },
  { 
    image: ERP, 
    title: "ERP Development",
    description:"Streamlining operations and driving growth with comprehensive ERP solutions.",
    state: ErpService
  },
];

function OurServices() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const hoverTimeout = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isMobileView = useMediaQuery("(max-width: 600px)");
  const isTabletView = useMediaQuery("(max-width: 900px)");
  const isSmallLaptop = useMediaQuery("(max-width: 1200px)");
  const widthValues = isMobileView
    ? "85px"
    : isTabletView
    ? "115px"
    : isSmallLaptop
    ? "125px"
    : "140px";

  return (
    <Box sx={{
marginBottom: {lg:"-4.5rem",md:"-4rem",sm:"-4rem",xs:"-2rem"}
    }} >
      <Container
        maxWidth="lg"
        sx={{
          padding: {
            xs: "0.9rem 1.5rem",
            sm: "4.125rem 1.5rem",
            lg: "4.125rem 4.5rem",
          },
          width: "auto",
        }}
      >
        <Typography
        variant="h1"
          fontFamily={"Montserrat"}
          fontSize={{ xs: "1.25rem", sm: "2rem", md: "2.5rem", lg: "2.5rem" }}
          paddingTop={5}
          color={"#1B2231"}
          fontWeight={600}
          mb={3}
        >
          Service We Offer
        </Typography>
        <Typography
        variant="p" component="p"
          color={"#4c5a67"}
          fontFamily={"Inter"}
          fontSize={{ xs: "0.75rem", sm: "0.875rem", md: "1rem", lg: "1rem" }}
           mt={{ xs: -2, sm: -2 }}
          // paddingTop={5}
          width={{ md: 656, lg: 700, xs: 303, sm: "80%" }}
          marginLeft={"auto"}
          marginRight={"auto"}
          fontWeight={400}
        >
          We specialize in creating scalable products and services that ensure
          heightened efficiency, enhanced performance, and a profound impact on
          customers.
        </Typography>

        <Box justifyContent="center" alignItems="center" padding={3} sx={{ marginTop: "2%", textTransform: "uppercase", }}>
          <Grid container color={"#0E4366"} spacing={2} alignItems="center" >
            {servicesData.map((service, index) => (
              <Grid
                key={index}
                item
                xs={6}
                sm={4}
                md={4}
                lg={4}
                sx={{
                  ...(index === servicesData.length - 1 ? { marginLeft: "auto", marginRight: "auto" } : {}),
                  '&:hover': { cursor: 'pointer', boxShadow: 'none',   transform: isHovered ? 'scale(1.05)' : 'none', },  
                  height: {lg: '290px',md:"290px",sm:"220px",xs:"190px"}, // Set a fixed height here
                  position: 'relative', // Add relative positioning here
                  transition: isHovered ? 'transform 0.8s ease-in-out':'none',
                }}
                onMouseEnter={() => {
                
                  hoverTimeout.current = setTimeout(() => {
                    setHoveredItem(index);
                    setIsHovered(true);
                  });
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                  clearTimeout(hoverTimeout.current);
                  setHoveredItem(null);
                }}
              >
                
                {hoveredItem === index ? (
                  <ResponsiveCard logo={service.image} title={service.title} description={service.description} serviceState={service.state} />
                ) : (
                  <>
                  <img src={service.image} alt={service.title} width={widthValues} />
                  <Typography
                  variant="h1"
                  fontSize={{ xs: "0.75rem", sm: "0.875rem", md: "1rem", lg: "1rem" }}
                  align="center"
                  mt={2}
                  fontWeight={600}
                >
                  {service.title}
                </Typography>
                </>
                )}
               
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default OurServices;