import { useMediaQuery, Box, Container } from "@mui/material";

import TechnologiesComp from "../Components/Technologies/TechnologiesComp";
import TechnologyMain from "../Components/Technologies/TechnologyMain";
import EngagementModel from "../Components/EngagementModel/EngagementModel";
import ChooseUs from "../Components/ServicesComponents/ChooseUs";
import DevelopmentProcess from "../Components/ServicesComponents/DevelopmentProcess";
import CardCarousel from "../Components/UI/Cards/CardCarousel";
import LastServiceComp from "../Components/ServicesComponents/LastServiceComp";

import TechnologyStack from "../Components/Home/TechnologyStack";
import Projects from "../Components/Projects/Projects";
import { useLocation, useParams } from "react-router-dom";
import ContactProject from "../Components/ContactUs/ContactProject";
import TechnologiesProjects from "../Components/Technologies/TechnologiesProjects";
import { useLayoutEffect, useState } from 'react';
import topBGTab from "../Assests/home/topBgTab.png";
import topBGMobile from "../Assests/home/topRightbgMobile.png";
import topRightBg from "../Assests/Services/Web/ServiceBg.png";
import NewTechStack from "../Components/Technologies/NewTechStack";
import ContactRefer from "../Components/ContactUs/ContactRefer";
import {
  DatabaseTech,
  FrontEndTech,
  BackEndTech,
  MobTech,
  EmbeddedTech,
  PcbTech,
  IotTech,
} from "../Components/Technologies/TechnologyData";
import { useEffect } from "react";

function Technologies() {
  const { heading } = useParams();

  const [techState, setTechState] = useState(null);
  const [techuseState, setTechuseState] = useState(null);


  const getTechnologyState = () => {

    switch (heading) {
      case "embeddedsystem":
        setTechState(EmbeddedTech);
        setTechuseState("Raspberry Pi");
        break;

      case "internetofthings":
        setTechState(IotTech);
        setTechuseState("Azure IoT Hub");
        break;

      case "pcb":
        setTechState(PcbTech);
        setTechuseState("Altium");
        break;

      case "frontend":
        setTechState(FrontEndTech);
        setTechuseState("Angular");
        break;

      case "backend":
        setTechState(BackEndTech);
        setTechuseState("Node JS");
        break;

      case "mobileappdevelopment":
        setTechState(MobTech);
        setTechuseState("Flutter");
        break;

      case "database":
        setTechState(DatabaseTech);
        setTechuseState("FireBase");
        break;

      default:
        setTechState(null);
        setTechuseState(null);
        break;
    }


  };

  useEffect(() => {

    getTechnologyState(heading);

  }, []);

  const location = useLocation();

  const stateObject = {
    techState: techState,
    techuseState: techuseState,
  };

  const { state } = location.state || { state: stateObject } || { state: null };

  //console.log(techState, "heading of object...>")
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
          <TechnologyMain />
          <div style={{ marginTop: "5%" }}>
            {/* <TechnologiesComp state={location?.state} /> */}
            <TechnologiesComp state={state || location.state} />
          </div>

          <TechnologiesProjects />

          <NewTechStack />

          <div id="portfolio">
            {/* <FeaturedProjects /> */}
            {/* <Projects /> */}
          </div>
          <EngagementModel />
          <ChooseUs />
          <DevelopmentProcess />
          <CardCarousel />
          <div id="company" style={{ marginTop: "3%" }}>
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

export default Technologies;
