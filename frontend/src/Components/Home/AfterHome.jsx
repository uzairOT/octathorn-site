import React from "react";
import {
  Box,
  Typography,
  Container,
  dividerClasses,
  useMediaQuery,
} from "@mui/material";
import ImageSlider from "../UI/Sliders/ImageSlider";
import StatsCard from "../UI/Cards/StatsCard";

function AfterHomePage() {
  const isLargeScreen = useMediaQuery("(min-width: 900px)");
  return (
    <Box padding={2}>
      {/*<Box width="100%" display="flex" flexDirection="column" alignItems="center" >
        <Container maxWidth="false" sx={{ padding: {xs:'0.9rem 1.5rem',sm: '4.125rem 1.5rem',lg:'4.125rem 4.5rem'} }}>*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2%",
          marginBottom: "0%",
        }}
      >
        <Typography
          variant="h1" component="h1"
          color={"#1B2231"}
          fontSize={{
            lg: "1.875rem",
            md: "1.875rem",
            sm: "1.375rem",
            xs: "1.125rem",
          }}
          fontWeight={600}
          fontFamily={"Montserrat"}
          letterSpacing={0.2}
          sx={{
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
          Trusted By{" "}
          <Box className="btn-shine" component="body1" fontWeight="bold" style={{ color: "#319AC7" }}>
            20+
          </Box>{" "}
          Happy Clients including these companies
        </Typography>
      </Box>
      <ImageSlider />
      <Typography
        variant="h1" component="h1"
        color={"#1B2231"}
        fontSize={{
          lg: "2.5rem",
          md: "2.5rem",
          sm: "1.8rem",
          xs: "1.25rem",
        }}
        fontWeight={600}
        fontFamily={"Montserrat"}
        mt={5}
        sx={{
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
        {isLargeScreen ? (
          <>
            Bridging Hardware, Embedded Systems, and Software for <br />
            Unprecedented Performance, Flexibility, and Revolutionary Growth.
          </>
        ) : (
          <>
            Bridging Hardware, Embedded Systems, and Software for Unprecedented
            Performance, Flexibility, and Revolutionary Growth.
          </>
        )}
      </Typography>
      {/* <Typography
        color={"#1B2231"}
        fontSize={{
          lg: "2.5rem",
          md: "2.5rem",
          sm: "1.8rem",
          xs: "1.25rem",
        }}
        fontWeight={600}
        fontFamily={"Montserrat"}
      ></Typography> */}
      <Typography
        variant="subtitle2" component="p"
        sx={{
          fontSize: { lg: "1rem", md: "1rem", sm: "0.875rem", xs: "0.75rem" },
          color: "#4c5a67",
          fontWeight: 400,
          fontFamily: "Inter",
          paddingTop: 2,
          width: {
            lg: "65.25rem",
            md: "52.25rem",
            sm: "90%",
            xs: "90%",
          },
          marginLeft: "auto",
          marginRight: "auto",
        }}

      // variant="body2"
      // width="100%"
      // maxWidth="70%"
      // color={"#4c5a67"}
      // fontSize={{ lg: "1rem", md: "1rem", sm: "0.875rem", xs: "0.75rem" }}
      // fontWeight={400}
      // fontFamily={"Inter"}
      // lineHeight={"170.051%"}
      // mt={2}
      >
        Our focus is on aligning hardware, embedded systems, and software,
        crafting effective solutions that bring your ideas to life. We stand by
        you from design initiation to development, testing, and ongoing
        maintenance. Employing a tailored agile strategy, we enhance your path
        for accelerated growth and exceptional results.
      </Typography>
      <StatsCard />
      {/* </Container>
        </Box> */}
    </Box>
  );
}
export default AfterHomePage;
