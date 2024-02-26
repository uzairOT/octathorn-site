import React from "react";
import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./HowWeWork.css";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { Box, height, padding } from "@mui/system";
import HowWeWorkSvg from "../../Assests/HowWeWorkDesk.png";
import HowWeWorkSvg1 from "../../Assests/HowWeWorkTab.png";
import HowWeWorkSvg2 from "../../Assests/HowWeWorkMob.png";

const HowWeWork = () => {
  const isLG = useMediaQuery("(min-width: 1280px)");
  const isMD = useMediaQuery("(min-width: 900px) and (max-width: 1279px)");
  const isSM = useMediaQuery("(min-width: 600px) and (max-width: 900px)");
  const isXS = useMediaQuery("(max-width: 599px)");
  const isSmallLaptop = useMediaQuery("(max-width: 1350px)");
  const isLargeLaptop = useMediaQuery("(max-width: 1900px)");

  const paddingLeftValue = isXS ? "0rem" : isSmallLaptop ? "2rem" : "13rem";

  let SvgComponent;

  if (isLG || isMD) {
    SvgComponent = HowWeWorkSvg;
  } else if (isSM) {
    SvgComponent = HowWeWorkSvg1;
  } else if (isXS) {
    SvgComponent = HowWeWorkSvg2;
  }
  return (
    <Grid
      container
      sx={{
        padding: {
          lg: "2rem 5rem",
          md: "2rem 1rem",
          sm: "1rem 1rem",
          xs: "1rem 1rem",
        },
        backgroundColor: "#F6F6F6",
        marginTop: "5rem",
      }}
    >
      {/* First Section */}
      <Grid
        item
        xs={12}
        sx={{
          marginBottom: { lg: "3rem", md: "3rem", sm: "2.5rem", xs: "1rem" },
          padding: "1rem rem",
          //   border: "1px solid red",
        }}
      >
        <Typography
          variant="h1" component="h1"
          sx={{
            color: "#1B2231",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            fontSize: { lg: "40px", md: "38px", sm: "32px", xs: "20px" },
            fontWeight: 600,
            fontFamily: "Montserrat",
            Width: "100%",
          }}
        >
          How We Work ?
        </Typography>
      </Grid>
      <Grid
        item
        container
        lg={6}
        md={6}
        sm={6}
        xs={12}
        sx={{
          gap: { lg: "1.1rem", sm: "1rem", xs: "1rem" },
          alignItems: { lg: "start", md: "start", sm: "start", xs: "center" },
          justifyContent: {
            lg: "start",
            md: "start",
            sm: "start",
            xs: "center",
          },
          display: "flex",
          flexDirection: "column",
          // paddingLeft: { lg: "12%", md: "6rem", sm: "0rem", xs: "0rem" },
          // border: "2px solid black",
        }}
        paddingLeft={paddingLeftValue}
      >
        <Typography
          variant="h2"
          sx={[
            {
              color: "#1B2231",
              fontSize: { lg: "24px", sm: "20px", xs: "18px" },
              fontWeight: "600",
              fontFamily: "Montserrat",
              textAlign: { lg: "left", md: "left", sm: "left", xs: "center" },
            },
          ]}
        >
          Octathorn's Commitment to <br /> Agile Methodology
        </Typography>

        {/* Button */}

        <Typography
          variant="subtitle2"
          component="p"
          color="#4c5a67"
          sx={{
            width: { lg: "80%", md: "65%" },
            fontSize: { lg: "16px", sm: "14px", xs: "12px" },
            fontWeight: 400,
            fontFamily: "Inter",
            textAlign: { lg: "left", sm: "left", xs: "center" },
            //   display: { xs: "none", sm: "block" },
            paddingBottom: { lg: "3rem", md: "3rem", sm: "2rem", xs: "1rem" },
          }}
        >
          At Octathorn Technologies, our Custom Agile Approach prioritizes
          adaptability and technological excellence for cost-effective software
          solutions. Seamlessly aligned with evolving needs and armed with
          cutting-edge technology, our team ensures solutions that exceed
          expectations while maintaining affordability. Expect a strategic
          partnership focused on maximizing adaptability and expertise in every
          solution we deliver.
        </Typography>
        <a href="/contact" style={{ textDecoration: 'none' }}>
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
            Contact Us
          </Button>
        </a>
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
        <Box>
          {/* <SvgComponent /> */}
          <img src={SvgComponent} alt="" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HowWeWork;
