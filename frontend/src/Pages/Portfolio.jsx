import PortfolioMain from "../Components/Portfolio/PortfolioMain";
import { Box, Container, useMediaQuery } from "@mui/material";

import PortfolioProjects from "../Components/Portfolio/PortfolioProjects";
import ContactProject from "../Components/ContactUs/ContactProject";
import EngagementModel from "../Components/EngagementModel/EngagementModel";
import WhyClientChooseUs from "../Components/WhyClientsChooseUs/WhyClientsChooseUs";

import topBGTab from "../Assests/home/topBgTab.png";
import topBGMobile from "../Assests/home/topRightbgMobile.png";
import topRightBg from "../Assests/Services/Web/ServiceBg.png";
import ContactRefer from "../Components/ContactUs/ContactRefer";
import { Helmet } from "react-helmet-async";

function Portfolio() {
  const isMobileView = useMediaQuery("(max-width: 600px)");
  const isTabletView = useMediaQuery("(max-width: 900px)");
  return (
    <Box
      // sx={{ contain: "content" }}
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="relative"
      sx={{ backgroundColor: "#F6F6F6", contain: { xs: "content", sm: 'content', md: "content", lg: "none" } }}
    >
      <Helmet>
        <title>Octathorn- Portfolio</title>
        <link rel="canonical" href="https://octathorn.com/portfolio" />
        <meta name="description"
          content="At Octathorn Technologies, we pride ourselves on our ability to harness innovation and technology to transform concepts into impactful realities. Our portfolio showcases the embodiment of this commitment—diverse projects that exemplify our proficiency in turning ambitious ideas into scalable solutions. Collaborative excellence is at the core of our approach; partnering with us means experiencing unwavering dedication to your success. Each project in our portfolio stands as a testament to our mastery of cutting-edge technologies and methodologies, showcasing our relentless pursuit of excellence and our drive to push boundaries.
          UNLOCK THE FUTURE WITH TRUSTED NEXT- GENERATION HARDWARE
AND SOFTWARE SOLUTION Embrace the future confidently with our trusted and forward-looking next-generation hardware and software solutions." />
        <meta name="keywords"
          content="Octathorn Technologies innovation technology hardware software cutting-edge solutions diverse projects scalable solutions collaborative excellence dedicated team technical prowess creative thinking unique projects custom embedded systems software development integration high-quality reliable solutions Portfolio innovative products technological know-how robust procedures end-to-end technology solutions real value clients' businesses leading provider high-tech solutions future of mobility automation of machines high-performance products 6-D Process Discover Define Design Develop Deploy Deliver Business Friendly Engagement Model Fixed Price Dedicated Hiring Model Time and Material Reliable Expertise Hardware Software Solutions Clients Choose Us High Client Retention Innovative Vision Tailored Solutions User-Centric Approach Efficient Integration & Compatibility Domain Expertise Transparent Communication Continuous Support & Updates Cost-Effective Solutions Start A Project With Us automated solutions tech-based solutions Service Offerings Embedded Systems IoT Software Development Real-time AI Computer Vision UI/UX Product Development Customized Solutions Technologies Raspberry Pi LoRa ESP32 FPGA Arduino Azure IoT Hub AWS IoT Blynk Altium Eagle KiCad Circuit Maker EasyEDA Angular React Vue Next Node JS Python Java PHP .Net Flutter React Native FireBase MongoDB PostgreSQL " />
      </Helmet>
      {isMobileView ? (
        <img
          src={topBGMobile}
          alt="Octathorn technologies Hardware & Software Logo"
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
          alt="Octathorn technologies Hardware & Software Logo"
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
          alt="Octathorn technologies Hardware & Software Logo"
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
        sx={{ padding: { xs: "0rem", sm: "0rem", lg: "1.125rem 2.5rem" }, mt: 5, zIndex: 1 }}
      >

        <PortfolioMain />
        <PortfolioProjects />
        <EngagementModel />

        <WhyClientChooseUs />

        <div style={{ marginTop: '8%', backgroundColor: "#FFF", marginLeft: "-2rem", marginRight: "-2rem" }}>
          <ContactRefer />
        </div>
      </Container>
    </Box>
  );
}

export default Portfolio;