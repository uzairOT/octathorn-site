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
import ContactUs from "../Components/ContactUs/ContactUs";
import { Helmet } from "react-helmet-async";

function Contact() {
  const isMobileView = useMediaQuery("(max-width: 480px)");
  const isTabletView = useMediaQuery("(max-width: 768px)");

  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center">
      <Container
        maxWidth="false"
        sx={{ padding: { xs: "0rem", sm: "0rem", lg: "4.125rem 2rem" } }}
      >
        <Helmet>
          <title>Octathorn-Unlock The Future With Trusted Next-Generation Hardware
            And Software Solution</title>
          <link rel="canonical" href="https://octathorn.com/contact" />
          <meta name="description"
            content=" Get in Touch
Feel free to get in touch with us, for any sort of queries regarding our service. We are 24/7 available to provide you with best in what you ask for.
            At Octathorn Technologies, we pride ourselves on our ability to harness innovation and technology to transform concepts into impactful realities. Our portfolio showcases the embodiment of this commitment—diverse projects that exemplify our proficiency in turning ambitious ideas into scalable solutions. Collaborative excellence is at the core of our approach; partnering with us means experiencing unwavering dedication to your success. Each project in our portfolio stands as a testament to our mastery of cutting-edge technologies and methodologies, showcasing our relentless pursuit of excellence and our drive to push boundaries.
          UNLOCK THE FUTURE WITH TRUSTED NEXT-GENERATION HARDWARE
AND SOFTWARE SOLUTION Embrace the future confidently with our trusted and forward-looking next-generation hardware and software solutions." />
          <meta name="keywords"
            content="Octathorn Technologies innovation technology hardware software cutting-edge solutions diverse projects scalable solutions collaborative excellence dedicated team technical prowess creative thinking unique projects custom embedded systems software development integration high-quality reliable solutions Portfolio innovative products technological know-how robust procedures end-to-end technology solutions real value clients' businesses leading provider high-tech solutions future of mobility automation of machines high-performance products 6-D Process Discover Define Design Develop Deploy Deliver Business Friendly Engagement Model Fixed Price Dedicated Hiring Model Time and Material Reliable Expertise Hardware Software Solutions Clients Choose Us High Client Retention Innovative Vision Tailored Solutions User-Centric Approach Efficient Integration & Compatibility Domain Expertise Transparent Communication Continuous Support & Updates Cost-Effective Solutions Start A Project With Us automated solutions tech-based solutions Service Offerings Embedded Systems IoT Software Development Real-time AI Computer Vision UI/UX Product Development Customized Solutions Technologies Raspberry Pi LoRa ESP32 FPGA Arduino Azure IoT Hub AWS IoT Blynk Altium Eagle KiCad Circuit Maker EasyEDA Angular React Vue Next Node JS Python Java PHP .Net Flutter React Native FireBase MongoDB PostgreSQL " />
        </Helmet>
        <ContactUs />
        <CardCarousel />
        <EngagementModel />
        <WhyClientChoseUs />
      </Container>
    </Box>
  );
}

export default Contact;
