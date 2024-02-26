import { Container, Typography, Box } from "@mui/material";
import React from "react";
import DevelopmentImg from "../../Assests/Services/Web/agile-methodology.png";
const DevelopmentProcess = () => {
  return (
    <Container sx={{ mt: 8, mb: 8 }}>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          color: "#1B2231",
          textAlign: "center",
          fontFamily: "Montserrat",
          fontSize: { lg: "2.5rem", md: '2rem', sm: '1.8rem', xs: '1.5rem' },
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "131.043%",
          textTransform: "capitalize",
          mb: 4,
        }}
      >
        Our Development Process
      </Typography>
      {/* Box 1: Image */}
      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "center", md: "start" },
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          mt: 9,
        }}
      >
        <img
          src={DevelopmentImg}
          alt=" Hardware and Software Solutions"
          style={{
            width: "40%",
            "@media (min-width:600px)": {
              width: "100%", // 100% width on screens larger than or equal to 600px (sm)
            },
          }}
        />
        {/* Box 2: */}
        <Box>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: "#1B2231",
              fontFamily: "Montserrat",
              fontSize: { lg: '1.875rem', md: '1.5rem', sm: '1.25rem', xs: '1.125rem' },
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "181.043%",
              textTransform: "capitalize",
              mb: 2,
              mt: { xs: 0, md: 8 },
              textAlign: { xs: "center", md: "start" },
            }}
          >
            Our Agile Development Process
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            sx={{
              color: "#4c5a67",
              fontFamily: "Inter",
              fontSize: { lg: '1rem', md: '0.9rem', sm: '0.9rem', xs: '0.8rem' },
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "181.043%",
              textTransform: "capitalize",
              textAlign: { xs: "center", md: "start" },
            }}
          >
            Our agile methodology aims to deliver the right product, with
            incremental and frequent delivery of small chunks of functionality
            through small cross-functional self-organizing teams, enabling
            frequent customer feedback and course correction as needed.
            Requirements, plans, and results are evaluated continuously, so our
            agile teams have a natural mechanism for responding to change
            quickly.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
export default DevelopmentProcess;
