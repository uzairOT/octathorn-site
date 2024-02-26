import { Typography, useMediaQuery, Box, Container } from "@mui/material";
import topBGTab from "../Assests/home/topBgTab.png";
import topBGMobile from "../Assests/home/topRightbgMobile.png";
import topRightBg from "../Assests/Services/Web/ServiceBg.png";

import EngagementModel from "../Components/EngagementModel/EngagementModel";
import ChooseUs from "../Components/ServicesComponents/ChooseUs";

import CardCarousel from "../Components/UI/Cards/CardCarousel";
import LastServiceComp from "../Components/ServicesComponents/LastServiceComp";


import { useLocation } from "react-router-dom";
import ContactProject from "../Components/ContactUs/ContactProject";
import PortfolioProjects from "../Components/Industries/IndutryProjects";
import IndustriesComp from "../Components/Industries/IndustriesComp";
import HowWeWork from "../Components/HowWeWork/HowWeWork";
import { Helmet } from "react-helmet-async";
import ContactRefer from "../Components/ContactUs/ContactRefer";

function Industries() {


  const location = useLocation();
  const { state } = location.state || { state: null };

  const isMobileView = useMediaQuery("(max-width: 600px)");
  const isTabletView = useMediaQuery("(max-width: 900px)");
  return (
    <>
      <Box

        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        position="relative"
        sx={{ backgroundColor: "#F6F6F6", contain: { xs: "content", sm: 'none' } }}
      >

        {isMobileView ? (
          <img
            src={topBGMobile}
            alt="Octathorn technologies Hardware & Software"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
              top: 0,
              zIndex: 0,
            }}
          />
        ) : isTabletView ? (
          <img
            src={topBGTab}
            alt="Octathorn technologies Hardware & Software"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              top: 0,
              zIndex: 0,
            }}
          />
        ) : (
          <img
            src={topRightBg}
            alt="Octathorn technologies Hardware & Software"
            width={'18%'}
            style={{
              display: "flex",
              overflow: "hidden",
              justifyContent: "flex-end",
              position: "absolute",
              right: 0,
              top: 0,
              zIndex: 0,
            }}
          />
        )}
        <Container
          maxWidth="false"
          sx={{
            padding: { xs: "0rem", sm: "0rem", lg: "1.125rem 2.5rem" },
            mt: 5,
            zIndex: 1,
          }}
        >

          <IndustriesComp />
          <div id="feature-projects" >
            <PortfolioProjects />
          </div>
          <div id="how-we-work" >
            <HowWeWork />
          </div>
          <div id='engagement-model'>
            <EngagementModel />
          </div>
          <div id="why-choose-us" >
            <ChooseUs />
          </div>
          <div id="testimonials" >
            <CardCarousel />
          </div>
          <div id="our-clients" style={{ marginTop: "0%" }}>
            <LastServiceComp />
          </div>

          <div style={{ marginTop: '8%', backgroundColor: "#FFF", marginLeft: "-2rem", marginRight: "-2rem", marginBottom: "-1rem" }}>
            <ContactRefer />
          </div>

        </Container>
      </Box>
    </>
  );
}

export default Industries;
