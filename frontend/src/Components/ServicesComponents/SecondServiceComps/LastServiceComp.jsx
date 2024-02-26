import React from "react";
import {
  Box,
  Typography,
  Container,
  dividerClasses,
  useMediaQuery,
} from "@mui/material";
import ImageSlider from "../UI/Sliders/ImageSlider";

function LastServiceComp() {
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
        >
          Trusted By{" "}
          <Box component="span" fontWeight="bold" style={{ color: "#319AC7" }}>
            20+
          </Box>{" "}
          Happy Clients including these Fortune companies
        </Typography>
      </Box>
      <ImageSlider />
    </Box>
  );
}
export default LastServiceComp;
