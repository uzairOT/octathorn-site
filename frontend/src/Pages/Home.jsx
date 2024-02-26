import Nav from "../Components/Header/Nav";
import AfterHomePage from "../Components/Home/AfterHome";
import HomeMain from "../Components/Home/HomeMain";
import { Typography, useMediaQuery, Box, Container } from "@mui/material";
import OurServices from "../Components/Home/OurServices";
import TechnologyStack from "../Components/Home/TechnologyStack";
import CardCarousel from "../Components/UI/Cards/CardCarousel";
import EngagementModel from "../Components/EngagementModel/EngagementModel";
import WhyClientChoseUs from "../Components/WhyClientsChooseUs/WhyClientsChooseUs";
import IndustryExperties from "../Components/Home/IndustryExperties";
import FeaturedProjects from "../Components/Home/FeaturedProjects";
import HowWeWork from "../Components/HowWeWork/HowWeWork";
import Projects from "../Components/Projects/Projects";
import { Helmet } from "react-helmet-async";
import PortfolioProjects from "../Components/Industries/IndutryProjects";

function Home() {
  const isMobileView = useMediaQuery("(max-width: 480px)");
  const isTabletView = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      sx={{
        backgroundColor: "#F6F6F6",
        contain: { xs: "content", sm: "content", md: "content", lg: "none" },
      }}
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Container
        maxWidth="false"
        sx={{ padding: { xs: "0rem", sm: "0rem", lg: "4.125rem 2.5rem" } }}
      >
        <Helmet>
          <title>
            Octathorn-Unlock The Future With Trusted Next-Generation Hardware
            And Software Solution
          </title>
          <link rel="canonical" href="https://octathorn.com" />
          <meta
            name="description"
            content="UNLOCK THE FUTURE WITH TRUSTED NEXT-GENERATION HARDWARE
AND SOFTWARE SOLUTION Embrace the future confidently with our trusted and forward-looking next-generation hardware and software solutions."
          />
          <meta
            name="keywords"
            content="Unlock the future trusted next-generation hardware software solutions quality focus customer-centric insights-driven 20+ happy clients hardware embedded systems software scalability product development IoT platform development research and development PCB design technical consultation web applications mobile applications ERP development industry expertise transformative growth innovative vision tailored solutions user-centric approach efficient integration domain expertise cost-effective solutions diverse service offerings embedded systems IoT software development real-time AI computer vision UI/UX product development technology and platform stack Raspberry Pi LoRa ESP32 FPGA Arduino Azure IoT Hub AWS IoT Agile Methodology adaptability technological excellence client-centric approach continuous support and updates high client retention efficient integration transparent communication"
          />
        </Helmet>

        <div style={{ marginTop: isMobileView ? "10%" : "5%" }}>
          <HomeMain />
        </div>
        <div id="company" style={{ marginTop: "3%" }}>
          <AfterHomePage />
        </div>
        <div id="services">
          <OurServices />
        </div>
        <div id="industries">
          {/* <IndustryExperties /> */}
          <PortfolioProjects
            Heading={"Industry Expertise"}
            Discription={
              "At Octathorn, our tailored solutions cater to diverse industries, enriching operations with enhanced security, efficiency, innovation, and seamless workflows. We drive transformative growth and innovation across various sectors."
            }
          />
        </div>
        <div id="technologies">
          <TechnologyStack />
        </div>
        <HowWeWork />

        <div id="portfolio">
          <Projects />
        </div>
        <EngagementModel />
        <CardCarousel />
        {/*Reviews */}
        <WhyClientChoseUs />
      </Container>
    </Box>
  );
}

export default Home;
