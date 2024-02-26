import React from "react";
import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  Container,
  Fade,
} from "@mui/material";

import { Box, } from "@mui/system";
import { ReactComponent as IEPHome } from "../../Assests/Portfolio/main.svg";

import ServiceLaptopImg from "../../Assests/Services/Web/ServiceLaptopImg.png";
import ServiceTabImg from "../../Assests/Services/Web/ServiceTabImg.png";
import ServiceMobileImg from "../../Assests/Services/Web/ServiceMobileImg.png";

import { Link } from "react-router-dom";

function PortfolioMain() {
  const isLG = useMediaQuery("(min-width: 1280px)");
  const isMD = useMediaQuery("(min-width: 900px) and (max-width: 1279px)");
  const isSM = useMediaQuery("(min-width: 600px) and (max-width: 900px)");
  const isXS = useMediaQuery("(max-width: 599px)");

  //............
  const isMobileView = useMediaQuery("(max-width: 600px)");
  const isTabletView = useMediaQuery("(max-width: 900px)");
  const isVvSmallLaptop = useMediaQuery("(max-width: 999px)");
  const isVerySmallLaptop = useMediaQuery("(max-width: 1450px)");
  const isSmallLaptop = useMediaQuery("(max-width: 1650px)");
  const widthValue = isVvSmallLaptop
    ? "20rem"
    : isVerySmallLaptop
      ? "25rem"
      : isSmallLaptop
        ? "25rem"
        : "40rem";

  const marginLeftValue = isVvSmallLaptop
    ? "0rem"
    : isVerySmallLaptop
      ? "0rem"
      : isSmallLaptop
        ? "0rem"
        : "10rem";


  let ServiceImage;

  if (isLG || isMD) {
    ServiceImage = ServiceLaptopImg;
  } else if (isSM) {
    ServiceImage = ServiceTabImg;
  } else if (isXS) {
    ServiceImage = ServiceMobileImg;
  }
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
        marginTop: { lg: "5rem", md: "4rem", sm: "4rem", xs: "2rem" },
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
          marginTop: "1rem",
          justifyContent: {
            lg: "center",
            md: "center",
            sm: "start",
            xs: "center",
          },

          // border: "2px solid black",
        }}
      >
        <Typography
          component="h1"
          sx={[
            {
              color: "#1B2231",
              fontSize: { lg: "2.5rem", md: "2.3rem", sm: "2rem", xs: "1.25" },
              fontWeight: "600",
              fontFamily: "Montserrat",
              textAlign: { lg: "left", md: "left", sm: "left", xs: "center" },
              textTransform: "uppercase",
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


            },
          ]}
        >
          our
        </Typography>

        <Typography
          component="h1"
          sx={{
            borderRadius: "1.8125rem 0.375rem",
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
        > Portfolio
        </Typography>

        {/* Button */}

        <Typography
          color="#4c5a67"
          component="p"

          sx={{
            width: { lg: "73%", md: "85%" },
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
          At Octathorn Technologies, we pride ourselves on our ability to harness innovation and technology to transform concepts into impactful realities. Our portfolio showcases the embodiment of this commitment—diverse projects that exemplify our proficiency in turning ambitious ideas into scalable solutions.
          Collaborative excellence is at the core of our approach; partnering with us means experiencing unwavering dedication to your success. Each project in our portfolio stands as a testament to our mastery of cutting-edge technologies and methodologies, showcasing our relentless pursuit of excellence and our drive to push boundaries.
        </Typography>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
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
        {!isMobileView && (
          <Fade in={true} timeout={3000}>
            <Box
              display="flex"
              sx={{
                flexDirection: "column",
                // border: "2px solid red",
                // marginRight: { lg: "4rem", md: "10rem" },
                // marginLeft: { lg: "0rem", md: "-8rem" },
                // marginTop: { lg: "1rem", md: "-2rem" },
              }}
            >
              <IEPHome width={widthValue} />
            </Box>
          </Fade>
        )}
      </Grid>

    </Grid>
  );
}

export default PortfolioMain;
