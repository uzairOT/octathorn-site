import { Box, Container, useMediaQuery } from "@mui/material";
import CompanyMain from "../Components/Company/CompanyMain";
import AboutUs from "../Components/Company/AboutUs";
import DProcess from "../Components/Company/DProcess";
import EngagementModel from "../Components/EngagementModel/EngagementModel"
import ChooseUs from "../Components/ServicesComponents/ChooseUs";
import WhyClientsChooseUs from "../Components/WhyClientsChooseUs/WhyClientsChooseUs";
import topBGTab from "../Assests/home/topBgTab.png";
import topBGMobile from "../Assests/home/topRightbgMobile.png";
import topRightBg from "../Assests/Services/Web/ServiceBg.png";
import ContactRefer from "../Components/ContactUs/ContactRefer";
import { Helmet } from "react-helmet-async";
function Company() {
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
        <title>Octathorn-Unlock The Future With Trusted Next-Generation Hardware
          And Software Solution</title>
        <link rel="canonical" href="https://octathorn.com/about" />
        <meta name="description"
          content="At Octathorn Technologies, we are a dynamic and innovative startup passionate about delivering cutting-edge solutions in both hardware and software domains. Established with a vision to revolutionize technology-driven services, we pride ourselves on our commitment to excellence and creativity. 
          UNLOCK THE FUTURE WITH TRUSTED NEXT- HARDWARE
AND SOFTWARE SOLUTION Embrace the future confidently with our trusted and forward-looking next-generation hardware and software solutions." />
        <meta name="keywords"
          content="Octathorn Technologies innovative startup cutting-edge solutions hardware software domains technology-driven services excellence creativity innovation core dedicated team technical prowess creative thinking unique projects custom embedded systems software development integration high-quality reliable solutions Mission innovative products technological know-how robust procedures end-to-end technology solutions real value clients' businesses Vision leading provider high-tech solutions future of mobility automation of machines high-performance products 6-D Process Discover Define Design Develop Deploy Deliver Business Friendly Engagement Model Fixed Price Dedicated Hiring Model Time and Material Reliable Expertise Hardware Software Solutions Clients Choose Us High Client Retention Innovative Vision Tailored Solutions User-Centric Approach Efficient Integration & Compatibility Domain Expertise Transparent Communication Continuous Support & Updates Cost-Effective Solutions Start A Project With Us automated solutions tech-based solutions Get in Touch Service Offerings Embedded Systems IoT Software Development Real-time AI Computer Vision UI/UX Product Development Customized Solutions Technologies Raspberry Pi LoRa ESP32 FPGA Arduino Azure IoT Hub AWS IoT Blynk Altium Eagle KiCad Circuit Maker EasyEDA Angular React Vue Next Node JS Python Java PHP .Net Flutter React Native FireBase MongoDB PostgreSQL " />
      </Helmet>
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
        sx={{ padding: { xs: "0rem", sm: "0rem", lg: "1.125rem 2.5rem", zIndex: 1 } }}
      >
        <CompanyMain />
        <div style={{ marginTop: '8%', backgroundColor: "#FFF", marginLeft: "-2rem", marginRight: "-2rem", }}>
          <AboutUs />
        </div>
        <div style={{ marginTop: '5%' }}>
          <DProcess />
        </div>
        <EngagementModel />
        <WhyClientsChooseUs />

        <div style={{ marginTop: '8%', backgroundColor: "#FFF", marginLeft: "-2rem", marginRight: "-2rem", marginBottom: "-1rem" }}>
          <ContactRefer />
        </div>
      </Container>
    </Box>

  );
}

export default Company; 