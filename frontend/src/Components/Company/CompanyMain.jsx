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
import { ReactComponent as CompanyLaptop } from "../../Assests/Company/About1.svg";
import { ReactComponent as CompanyTab } from "../../Assests/Company/About2.svg";

import CompanyLaptopImg from "../../Assests/Company/Company1.png";
import CompanyTabImg from "../../Assests/Company/Company2.png";
import { Link } from "react-router-dom";


function CompanyMain() {
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
    ? "80%"
    : isVerySmallLaptop
      ? "80%"
      : isSmallLaptop
        ? "100%"
        : "100%";

  const marginLeftValue = isVvSmallLaptop
    ? "0rem"
    : isVerySmallLaptop
      ? "0rem"
      : isSmallLaptop
        ? "0rem"
        : "10rem";


  let CompanyImage;

  if (isLG || isMD) {
    CompanyImage = CompanyLaptopImg;
  } else if (isSM) {
    CompanyImage = CompanyTabImg;
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
        marginTop: "5rem",
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
          variant="body1" component="h1"
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
          variant="body1" component="h1"
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
        > Company
        </Typography>

        {/* Button */}

        <Typography
          variant="subtitle2"
          component="p"
          color="#4C5A67"
          sx={{
            width: { lg: "73%", md: "85%" },
            fontSize: { lg: "16px", sm: "14px", xs: "12px" },
            fontWeight: 400,
            fontFamily: 'Inter',
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
          At Octathorn Technologies, we are a dynamic and innovative startup passionate about delivering cutting-edge solutions in both hardware and software domains. Established with a vision to revolutionize technology-driven services,
          we pride ourselves on our commitment to excellence and creativity.
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
                marginLeft: { lg: "7rem", md: "10rem", sm: "3rem" },
                // marginTop: { lg: "1rem", md: "-2rem" },
              }}
            >

              <img src={CompanyImage} width={widthValue} alt="" />

            </Box>
          </Fade>
        )}
      </Grid>

    </Grid>
  );
}

export default CompanyMain;
