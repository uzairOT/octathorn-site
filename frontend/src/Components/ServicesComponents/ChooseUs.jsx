import { Container, Typography, Box, Grid } from "@mui/material";
import React from "react";
import CheckBox from "../../Assests/Services/Web/checkbox.png";
const ChooseUs = () => {

  const items = [
    "High Client Retention",
    "Innovative Vision",
    "Tailored Solutions",
    "User-Centric Approach",
    "Efficient Integration & Compatibility",
    "Domain Expertise",
    "Transparent Communication",
    "Continuous Support & Updates",
    "Cost-Effective Solutions"
  ];

  return (
    <Container sx={{ marginTop: 8 }}>
      <Box >
        <Typography
          variant="h1"
          sx={{
            color: "#1B2231",
            textAlign: "center",
            fontFamily: "Montserrat",
            fontSize: { lg: '2.5rem', md: '2rem', sm: '1.8rem', xs: '1.2rem' },
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "131.043%", // 52.417px
            textTransform: "capitalize",
            // mx: 9,
          }}
        >
          {/* Reliable Expertise in Hardware and Software Solutions{window.innerWidth >= 1280 ? <br /> : null}  Why Clients Choose Us ? */}
          Reliable Expertise in Hardware and Software Solutions <br /> Why Clients Choose Us ?
        </Typography>

      </Box>
      <Grid
        container
        spacing={5}
        sx={{ mt: 4 }}
      >
        {items.map((item, index) => (
          <Grid item xs={6} sm={6} key={index}>
            <Box sx={{ display: "flex", alignItems: "center", }}>
              <img
                style={{ width: "24px", height: "24px" }}
                src={CheckBox}
                alt="Hardware and Software Solutions"
              />
              <Typography
                variant="body2"
                sx={{
                  ml: 2,
                  color: "#4c5a67",
                  fontFamily: "Inter",
                  fontSize: { lg: ' 1rem', md: '0.875rem', sm: '0.75rem', xs: '0.625rem' },
                  fontStyle: "normal",
                  fontWeight: 400,
                }}
              >
                {item}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

    </Container>
  );
};
export default ChooseUs;
