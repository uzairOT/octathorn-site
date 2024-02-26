//................
import React from "react";
import { useState } from "react";
import ControlledAccordions from "./DropDown";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as GGG } from "../../Assests/contactAssets/Googleccc.svg";
import Twis from "../../Assests/contactAssets/Twis";
import { ReactComponent as Links } from "../../Assests/contactAssets/linkc.svg";
import Facebooks from "../../Assests/contactAssets/Facebooks";
import Instas from "../../Assests/contactAssets/Instas";
// import Links from "../../Assests/contactAssets/Links";
import { animateScroll as scroll } from "react-scroll";
import Home from "../../Pages/Home";
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
import {
  EmbeddedTech,
  MobTech,
  FrontEndTech,
  BackEndTech,
  IotTech,
  PcbTech,
  DatabaseTech,
} from "../../Components/Technologies/TechnologyData";

import {
  Grid,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  li,
  Container,
} from "@mui/material";
import Logo from "../../Assests/octalogo.png";
import useMediaQuery from "@mui/material/useMediaQuery";
// import TwiSvg from "../../Assests/TwiSvg";

import "./Footer.css";
import TechList from "./TechList";
import GOOGLE from "../../Assests/contactAssets/googleIcon.png";
import INSTA from "../../Assests/contactAssets/instaS.png";
import FB from "../../Assests/contactAssets/facebookS.png";
import LINKD from "../../Assests/contactAssets/linkS.png";
import TWIT from "../../Assests/contactAssets/twiS.png";

import ServiceCompWeb2 from "../ServicesComponents/SecondServiceComps/ServiceCompWeb2";
import swal from "sweetalert";
export const techList = [
  "Raspberry Pi",
  "LoRa",
  "ESP32",
  "FPGA",
  "Arduino",
  "Azure IoT Hub",
  "AWS IoT",
  "Blynk",
  "Arduino IoT",
  "Altium",
  "Eagle",
  "KiCad",
  "Circuit Maker",
  "EasyEDA",
  "Angular",
  "React",
  "Vue",
  "Next",
  "Node JS",
  "Python",
  "Java",
  "PHP",
  ".Net",
  "Flutter",
  "React Native",
  "FireBase",
  "Mongo DB",
  "PostgreSQL",
];

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://octathorn.com/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Email sent successfully
        //console.log("Email sent!");
        swal("Success", "Thank you for subscribing.", "success");
        document.getElementById("email").value = "";
        scroll.scrollToTop();
      } else {
        // Error sending email
        swal("Error", "Failed to send email", "error");
      }
    } catch (error) {
      console.error("An error occurred", error);
      swal("Error", "An error occurred", "error");
    }
  };

  const handleTechItemClick = (tech) => {
    let techState;
    let techuseState;

    // Assuming you have separate data for each technology type
    switch (tech) {
      // Embedded System
      case "Raspberry Pi":
        techState = EmbeddedTech;
        techuseState = "Raspberry Pi";
        break;
      case "LoRa":
        techState = EmbeddedTech;
        techuseState = "LoRa";
        break;
      case "ESP32":
        techState = EmbeddedTech;
        techuseState = "ESP32";
        break;
      case "FPGA":
        techState = EmbeddedTech;
        techuseState = "FPGA";
        break;
      case "Arduino":
        techState = EmbeddedTech;
        techuseState = "Arduino";
        break;

      // Internet of Things (ioT)
      case "Azure IoT Hub":
        techState = IotTech;
        techuseState = "Azure IoT Hub";
        break;
      case "AWS IoT":
        techState = IotTech;
        techuseState = "AWS IoT";
        break;
      case "Blynk":
        techState = IotTech;
        techuseState = "Blynk";
        break;
      case "Arduino IoT":
        techState = IotTech;
        techuseState = "Arduino IoT";
        break;
      // PCB
      case "Altium":
        techState = PcbTech;
        techuseState = "Altium";
        break;
      case "Eagle":
        techState = PcbTech;
        techuseState = "Eagle";
        break;
      case "KiCad":
        techState = PcbTech;
        techuseState = "KiCad";
        break;
      case "Circuit Maker":
        techState = PcbTech;
        techuseState = "Circuit Maker";
        break;
      case "EasyEDA":
        techState = PcbTech;
        techuseState = "EasyEDA";
        break;
      // FrontEnd
      case "Angular":
        techState = FrontEndTech;
        techuseState = "Angular";
        break;
      case "React":
        techState = FrontEndTech;
        techuseState = "React";
        break;
      case "Vue":
        techState = FrontEndTech;
        techuseState = "Vue";
        break;
      case "Next":
        techState = FrontEndTech;
        techuseState = "Next";
        break;
      // BackEnd
      case "Node JS":
        techState = BackEndTech;
        techuseState = "Node JS";
        break;
      case "Python":
        techState = BackEndTech;
        techuseState = "Python";
        break;
      case "Java":
        techState = BackEndTech;
        techuseState = "Java";
        break;
      case "PHP":
        techState = BackEndTech;
        techuseState = "PHP";
        break;
      case ".Net":
        techState = BackEndTech;
        techuseState = ".Net";
        break;

      // MobileApp Development
      case "Flutter":
        techState = MobTech;
        techuseState = "Flutter";
        break;
      case "React Native":
        techState = MobTech;
        techuseState = "React Native";
        break;

      // Database
      case "FireBase":
        techState = DatabaseTech;
        techuseState = "FireBase";
        break;
      case "Mongo DB":
        techState = DatabaseTech;
        techuseState = "Mongo DB";
        break;
      case "PostgreSQL":
        techState = DatabaseTech;
        techuseState = "PostgreSQL";
        break;

      // Add other cases for different technologies if needed
      default:
        techState = null; // Default state if no match
    }
    const stateObject = {
      techState: techState,
      techuseState: techuseState,
    };

    const headingWithoutSpaces = techState[0].TechHeading[0].replace(/\s/g, "").toLowerCase();
    const itemWithoutSpaces = techuseState.replace(/\s/g, "").toLowerCase();
    navigate(`/technologies/${headingWithoutSpaces}`, {
      state: stateObject,
    });
    // navigate("/Technologies", { state: stateObject });
  };
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  return (
    <footer>
      <Grid container sx={{ padding: "2rem 2rem" }} backgroundColor="#0E4366">
        <Grid
          item
          container
          lg={3}
          md={12}
          sm={12}
          xs={12}
          sx={{
            gap: { lg: "50px", sm: "40px", xs: "10px" },
            alignItems: { lg: "start", xs: "center" },
            justifyContent: { lg: "start", xs: "center" },
            paddingLeft: { lg: "2rem", md: "0rem", sm: "0rem", xs: "0rem" },

            display: "flex",

            // border: "2px solid white",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "171px", // width on extra-small screens
                sm: "249px", // width on medium screens and larger
              },
              height: "74px",
            }}
          >
            <img src={Logo} alt="Octathorn technologies Hardware & Software Logo" style={{ width: "100%" }} />
          </Box>

          <Grid
            container
            direction={{ xs: "column", sm: "row", md: "row" }}
            sx={{
              gap: { lg: "20px", sm: "40px", xs: "20px" },
              alignItems: { lg: "start", xs: "center" },
              justifyContent: { lg: "start", xs: "center" },
            }}
          >
            <Typography
              sx={[
                {
                  color: "#ffffff",
                  fontSize: { lg: "24px", sm: "22px", xs: "15px" },
                  width: { lg: "380px" },
                  minWidth: { lg: "320px", xs: "auto" },
                  fontWeight: "600",
                  textAlign: "start",
                  fontFamily: "Montserrat",
                },
              ]}
            >
              Want to talk about your Project?
            </Typography>

            {/* Button */}
            <a href="/contact" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                sx={{
                  width: { sm: "170px", xs: "150px" },
                  height: { sm: "49px", xs: "43px" },
                  fontSize: {
                    lg: "15px",
                    md: "15px",
                    sm: "15px",
                    xs: "13px",
                  },
                  borderColor: "#F6F6F6",
                  fontFamily: "Montserrat",
                  borderWidth: "1px",
                  color: "#ffffff",
                  textTransform: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Schedule a call
              </Button>
            </a>
          </Grid>

          <Typography
            color="#F2F8FA"
            sx={{
              width: { lg: "355px", md: "90%" },
              fontSize: { lg: "16px", sm: "14px" },
              lineHeight: "19.5px",
              fontWeight: 400,
              fontFamily: "Inter",
              textAlign: { lg: "left", sm: "center" },
              display: { xs: "none", sm: "block" },
              paddingBottom: "5rem",
            }}
          >
            We take pride in our diverse service offerings, with each one
            standing strong on its own merits. Explore our offerings, which span
            embedded systems, IoT, software development, real-time AI, computer
            vision, UI/UX, and product development. Additionally, we're here to
            provide customized solutions tailored to your specific needs and
            feasibility.
          </Typography>
        </Grid>
        <>
          {isSmallScreen ? (
            <ControlledAccordions techList={techList} onItemClick={handleTechItemClick} />
          ) : (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
              sx={{
                gap: "15px",
                display: {
                  lg: "flex",
                  md: "flex",
                  sm: "flex",
                },
                flexDirection: "column",
                alignItems: { lg: "start", sm: "start", xs: "center" },
                justifyContent: { lg: "start", sm: "start", xs: "center" },
                paddingTop: { lg: "2rem" },
                paddingLeft: {
                  lg: "4rem",
                  md: "0rem",
                  sm: "0rem",
                  xs: "0rem",
                },
                // border: "2px solid red",
              }}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "22px",
                  lineHeight: "26.82px",
                  fontWeight: 600,
                  fontFamily: "Montserrat",
                }}
              >
                Services
              </Typography>

              <List
                sx={{
                  color: "#ffffff",
                  fontWeight: "400",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  lineHeight: "19.5px",
                  opacity: "70%",
                  gap: "12px",
                  display: "flex",
                  alignItems: "start",
                  flexDirection: "column",
                  cursor: "pointer",
                }}
              >
                <li
                  onClick={() => {
                    const headingWithoutSpaces =
                      ProductService[0].ServiceHeading[0].replace(/\s/g, "").toLowerCase();
                    navigate(`/services/${headingWithoutSpaces}`, {
                      state: ProductService,
                    });
                    scroll.scrollToTop({ duration: 1000 });
                  }}
                >
                  Product Development
                </li>
                <li
                  onClick={() => {
                    const headingWithoutSpaces =
                      EmbeddedService[0].ServiceHeading[0].replace(/\s/g, "").toLowerCase();
                    navigate(`/services/${headingWithoutSpaces}`, {
                      state: EmbeddedService,
                    });
                    scroll.scrollToTop({ duration: 1000 });
                  }}
                >
                  Embedded System
                </li>
                <li
                  onClick={() => {
                    const headingWithoutSpaces =
                      IotService[0].ServiceHeading[0].replace(/\s/g, "").toLowerCase();
                    navigate(`/services/${headingWithoutSpaces}`, {
                      state: IotService,
                    });
                    scroll.scrollToTop({ duration: 1000 });
                  }}
                >
                  IOT Platform Development
                </li>
                <li
                  onClick={() => {
                    const headingWithoutSpaces =
                      RDService[0].ServiceHeading[0].replace(/\s/g, "").toLowerCase();
                    navigate(`/services/${headingWithoutSpaces}`, {
                      state: RDService,
                    });
                    scroll.scrollToTop({ duration: 1000 });
                  }}
                >
                  Research & Development
                </li>
                <li
                  onClick={() => {
                    const headingWithoutSpaces =
                      PcbService[0].ServiceHeading[0].replace(/\s/g, "").toLowerCase();
                    navigate(`/services/${headingWithoutSpaces}`, {
                      state: PcbService,
                    });
                    scroll.scrollToTop({ duration: 1000 });
                  }}
                >
                  PCB
                </li>
                <li
                  onClick={() => {
                    const headingWithoutSpaces =
                      ErpService[0].ServiceHeading[0].replace(/\s/g, "").toLowerCase();
                    navigate(`/services/${headingWithoutSpaces}`, {
                      state: ErpService,
                    });
                    scroll.scrollToTop({ duration: 1000 });
                  }}
                >
                  ERP
                </li>
                <li
                  onClick={() => {
                    const headingWithoutSpaces =
                      WebService[0].ServiceHeading[0].replace(/\s/g, "").toLowerCase();
                    navigate(`/services/${headingWithoutSpaces}`, {
                      state: WebService,
                    });
                    scroll.scrollToTop({ duration: 1000 });
                  }}
                >
                  Web Applications
                </li>
                <li
                  onClick={() => {
                    const headingWithoutSpaces =
                      MobileService[0].ServiceHeading[0].replace(/\s/g, "").toLowerCase();
                    navigate(`/services/${headingWithoutSpaces}`, {
                      state: MobileService,
                    });
                    scroll.scrollToTop({ duration: 1000 });
                  }}
                >
                  Mobile Application
                </li>
                <li
                  onClick={() => {
                    const headingWithoutSpaces =
                      TechnicalService[0].ServiceHeading[0].replace(/\s/g, "").toLowerCase();
                    navigate(`/services/${headingWithoutSpaces}`, {
                      state: TechnicalService,
                    });
                    scroll.scrollToTop({ duration: 1000 });
                  }}
                >
                  Technical Consultation
                </li>
              </List>
            </Grid>
          )}
        </>

        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={3}
          sx={{
            gap: "15px",
            display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
            flexDirection: "column",
            alignItems: { lg: "start", sm: "start", xs: "center" },
            justifyContent: { lg: "start", sm: "start", xs: "center" },
            padding: { lg: "2rem" },
            // border: "2px solid green",
          }}
        >
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "22px",
              lineHeight: "26.82px",
              fontWeight: "600",
              fontFamily: "Montserrat",
              display: "flex",
              alignItems: "start",
            }}
          >
            Technologies
          </Typography>
          <Grid container>
            <TechList techList={techList} onItemClick={handleTechItemClick} />
          </Grid>
        </Grid>

        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={3}
          xl={3}
          sx={{
            display: "flex",
            alignItems: { lg: "start", xs: "start" },
            justifyContent: { lg: "start", xs: "start" },
            gap: { lg: "6rem", md: "0", sm: "0", xs: "3rem" },
            padding: "2rem 0",

            // border: "2px solid black",
          }}
        >
          {/* Heading */}
          <Grid
            container
            item
            xs={12}
            sm={6}
            md={6}
            lg={12}
            xl={12}
            sx={{
              // border: "2px solid black",
              gap: "0.5rem",
            }}
          >
            <Typography
              sx={{

                paddingLeft: { lg: "1rem" },
                display: "flex",
                flexDirection: "row",
                color: "#ffffff",
                fontSize: {
                  lg: "1.4rem",
                  md: "1.3rem",
                  sm: "1.3rem",
                  xs: "0.9rem",
                },
                fontWeight: "600",
                fontFamily: "Montserrat",
                marginBottom: "1rem",
              }}
            >
              Get in touch
            </Typography>

            {/* Text with SVG - Location */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                textAlign: "start",
                // border: "2px solid purple",
              }}
            >
              <Box>
                <svg
                  // style={{ paddingTop: "2rem" }}
                  width="40"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 12C10.6875 12 11.2762 11.7648 11.7663 11.2944C12.2563 10.824 12.5008 10.2592 12.5 9.6C12.5 8.94 12.255 8.3748 11.765 7.9044C11.275 7.434 10.6867 7.1992 10 7.2C9.3125 7.2 8.72375 7.4352 8.23375 7.9056C7.74375 8.376 7.49917 8.9408 7.5 9.6C7.5 10.26 7.745 10.8252 8.235 11.2956C8.725 11.766 9.31333 12.0008 10 12ZM10 24C6.64583 21.26 4.14083 18.7152 2.485 16.3656C0.829167 14.016 0.000833333 11.8408 0 9.84C0 6.84 1.00542 4.45 3.01625 2.67C5.02708 0.89 7.355 0 10 0C12.6458 0 14.9742 0.89 16.985 2.67C18.9958 4.45 20.0008 6.84 20 9.84C20 11.84 19.1717 14.0152 17.515 16.3656C15.8583 18.716 13.3533 21.2608 10 24Z"
                    fill="white"
                  />
                </svg>
              </Box>
              <Typography
                sx={{
                  width: "80%",
                  color: "#F2F8FA",
                  paddingLeft: "1rem",
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "16px",
                    xs: "12px",
                  },
                  fontWeight: "400",
                  fontFamily: "Inter",
                }}
              >
                office 608, Alpha techno square NASTP, old airport rd. building
                chaklala cantt. RWP, punjab pakistan
              </Typography>
            </Box>

            {/* Text with SVG - Email */}
            <Box
              sx={{
                display: "flex",
                FlexDirection: "row",
                textAlign: "start",
                width: "100%",
                marginTop: "0.5rem",
                // border: "2px solid purple",
              }}
            >
              <Box
                sx={{
                  paddingLeft: "0.75rem",
                }}
              >
                <svg
                  width="22"
                  height="17"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    width: "100%", // Set the width to 100% for responsiveness
                    height: "auto",
                  }}
                >
                  <path
                    d="M22 2.2C22 0.99 21.01 0 19.8 0H2.2C0.99 0 0 0.99 0 2.2V15.4C0 16.61 0.99 17.6 2.2 17.6H19.8C21.01 17.6 22 16.61 22 15.4V2.2ZM19.8 2.2L11 7.7L2.2 2.2H19.8ZM19.8 15.4H2.2V4.4L11 9.9L19.8 4.4V15.4Z"
                    fill="white"
                  />
                </svg>
              </Box>

              <Typography
                sx={{
                  paddingLeft: "0.5rem",
                  marginTop: {
                    lg: "-0.2rem",
                    md: "-0.2rem",
                    sm: "-0.2rem",
                    xs: "-0.1rem",
                  },
                  width: "80%",
                  color: "#F2F8FA",
                  paddingLeft: "1.5rem",
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "16px",
                    xs: "12px",
                  },
                  fontWeight: "400",
                  fontFamily: "Inter",
                }}
              >
                admin@octathorn.com
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            md={6}
            lg={12}
            xl={12}
            sx={{
              // border: "2px solid black",
              paddingLeft: { lg: "1.5rem", md: "0rem", sm: "0rem" },
              gap: { lg: "0.3rem", sm: "1.7rem" },
              contain: "content",
            }}
          >
            {/* Subscribe Section */}
            <Typography
              sx={{
                color: "#FFFFFF",

                marginBottom: "0.7rem",
                fontWeight: "600",
                fontSize: { lg: "22px", md: "22px", sm: "22px", xs: "16px" },
                fontFamily: "Montserrat"
              }}
            >
              Subscribe
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                // border: "2px solid pink",
              }}
            >
              <input
                type="email"
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                style={{
                  padding: "8px",
                  fontSize: "12px",
                  fontFamily: "Inter",

                  marginRight: "8px",
                  width: "65%",
                  borderRadius: "4px",
                  borderWidth: "1px",
                }}
                id="email"
              />
              <Button
                variant="outlined"
                sx={{
                  width: "35%",
                  borderColor: "#F6F6F6",
                  fontSize: {
                    lg: "15px",
                    md: "15px",
                    sm: "13px",
                    xs: "12px",
                  },
                  borderWidth: "1px",
                  fontFamily: "Montserrat",

                  color: "#ffffff",
                  textTransform: "none",
                }}
                onClick={handleSubmit}
              >
                Subscribe
              </Button>
            </Box>

            {/* Social Media Icons */}
            {/* <Box
              sx={{
                display: "flex",

                width: "100%",
                border: "2px solid blue",
                //   justifyContent: "center",
                //   alignItems: "center",
                // mx: { xs: "auto", sm: 0, lg: 0 }, // Center horizontally
                //   textAlign: "center",
              }}
            > */}

            {/* <TwiSvg />
              <InstaSvg />
              <a
                style={{ cursor: "pointer" }}
                href="https://www.linkedin.com/company/octathorn/"
              >
                <LinkSvg />
              </a>
              <img
                src={GOOGLE}
                alt="google"
                style={{ cursor: "pointer" }}
                onClick={() => window.open("mailto:admin@octathorn.com")}
              />
              <FacebookSvg /> */}

            {/* </Box> */}

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                color: "#0E4366",
                // border: "2px solid blue",
                width: "100%",
                justifyContent: {
                  lg: "flex-start",
                  md: "flex-start",
                  sm: "center",
                  xs: "center",
                },
                alignItems: {
                  lg: "flex-start",
                  md: "flex-start",
                  sm: "center",
                  xs: "center",
                },
                textAlign: {
                  lg: "flex-start",
                  md: "flex-start",
                  sm: "center",
                  xs: "center",
                },
                marginTop: "1rem",
                marginLeft: "-1rem",
              }}
            >
              {/* <Twis />

              <Instas /> */}

              <Links
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/company/octathorn/")
                }
              />

              {/* <GGG
                style={{ cursor: "pointer" }}
                onClick={() => window.open("mailto:admin@octathorn.com")}
              /> */}
              <img
                src={GOOGLE}
                alt="google"
                style={{ cursor: "pointer" }}
                onClick={() => window.open("mailto:admin@octathorn.com")}
              />
              <div style={{ cursor: 'pointer' }}
                onClick={() =>
                  window.open("https://www.facebook.com/octathorntechnologies?mibextid=JRoKGi")
                }>
                <Facebooks />
              </div>

            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // border: "2px solid yellow",
          }}
        >
          <Typography
            sx={{
              fontSize: { lg: "16px", md: "15px", sm: "14px", xs: "0.7rem" },
              // width: { lg: "336px", md: "320px", sm: "273px", xs: "290px" },
              fontFamily: "Montserrat",
              width: "100%",
              fontWeight: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#ffffff",
              textTransform: "none",
              opacity: "50%",
            }}
          >
            © {new Date().getFullYear()} All rights reserved - octathorn.com
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
