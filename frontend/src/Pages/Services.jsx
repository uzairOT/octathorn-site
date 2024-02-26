
import { useMediaQuery, Box, Container } from "@mui/material";
import React, { useEffect, useState, } from "react";
import topBGTab from "../Assests/home/topBgTab.png";
import topBGMobile from "../Assests/home/topRightbgMobile.png";
import topRightBg from "../Assests/Services/Web/ServiceBg.png";
import TechnologyStack from "../Components/Home/TechnologyStack";
import CardCarousel from "../Components/UI/Cards/CardCarousel";
import EngagementModel from "../Components/EngagementModel/EngagementModel";
import Projects from "../Components/Projects/Projects";
import LastServiceComp from "../Components/ServicesComponents/LastServiceComp";
import ServiceCompWeb from "../Components/ServicesComponents/FirstServiceComps/ServiceCompWeb";
import ServiceCompWeb2 from "../Components/ServicesComponents/SecondServiceComps/ServiceCompWeb2";
import { useLocation } from "react-router-dom";
import ChooseUs from "../Components/ServicesComponents/ChooseUs";
import DevelopmentProcess from "../Components/ServicesComponents/DevelopmentProcess";
import ContactRefer from "../Components/ContactUs/ContactRefer";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ProductService,
  EmbeddedService,
  IotService,
  RDService,
  PcbService,
  TechnicalService,
  WebService,
  MobileService,
  ErpService,
} from "../Components/ServicesComponents/SecondServiceComps/ServiceData";



// const serviceDataArray = [
//   ProductService,
//   EmbeddedService,
//   IotService,
//   RDService,
//   PcbService,
//   TechnicalService,
//   WebService,
//   MobileService,
//   ErpService,
// ];

function Services() {
  const { heading } = useParams();
  const [data, setData] = useState(null);
  const getServiceState = () => {
    console.log("....?", heading)
    switch (heading) {
      case "productdevelopmentservices":
        console.log("....<>", ProductService)
        setData(ProductService);
        console.log("---->", data)
        break;
      case "embeddedsystems":
        setData(EmbeddedService);
        break;
      case "iotplatformdevelopment":
        setData(IotService);
        break;
      case "research&development":
        setData(RDService);
        break;
      case "pcbdevelopment":
        setData(PcbService);
        break;
      case "technicalconsultation":
        setData(TechnicalService);
        break;
      case "webdevelopmentservices":
        setData(WebService);
        break;
      case "mobiledevelopmentservices":
        setData(MobileService);
        break;
      case "enterpriseresourceplanning":
        setData(ErpService);
        break;
      default:
        setData(null);
        break;
    }


  };

  useEffect(() => {

    getServiceState(heading);

  }, []);

  const location = useLocation();

  const { state } = location.state || { state: data } || { state: null };

  if (state) {
    const firstServiceHeading = state[0]?.ServiceHeading[0];

    const firstService = state[0];
    // console.log(firstService);
    const serviceHeading = firstService?.ServiceHeading;
    // console.log({ serviceHeading });
  }


  const isMobileView = useMediaQuery("(max-width: 600px)");
  const isTabletView = useMediaQuery("(max-width: 900px)");
  return (

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
          padding: { xs: "0rem", sm: "0rem", lg: "1rem 2.5rem" },
          zIndex: 1,
        }}
      >
        <div>
          <ServiceCompWeb state={state || location.state} />
        </div>
        <div id="overview">
          <ServiceCompWeb2 state={state || location.state} />
        </div>
        <div id="technologies">
          <TechnologyStack />
        </div>
        {/* <div id="featureprojects" style={{ marginTop: "3%" }}>

          <Projects />
        </div> */}
        <div id="engagement-model">
          <EngagementModel />
        </div>
        <div id="why-choose-us" style={{ marginTop: "3%" }}>
          <ChooseUs />
        </div>
        <div id="development-process" style={{ marginTop: "3%" }}>
          <DevelopmentProcess />
        </div>
        <div id="testimonials">
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
  );
}

export default Services;
